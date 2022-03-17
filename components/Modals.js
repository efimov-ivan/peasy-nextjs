import { useState } from "react"
import { Modal, Text } from "@nextui-org/react"

export default function Modals({title, children, visible, closeModal}){
  return(
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => closeModal()}
        width="800px"
      >
        <Modal.Header>
          <Text id="modal-title" b size={24} color="$titleGreen">{title}</Text>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
      <style jsx>{`
        .nextui-modal-body ul li,
        .nextui-modal-body ol li{
          font-size: 15px;
          line-height: 21px;
        }
      `}</style>
    </>
    )
}