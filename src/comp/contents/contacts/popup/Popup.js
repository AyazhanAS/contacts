import React from "react";
import "./Popup.css";

export default function popup({ active, setActive }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <p>Спасибо за заявку</p>
        </div>
        <div className="modal_body">
          <p>Наш консультант свяжется с вами в течение 10 минут</p>
        </div>
        <div
          className="modal_close"
          onClick={() => {
            setActive(false);
            document.body.style.overflow = "visible";
          }}
        >
          <span>ЗАКРЫТЬ ОКНО</span>
        </div>
      </div>
    </div>
  );
}
