import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

import "./footer.css";

function footer() {
  return (
    <div className="footer__container">
      <div className="social-links text">
        <h5 className="footer__subtitle text">Follow Us!</h5>
        <a
          href="https://www.facebook.com/thepracticaldev"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/thepracticaldev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/forem"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/thepracticaldev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="footer__menu">
        <ul className="footer__navigation text">
          <li>
            <h5 className="footer__subtitle">Resources</h5>
            <ul className="footer__links">
              <li>
                <a href="https://dev.to/guides">Guides</a>
              </li>
              <li>
                <a href="https://dev.to/software-comparisons">
                  Software Comparisons
                </a>
              </li>
              <li>
                <a href="https://dev.to/faq">FAQs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default footer;
