import { Container } from "react-bootstrap";
import MyNavBar from "../components/MyNavBar";
import HeroSection from "../components/HeroSection";
import Galleria from "../components/Galleria";
import MyFooter from "../components/MyFooter";

const Home = () => (
  <Container>
    <MyNavBar />
    <HeroSection />
    <Galleria saga="Star Wars" />
    <Galleria saga="Harry Potter" />
    <Galleria saga="The Lord Of The Rings" />
    <MyFooter />
  </Container>
);

export default Home;
