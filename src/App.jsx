import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dist/css/App.min.css";
import MyNavBar from "./components/MyNavBar";
import { Container } from "react-bootstrap";
import HeroSection from "./components/HeroSection";
import Galleria from "./components/Galleria";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <Container>
      <MyNavBar />
      <HeroSection />

      <Galleria saga="Star Wars" />
      <Galleria saga="Harry Potter" />
      <Galleria saga="The Lord Of The Rings" />
      <MyFooter />
    </Container>
  );
}

export default App;
