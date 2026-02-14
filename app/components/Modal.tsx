"use client";
import React, { useState } from "react";
import Image from 'next/image'
import Modal from "react-modal";

const ImagePreview = ({ imagePath }: { imagePath: string }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <Image src={imagePath} onClick={toggleModal} className="cursor-pointer" alt={""} width={720} height={720} quality={100} unoptimized={true} />
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        className="mx-auto my-10 w-80 md:w-fit bg-white p-2"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <Image src={imagePath} alt="Full Size Image" width={720} height={720} quality={100} unoptimized={true} />
      </Modal>
    </div>
  );
};

export default ImagePreview;
