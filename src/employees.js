import { useState } from "react";
import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";

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
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees &&
              employees.map((employee) => (
                <div
                  id={employee.id}
                  classNAme="card m-2"
                  style={{ cursor: "pointer" }}
                >
                  <img src={femaleProfile} classNAme="card-img-top" />
                  <div classNaMe="card-body">
                    <h5 className="card-title ">
                      Full Name {employee.fullName}{" "}
                    </h5>
                    <p className="card-text">
                      <b>Designation</b> {employees.designation}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
