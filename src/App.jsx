import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dist/css/App.min.css";
import MyNavBar from "./components/MyNavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <MyNavBar />
    </Container>
  );
}

export default App;
