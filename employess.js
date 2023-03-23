import { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob James",
      designation: "JavaScript Developer",
      gender: "Male",
      teamNAme: "TeamA",
    },

    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "Female",
      teamNAme: "TeamA",
    },

    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "Female",
      teamNAme: "TeamA",
    },

    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "Male",
      teamNAme: "TeamB",
    },

    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNetDeveloper",
      gender: "Male",
      teamNAme: "TeamB",
    },

    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "Female",
      teamNAme: "TeamB",
    },

    {
      id: 7,
      fullName: "Jame Bennet",
      designation: "AngularDeveloper",
      gender: "Male",
      teamNAme: "TeamC",
    },

    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "Female",
      teamNAme: "TeamC",
    },

    {
      id: 9,
      fullName: "lita Stone",
      designation: "C++ Developer",
      gender: "Female",
      teamNAme: "TeamC",
    },

    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "Male",
      teamNAme: "TeamD",
    },

    {
      id: 11,
      fullName: "Adrian JAcobs",
      designation: "VueDeveloper",
      gender: "Male",
      teamNAme: "TeamD",
    },

    {
      id: 12,
      fullName: "David Monroe",
      designation: "Graphic Designer",
      gender: "Male",
      teamNAme: "TeamD",
    },
  ]);
  return (
    <main>
      <h1></h1>
    </main>
  );
};
export default Employees;
