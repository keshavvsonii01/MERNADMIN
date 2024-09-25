import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminServices = () => {
  const [services, setServices] = useState([]);
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
      console.log(`Services ${JSON.stringify(data)}`);
      if (response.ok) {
        setServices(data);
      } else {
        toast.error("Failed to fetch services");
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("An error occurred while fetching services");
    }
  };

  const deleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/admin/services/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`Services after delete: ${JSON.stringify(data)}`);

      if (response.ok) {
        getAllServices();
        toast.success("Service deleted successfully");
      } else {
        toast.error("Failed to delete service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("An error occurred while deleting the service");
    }
  };


  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Services Data</h1>
          <Link to="/admin/services/add">Add New Service</Link>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Provider</th>
                <th>Image</th>
                <th>Pdf</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {services.map((curService, index) => (
                <tr key={index}>
                  <td>{curService.service}</td>
                  <td>{curService.description}</td>
                  <td>{curService.price}</td>
                  <td>{curService.provider}</td>
                  <td>
                    {curService.image && (
                      <img 
                        src={`http://localhost:5001${curService.image}`} 
                        alt={curService.service} 
                        style={{width: '50px', height: '50px'}}
                      />
                    )}
                  </td>
                  <td>
                    {curService.pdf && (
                      <a href={`http://localhost:5001${curService.pdf}`} target="_blank">
                        Download PDF
                      </a>
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/services/${curService._id}/edit`}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteService(curService._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


    </>
  );
};