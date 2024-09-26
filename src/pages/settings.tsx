import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to the settings</h2>
      <button>
        <Link to="/" style={{ color: "white" }}>
          Back
        </Link>
      </button>
    </div>
  );
};

export default Settings;
