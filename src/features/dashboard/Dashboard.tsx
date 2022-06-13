import React, { useState, KeyboardEvent, useEffect } from "react";
import { Cheat } from "../../components";
import "./dashboard.scss";
export const Dashboard = () => {
  const [keyList, setKeyList] = useState([""]);

  const comboCheat = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setKeyList([""]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    const key = e.key;
    console.log(key);
    const newKey = [...keyList, key];
    setKeyList(newKey);
  };
  useEffect(() => {
    setOpenModal(keyList.join().includes(comboCheat.join()));
  }, [keyList]);

  return (
    <div onKeyDown={handleKeyDown} className="dashboard" tabIndex={0}>
      Dashboard
      <Cheat handleOpenModal={handleOpenModal} openModal={openModal} />
    </div>
  );
};
