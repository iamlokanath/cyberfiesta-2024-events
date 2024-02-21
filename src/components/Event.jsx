import React from "react";
import "./css/Event.css";
import Event1 from "../Image/cybercss.png";
import Event2 from "../Image/cyberjunkies.png";
import Event3 from "../Image/cyberhacakathon.png";
import Event4 from "../Image/logic.jpg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="eventheading">
        <div className="eventhead">EVENTS</div>
        <div className="eventdesc">
          Explore the events at{" "}
          <span className="event-desc-span">CYBER-FIESTA</span>
        </div>
      </div>
      <div className="event">
        <div className="event-container">
          {/* first event */}
          <div className="card">
            <img src={Event1} alt="css battle" />
            <h1 className="event-heading">CSS BATTLE</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Join Cyber Fiesta's CSS Design Challenge! Showcase your
              creativity, replicate topics with precision, and compete for
              recognition with responsive designs.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  className="registerbutton"
                  target="blank"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* first event ends  */}

          {/* second event */}
          <div className="card">
            <img src={Event2} alt="tech jukies" />
            <h1 className="event-heading2">TECH JUNKIES</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Join Cyber Fiesta's TECH JUNKIES challenge! Answer 25 questions in
              30 mins, aiming for 20 marks to qualify. Interviews for winners.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  className="registerbutton"
                  target="blank"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* second event ends  */}

          {/* third event */}
          <div className="card">
            <img src={Event3} alt="hackathon" />
            <h1 className="event-heading3">HACKATHON</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Join our Startup Hackathon for transformative innovation! Ideate,
              code, collaborate, and compete to propel your startup idea with
              mentorship.
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  target="blank"
                  className="registerbutton"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* third event ends  */}

          {/* fourth event */}
          <div className="card">
            <img src={Event4} alt="logic wizard" />
            <h1 className="event-heading4">LOGIC WIZARD</h1>
            <br />
            <p className="price">FIRST PRIZE: ₹1000</p>
            <br />
            <p>
              Join Logic Wizard Event, Feb 22-23 at Govt. College of
              Engineering, Kalahandi. Puzzles, challenges, and non-technical
              competition to showcase logic skills!
            </p>
            <br />
            <p>
              <button>
                <Link
                  to="https://forms.gle/kYo7KmUmetdABAtJ7"
                  target="blank"
                  className="registerbutton"
                >
                  Register Now
                </Link>
              </button>
            </p>
          </div>
          {/* fourth event ends  */}
        </div>
      </div>
    </>
  );
};

export default Event;
