import React from "react";

export default function Button({ text, icon, color, onClick, width}) {
  const bgColor = `bg-${color}-600`;
  const hoverColor = `hover:bg-${color}-700`;
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-4 py-2 text-center rounded-md ${width} ${bgColor} ${hoverColor} transition duration-300`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
