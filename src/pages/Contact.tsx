import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../redux/slices/contactSlice";
import { RootState, AppDispatch } from "../redux/store";

import Button from "../components/Button";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";

import { ContactRecord, ModalContent } from "../utils/types";
import DeleteModal from "../components/DeleteModal";

const Contact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contactReducer);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState("");

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const [activeModalContent, setActiveModalContent] = useState<ModalContent>({
    title: "",
    actionOneText: "",
    handleActionOne: () => {},
    actionTwoText: "",
    handleActionTwo: () => {},
    onCancel: () => {},
  });

  const handleAddContact = () => {
    setActiveModalContent({
      title: "Add Contact",
      actionOneText: "Add",
      handleActionOne: (contact: ContactRecord) => {
        dispatch(CREATE_CONTACT(contact));
        onCancel();
      },
      actionTwoText: "Cancel",
      handleActionTwo: onCancel,
      onCancel: onCancel,
    });
    setShowModal(true);
  };

  const handleEditContact = (contactDetails: ContactRecord) => {
    setActiveModalContent({
      title: "Edit Contact",
      actionOneText: "Update",
      handleActionOne: (contact: ContactRecord) => {
        dispatch(UPDATE_CONTACT(contact));
        onCancel();
      },
      actionTwoText: "Cancel",
      handleActionTwo: onCancel,
      onCancel: onCancel,
      contactDetails: contactDetails,
    });
    setShowModal(true);
  };

  const handleDeleteContact = (id: string) => {
    setDeleteModalId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = (id: string) => {
    dispatch(DELETE_CONTACT(id));
    hideDeleteModal();
  };

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          onCancel={hideDeleteModal}
          onDelete={() => handleDelete(deleteModalId)}
        />
      )}
      {showModal && (
        <Modal
          title={activeModalContent.title}
          actionOneText={activeModalContent.actionOneText}
          handleActionOne={activeModalContent.handleActionOne}
          actionTwoText={activeModalContent.actionTwoText}
          handleActionTwo={activeModalContent.handleActionTwo}
          onCancel={activeModalContent.onCancel}
          contactDetails={activeModalContent.contactDetails}
        />
      )}
      <div className="grid h-full grid-rows-[80px_1fr]">
        <div className="text-center mb-5">
          <Button size="lg" type="primary" onClick={handleAddContact}>
            Add Contact
          </Button>
        </div>
        <div className="border rounded-lg border-black text-center p-3">
          {contacts.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {contacts.map((contact, index) => {
                return (
                  <ContactCard
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    status={contact.status}
                    key={index}
                    onEdit={() => handleEditContact(contact)}
                    onDelete={() => {
                      handleDeleteContact(contact.id);
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="grid place-content-center h-full">
              No Contacts Found! Please Add some contact from "Add Contact"
              Button
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
