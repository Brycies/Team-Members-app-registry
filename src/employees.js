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
  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className="card m-2"
                style={{ cursor: "pointer" }}
              >
                {employee.gender === "Male" ? (
                  <img src={maleProfile} className="card-img-top" />
                ) : (
                  <img src={femaleProfile} className="card-img-top" />
                )}
                ;
                <div className="card-body">
                  <h5 className="card-title ">
                    Full Name {employee.fullName}{" "}
                  </h5>
                  <p className="card-text">
                    <b>Designation</b> {employees.designation}{" "}
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
