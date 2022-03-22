import { FILTER_BY } from "./constants";

export function filterBySensorIdAndPm(data, sensorId) {
  const filteredData = data.filter(
    (item) =>
      item.sensorId === sensorId &&
      [FILTER_BY.pm10, FILTER_BY.pm25].includes(item.type)
  );
  return filteredData.reduce((acc, item) => {
    return { ...acc, [item.type]: [...(acc[item.type] || []), item] };
  }, {});
}

export function calculateAverageByPM(filteredDataByPm) {
  return Object.entries(filteredDataByPm).reduce((acc, group) => {
    const [key, items] = group;
    const calculateAverages = calculateAverage(items);
    return { ...acc, [key]: calculateAverages };
  }, {});
}
export function calculation({ sum, n }) {
  if (n === 0) return 0;
  if (sum === 0) return 0;
  return sum / n;
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
    from6: calculation(averages6),
    from12: calculation(averages12),
    from24: calculation(averages24),
  };

  return averages;
}
