import "../assets/dist/css/Settings.min.css";
import { Container } from "react-bootstrap";
import MyNavBar from "../components/MyNavBar";
import SettingsSection from "../components/SettingsSection";

const Settings = () => (
  <Container>
    <MyNavBar />
    <h1>Account</h1>
    <hr />
    <SettingsSection />
  </Container>
);
export default Settings;
