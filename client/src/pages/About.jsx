import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}
              </p>
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quae modi necessitatibus aspernatur quam explicabo minus
                porro, error consequuntur quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                amet facere! Assumenda qui similique aperiam recusandae
                reiciendis. Dolorum, ipsa eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                amet facere! Assumenda qui similique aperiam recusandae
                reiciendis. Dolorum, ipsa eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                amet facere! Assumenda qui similique aperiam recusandae
                reiciendis. Dolorum, ipsa eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                amet facere! Assumenda qui similique aperiam recusandae
                reiciendis. Dolorum, ipsa eveniet.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
