import { useState } from "react";
import SearchFilter from "./SearchFilter";

export default function Citizens() {
  const initialCitizen = [
    { name: "Lisa", age: "25", address: "Tuyan", status: "Active" },
    { name: "Mike", age: "28", address: "Inayagan", status: "Active" },
    { name: "Jane", age: "30", address: "Suba", status: "Inactive" },
    { name: "John", age: "40", address: "Sambag", status: "Inactive" },
    { name: "Mike", age: "32", address: "Whiteland", status: "Active" },
    { name: "John", age: "36", address: "YOSO", status: "Inactive" },
    { name: "Jane", age: "22", address: "Trise-Trise", status: "Active" },
    { name: "Mike", age: "26", address: "Colon", status: "Active" },
    { name: "Lisa", age: "45", address: "Naga", status: "Inactive" },
    { name: "Lisa", age: "43", address: "Tabtuy", status: "Active" },
  ];

  const [citizens, setCitizens] = useState(initialCitizen);
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizen);

  const toggleStatus = (index) => {
    const updatedStatus = filteredCitizens.map((citizen, i) => {
      if (i === index) {
        return {
          ...citizen,
          status: citizen.status === "Active" ? "Inactive" : "Active",
        };
      }
      return citizen;
    });
    setCitizens(updatedStatus);
    setFilteredCitizens(updatedStatus);
  };

  return (
    <div>
      <SearchFilter citizens={citizens} onFilter={setFilteredCitizens} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{citizen.name}</td>
              <td>{citizen.age}</td>
              <td>{citizen.address}</td>
              <td>{citizen.status}</td>
              <td>
                <button onClick={() => toggleStatus(index)}>Click</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
