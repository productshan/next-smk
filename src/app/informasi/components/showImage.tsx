import { Modal } from "@/components";
import Image from "next/image";
import React from "react";

export default function ShowImage({ link, isOpen, onClose }: { link: string; isOpen: boolean; onClose: () => void }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Title>Tampilan Gambar</Modal.Title>
      <Modal.Body>
        <div>
          <Image src={link} alt="show-image" width={0} height={0} sizes="(max-width: 1023px) 90vw, 60vw" style={{ width: "100%", height: "auto" }} />
        </div>
      </Modal.Body>
    </Modal>
  );
}
