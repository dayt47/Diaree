import React from "react";
import "./Tag.css";

function Tag({ tag, onDelete }) {
  return (
    <div className="tag">
      <span>{tag.name}</span>
      <button onClick={() => onDelete(tag)}>X</button> 
    </div>
  );
}

export default Tag;
