import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ message, onClose, onNewEntryClick }) {
  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
        <div className="popup-buttons">
          <button onClick={onClose}>No</button>
          <button
            onClick={() => {
              onClose();
              onNewEntryClick();
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
