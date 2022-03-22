import { FILTER_BY } from "./constants";

export function filterBySensorIdAndPm(data, sensorId) {
  if (data.length === 0) return null;
  const filteredData = data.filter(
    (item) =>
      item.sensorId === sensorId &&
      [FILTER_BY.pm10, FILTER_BY.pm25].includes(item.type)
  );
  if (filteredData.length === 0) return null;
  return filteredData.reduce((acc, item) => {
    return { ...acc, [item.type]: [...(acc[item.type] || []), item] };
  }, {});
}

export function calculateAverageByPM(filteredDataByPm) {
  if (!filteredDataByPm) return null;

  return Object.entries(filteredDataByPm).reduce((acc, group) => {
    const [key, items] = group;
    const calculateAverages = calculateAverage(items);
    return { ...acc, [key]: calculateAverages };
  }, {});
}

export function calculateAverage(dataByPM) {
  const today = new Date();
  const todayTime = today.getTime();
  const averages6 = {
    n: 0,
    sum: 0,
  };
  const averages12 = {
    n: 0,
    sum: 0,
  };
  const averages24 = {
    n: dataByPM.length,
    sum: 0,
  };
  dataByPM.forEach((element) => {
    const elementDate = new Date(element.stamp);
    const elementTime = elementDate.getTime();
    const difference = (todayTime - elementTime) / 3600000;
    const value = Number.parseFloat(element.value);
    if (difference <= 6) {
      averages6.n += 1;
      averages6.sum += value;
    }
    if (difference <= 12) {
      averages12.n += 1;
      averages12.sum += value;
    }
    averages24.sum += value;
  });

  const averages = {
    from6: averages6.sum / averages6.n,
    from12: averages12.sum / averages12.n,
    from24: averages24.sum / averages24.n,
  };
  return averages;
}
