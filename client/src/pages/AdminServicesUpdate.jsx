import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminServicesUpdate = () => {
  const [data, setData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [pdf, setPdf] = useState(null); // State for storing the selected PDF file

  const params = useParams();
  const navigate = useNavigate();
  console.log("params single service: ", params);
  const { authorizationToken } = useAuth();

  // get single user data
  const getSingleServiceData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/admin/services/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`Service single data:  ${data}`);
      setData(data);
      setPreviewImage(data.image); // Set the current image as preview
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleServiceData();
  }, []);

  const handleInput = (e) => {
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
    setPreviewImage(URL.createObjectURL(file));
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]); // Save the selected PDF file in state
  };

  // to update the data dynamically
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
        formData.append("pdf", pdf); // Append the PDF file
      }

      const response = await fetch(
        `http://localhost:5001/api/admin/services/update/${params.id}`,
        {
          method: "PATCH",
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
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update Service Data</h1>
      </div>
      {/* contact page main  */}
      <div className="container grid grid-two-cols">
        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="service">Service name</label>
              <input
                type="text"
                name="service"
                id="service"
                autoComplete="off"
                value={data.service}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="description">description</label>
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="off"
                value={data.description}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                autoComplete="off"
                value={data.price}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="provider">Provider</label>
              <input
                type="text"
                name="provider"
                id="provider"
                autoComplete="off"
                value={data.provider}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {previewImage && (
              <div>
                <img
                  src={previewImage}
                  alt="Service preview"
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              </div>
            )}

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

            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
