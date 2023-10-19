import { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="faq">
      <div className="firstVis">
        <h2>Why is React great?</h2>
        <button onClick={() => setShow(!show)}>-</button>
      </div>
      <div className={show ? "faqContent" : "displayNo"}>
        <p>Fast Learning Curve</p>
      </div>
    </div>
  );
};

export default Faq;
