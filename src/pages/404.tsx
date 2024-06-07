import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text">Page not found</p>
      <Button text="Back to home" onClick={() => navigate("/")} />
    </div>
  );
}

export default NotFound;
