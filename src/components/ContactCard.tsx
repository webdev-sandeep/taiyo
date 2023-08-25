import React from "react";
import Button from "./Button";

type Props = {
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
  onEdit: () => void;
  onDelete: () => void;
};

const ContactCard = ({
  firstName,
  lastName,
  status,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div
      className={`rounded p-4 text-center border-4 ${
        status === "active" ? "border-green-400" : "border-red-400"
      }`}
    >
      <h1 className="text-black mb-4">
        Name :{" "}
        <span className="text-sky-700">{`${firstName} ${lastName}`}</span>
      </h1>
      <h2
        className={`mb-4 rounded-xl flex items-center pl-4 ${
          status === "active" ? "bg-green-300" : "bg-red-300"
        }`}
      >
        Status :{" "}
        <span
          className={`h-4 w-4 rounded-full inline-block mx-1  ${
            status === "active" ? "bg-green-700" : "bg-red-800"
          }`}
        ></span>{" "}
        <span className="capitalize text-green-900">{status}</span>
      </h2>
      <div className="flex items-center gap-4">
        <Button size="sm" type="outline" onClick={onEdit}>
          Edit
        </Button>
        <Button size="sm" type="primary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
