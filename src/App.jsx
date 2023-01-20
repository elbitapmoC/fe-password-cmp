import "./App.css";
import { Password } from "./components/Password";

function App() {
  const passwordReq = [
    {
      rule: (val) => /[0-9]/.test(val),
      message: "Has a number 0-9",
    },
    {
      rule: (val) => /[!@#$%^&*]/.test(val),
      message: "Has a special char: !@#$%^&*",
    },
    {
      rule: (val) => /[A-Z]/.test(val),
      message: "Has an uppercase letter",
    },
  ];

  return (
    <div className="app">
      <h1 className="center-text">Password Component</h1>
      <Password options={passwordReq} />
      <p className="center-text">
        <iframe
          src="https://drive.google.com/file/d/1BwjJ-Jq9gqQtafb1IxLVkkeYxDvOgqej/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </p>
    </div>
  );
}

export default App;
