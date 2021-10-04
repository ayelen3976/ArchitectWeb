import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
function Footer() {
  return (
    <div>
      {" "}
      <MDBFooter
        style={{ backgroundColor: "black" }}
        className="text-center text-lg-left"
      >
        <div
          className="text-center p-3 "
          style={{ color: "#ffffff8a" }}
        >
          created by Ayelen Fernandez ||
          <a  style={{marginLeft:"5px"}} className="text-light" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
export default Footer;
