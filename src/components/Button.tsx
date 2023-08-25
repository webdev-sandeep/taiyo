import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  type: "primary" | "outline";
  size: "sm" | "lg";
  link?: string;
  onClick?: () => void;
};

const Button = ({ children, type, size, link, onClick }: Props) => {
  const className = `inline-block border-2 border-sky-700 cursor-pointer font-semibold uppercase rounded-lg  ${
    type === "primary"
      ? "bg-sky-700 hover:bg-sky-800 text-white"
      : "bg-white hover:bg-sky-800 text-sky-700 hover:text-white"
  } ${
    size === "sm"
      ? "px-4 py-2 text-sm rounded-sm"
      : "px-8 py-4 text-lg rounded-lg"
  }`;
  if (link) {
    return (
      <Link to={link} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Button;
