import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const baseURL =
  "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees";

export default function DisplayTable() {
  const [table, setTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setTable(response.data);
    });
  }, []);

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date of Joining</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Designation</TableCell>
              </TableRow>
            </TableHead>
            <input
              type="text"
              placeholder="Search by name..."
              className="search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <TableBody>
              {table
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  } else if (
                    item.first_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.first_name}</TableCell>
                      <TableCell>{item.last_name}</TableCell>
                      <TableCell>{item.date_of_birth}</TableCell>
                      <TableCell>{item.address}</TableCell>
                      <TableCell>{item.date_of_joining}</TableCell>
                      <TableCell>{item.salary}</TableCell>
                      <TableCell>{item.designation}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
