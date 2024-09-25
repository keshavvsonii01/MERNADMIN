import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service, image, pdf } = curElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src={
                    image
                      ? `http://localhost:5001${image}`
                      : "/placeholder-image.jpg"
                  }
                  alt={`${service} service`}
                  className="service-image" // Added class for styling
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>

                {/* Render PDF preview if it exists */}
                {pdf && (
                  <div className="pdf-preview">
                    <iframe
                      src={`http://localhost:5001${pdf}`}
                      width="100%"
                      height="300px"  // Adjust height for better view
                      className="service-pdf" // Added class for styling
                      title="PDF Preview"
                    ></iframe>
                  </div>
                )}
                  {pdf && (
                  <div className="pdf-link">
                    <a
                      href={`http://localhost:5001${pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
