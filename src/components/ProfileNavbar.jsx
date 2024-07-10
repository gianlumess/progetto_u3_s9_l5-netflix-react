import { Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileNavbar = () => (
  <Navbar expand="lg">
    <>
      <Navbar.Brand>
        <Link to="/">
          {" "}
          <Image src="netflix_logo.png" />
        </Link>
      </Navbar.Brand>
    </>
  </Navbar>
);

export default ProfileNavbar;
