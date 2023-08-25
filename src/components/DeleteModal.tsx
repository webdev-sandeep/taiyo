import React from "react";
import Button from "./Button";

type Props = {
  onDelete: () => void;
  onCancel: () => void;
};

const DeleteModal = ({ onDelete, onCancel }: Props) => {
  return (
    <div
      className="absolute top-0 left-0 backdrop-blur-sm  h-screen w-screen grid place-content-center cursor-pointer"
      onClick={onCancel}
    >
      <div
        className="bg-white border-2 rounded-xl border-sky-700 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-black font-bold text-center text-lg my-8">
          Are you sure to delete this item?
        </h2>
        <div className="flex gap-4 items-center justify-around my-8">
          <Button size="sm" type="outline" onClick={onDelete}>
            Delete
          </Button>
          <Button size="sm" type="primary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
