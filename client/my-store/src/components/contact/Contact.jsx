import './Contact.scss';
import {Facebook, Google, Instagram, Pinterest, Twitter} from "@mui/icons-material";

const Contact = () => {
  return (
      <div className="contact">
          <div className="wrapper">
              <span>BE IN TOUCH WITH US: </span>
              <div className="email">
                  <input type="text" placeholder="Enter your e-mail..."/>
                  <button>JOIN US</button>
              </div>
              <div className="icons">
                  <Facebook/>
                  <Instagram/>
                  <Twitter/>
                  <Google/>
                  <Pinterest/>
              </div>
          </div>
      </div>
  )
}

export default Contact