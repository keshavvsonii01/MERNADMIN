import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";


export const AdminServices = () => {
  const [service, setServices] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllServices = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/admin/services", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`Services ${data}`);
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   delelte the user on delete button
  // const deleteUser = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:5001/api/admin/users/delete/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: authorizationToken,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(`users after delete:  ${data}`);

  //     if (response.ok) {
  //       getAllUsersData();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Services Data </h1>
        </div>
        <div className="container  admin-users">
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Provider</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {service.map((curService, index) => {
                return (
                  <tr key={index}>
                    <td>{curService.service}</td>
                    <td>{curService.description}</td>
                    <td>{curService.price}</td>
                    <td>{curService.provider}</td>
                    <td>
                      <Link to={`/admin/services/${curService._id}/edit`}>
                        Edit
                      </Link>
                    </td>
                    {/* <td>
                        <button
                          className="btn"
                          onClick={() => deleteUser(curUser._id)}
                        >
                          Delete
                        </button>
                      </td> */}
                  </tr>
                );
              })}
              ;
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
