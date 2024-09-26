import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [sentence, setSentence] = useState("");
  const [className, setClassName] = useState("");
  const generatedRandomString = async () => {
    const data = (await fetch("data.json")).json();
    data
      .then((data) => {
        const randomIndex = Math.floor(
          Math.random() * data?.random_strings?.length
        );
        setSentence(data?.random_strings[randomIndex]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generatedRandomString();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sentence);
    setClassName("copied");

    setTimeout(() => {
      setClassName("");
    }, 300);
  };

  return (
    <>
      <div className="wrapper">
        <div className={`copy-msg  ${className}`}>
          <div className="text">Copied</div>
        </div>
        <p className="read-the-docs" onClick={copyToClipboard}>
          {sentence}
        </p>
        <div>
          <button className="btn btn-primary" onClick={generatedRandomString}>
            Random
          </button>
          <Link
            to="/settings"
            style={{ display: "block", margin: "1rem 0rem", fontSize: 12 }}
          >
            View Settings
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
