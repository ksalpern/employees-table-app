import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL =
  "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees";

export default function DisplayTable() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setTable(response.data);
    });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <tbody>{
        table.map((item) => {
            return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.date_of_birth}</td>
            <td>{item.address}</td>
            <td>{item.date_of_joining}</td>
            <td>{item.date_of_joining}</td>
            <td>{item.designation}</td>
        </tr>
        })
        }</tbody>
      </table>
    </div>
  );
}
