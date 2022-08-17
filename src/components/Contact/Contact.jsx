import "./contact.css";
import phone from "../../Images/phone.png";
import email from "../../Images/email.png";
import address from "../../Images/address.png";
import { useRef } from "react";
import { useState } from "react";
import emialjs from "emailjs-com";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

export const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emialjs
      .sendform(
        "service_1brv6ip",
        "template_1brv6ip",
        formRef.current,
        "_k9zUtunHTy8RsFq-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 987849399937
            </div>

            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              dhruvpal427@gmail.com
            </div>

            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              50sq foot colony India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's Your story?</b> Get in touch Always available for
            freelancing the right projects comes along me.
          </p>
          <form action="" ref={formRef}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              id=""
              placeholder="Message"
              rows="5"
            ></textarea>
            <button>Submit</button>
            {done && "Thank-You..."}
          </form>
        </div>
      </div>
    </div>
  );
};
