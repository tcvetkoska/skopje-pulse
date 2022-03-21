import { styled, Typography } from "@mui/material";
import NoDataContainer from "../../../lib/shared/NoDataContainer";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableColumns } from "../core/constants";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)(() => ({
  fontSize: "16px",
  marginLeft: "10px",
  cursor: "pointer",
  color: "black",
}));
const Headers = styled(TableCell)(() => ({
  fontWeight: 700,
  textAlign: "center",
}));

function RQSensorsListView({ data }) {
  function renderComponents(type, row) {
    const value = row[type];
    switch (type) {
      case "description":
        return <Link to={`/reactQuery/${row.sensorId}`}>{value}</Link>;
      default:
        return <Typography>{value}</Typography>;
    }
  }
  if (data.length === 0) return <NoDataContainer />;
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 5 }}>
      <TableContainer sx={{ maxHeight: "87vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableColumns.map((column) => (
                <Headers
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </Headers>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.sensorId}
                >
                  {tableColumns.map((column) => {
                    return (
                      <TableCell
                        key={`${row.sensorId}_${column.id}`}
                        align={column.align}
                      >
                        {renderComponents(column.id, row)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default RQSensorsListView;
