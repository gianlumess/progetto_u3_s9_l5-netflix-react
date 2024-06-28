import { Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";
import { BellFill, GearFill, PersonFill, Search } from "react-bootstrap-icons";

const MyNavBar = () => (
  <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand href="#home">
        <Image src="netflix_logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Tv Shows</Nav.Link>
          <Nav.Link href="#link">Movies</Nav.Link>
          <Nav.Link href="#link">Recently Added</Nav.Link>
          <Nav.Link href="#link">My List</Nav.Link>
        </Nav>
        <button className="btn" type="submit">
          <Search color="currentColor" />
        </button>
        <span className="navbar-text"> KIDS </span>
        <button className="btn" type="submit">
          <BellFill color="currentColor" />
        </button>
        <Dropdown>
          <Dropdown.Toggle className="p-0" id="dropdown-basic">
            <Image alt="avatar logo" src="avatar.png" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="d-flex align-items-center" href="#/action-1">
              <PersonFill className="me-2" color="currentColor" />
              Profile
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center" href="#/action-2">
              <GearFill className="me-2" color="currentColor" />
              Settings
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavBar;
