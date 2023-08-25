import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

import Button from "./Button";

import { ContactRecord, ModalContent } from "../utils/types";

const Modal = ({
  title,
  actionOneText,
  handleActionOne,
  actionTwoText,
  handleActionTwo,
  onCancel,
  contactDetails,
}: ModalContent) => {
  const initialState: ContactRecord = {
    id: uuid(),
    firstName: "",
    lastName: "",
    status: "inactive",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (contactDetails) {
      setFormData(contactDetails);
    }
  }, [contactDetails]);

  return (
    <div
      className="absolute top-0 left-0 backdrop-blur-sm  h-screen w-screen grid place-content-center cursor-pointer"
      onClick={onCancel}
    >
      <form
        className="bg-white border-2 rounded-xl border-sky-700 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-2 right-4 cursor-pointer"
          onClick={onCancel}
        >
          <Icon icon="ep:close-bold" />
        </div>
        <h2 className="capitalize font-bold text-xl text-center my-2">
          {title}
        </h2>
        <div className="my-8">
          <label htmlFor="firstName" className="font-semibold">
            First Name :
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            className="border-b border-black focus-visible:outline-none px-2 py-1 ml-2"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="my-8">
          <label htmlFor="lastName" className="font-semibold">
            Last Name :
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            className="border-b border-black focus-visible:outline-none px-2 py-1 ml-2"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="flex gap-4 items-center my-8">
          <h3 className="font-semibold">Status :</h3>
          <div>
            <input
              type="radio"
              id="active"
              name="status"
              className="mr-1"
              checked={formData.status === "active"}
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: "active" })}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div>
            <input
              type="radio"
              id="inactive"
              name="status"
              className="mr-1"
              checked={formData.status === "inactive"}
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: "inactive" })}
            />
            <label htmlFor="inactive">InActive</label>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-around">
          <Button
            size="sm"
            type="outline"
            onClick={() => handleActionOne(formData)}
          >
            {actionOneText}
          </Button>
          <Button size="sm" type="primary" onClick={handleActionTwo}>
            {actionTwoText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
