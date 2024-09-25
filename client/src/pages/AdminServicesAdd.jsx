import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminServicesAdd = () => {
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);  // State for storing the selected PDF file

  const navigate = useNavigate();
  const { authorizationToken } = useAuth();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);  // Save the selected PDF file in state
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("service", data.service);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("provider", data.provider);
      if (image) {
        formData.append("image", image);
      }
      if (pdf) {
        formData.append('pdf', pdf);  // Append the PDF file
      }
      

      const response = await fetch(
        `http://localhost:5001/api/admin/services/add`,
        {
          method: "POST",
          headers: {
            Authorization: authorizationToken,
          },
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
        navigate("/admin/services");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Service</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="service">Service Name:</label>
            <input
              type="text"
              id="service"
              name="service"
              value={data.service}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={data.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="provider">Provider:</label>
            <input
              type="text"
              id="provider"
              name="provider"
              value={data.provider}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <div>
            <label htmlFor="pdf">Upload PDF:</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              onChange={handlePdfChange}
              accept=".pdf" // Restrict to PDF files only
            />
          </div>

          <div className="button-group">
            <button onSubmit={handleSubmit} type="submit">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminServicesAdd;
