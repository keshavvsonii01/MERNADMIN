import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod harum animi voluptatibus nemo delectus nulla? Consectetur quibusdam dicta minus sit! Delectus eligendi quam inventore perspiciatis saepe veniam adipisci sequi consequuntur.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>Lorem, ipsum dolor.</h1>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maxime ipsam voluptatum! Fuga, provident! Laudantium quaerat voluptatibus laborum cumque impedit omnis totam iusto ex odit fuga. Nesciunt ducimus aut mollitia.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
