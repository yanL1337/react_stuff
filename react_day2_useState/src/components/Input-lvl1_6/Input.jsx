import { useState } from "react";
import "./Input.scss";

const Input = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="inputs">
      <input
        type="text"
        onChange={(e) => setVorname(e.target.value)}
        placeholder="Vorname"
        value={vorname}
      />
      <input
        type="text"
        onChange={(e) => setNachname(e.target.value)}
        placeholder="Nachname"
        value={nachname}
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        value={email}
      />

      <p>Vorname: {vorname}</p>
      <p>Nachname: {nachname} </p>
      <p>Email: {email} </p>
    </div>
  );
};

export default Input;
