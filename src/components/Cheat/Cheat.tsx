import React from "react";
import "./cheat.scss";

interface Props {
  handleOpenModal: () => void;
  openModal: boolean;
}

export const Cheat = ({ handleOpenModal, openModal }: Props) => {
  return (
    <div className={`cheat ${openModal ? "" : "hidden"}`}>
      <div className="cheat-close" onClick={handleOpenModal}>
        Close
      </div>
      <div className="cheat-container">Chi Huyen xinh dep</div>
    </div>
  );
};
