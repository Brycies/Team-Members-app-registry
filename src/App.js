import * as React from "react";
import "./App.css";

import Header from "./header";
import Employees from "./employees";
import Footer from "./footer";

function App() {
  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob James",
      designation: "JavaScript Developer",
      gender: "Male",
      teamName: "TeamA",
    },

    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "Female",
      teamName: "TeamA",
    },

    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "Female",
      teamName: "TeamA",
    },

    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "Male",
      teamName: "TeamB",
    },

    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNetDeveloper",
      gender: "Male",
      teamName: "TeamB",
    },

    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "Female",
      teamName: "TeamB",
    },

    {
      id: 7,
      fullName: "James Bennet",
      designation: "AngularDeveloper",
      gender: "Male",
      teamName: "TeamC",
    },

    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "Female",
      teamName: "TeamC",
    },

    {
      id: 9,
      fullName: "lita Stone",
      designation: "C++ Developer",
      gender: "Female",
      teamName: "TeamC",
    },

    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "Male",
      teamName: "TeamD",
    },

    {
      id: 11,
      fullName: "Adrian JAcobs",
      designation: "VueDeveloper",
      gender: "Male",
      teamName: "TeamD",
    },

    {
      id: 12,
      fullName: "David Monroe",
      designation: "Graphic Designer",
      gender: "Male",
      teamName: "TeamD",
    },
  ]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.TeamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}
export default App;
