import React from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

const Title = ({ children }: { children: string }) => {
  return (
    <div className="p-4 border-b-2">
      <b className="text-lg font-semibold">{children}</b>
    </div>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

const Modal = ({ children, open, onClose }: { children: React.ReactNode; open: boolean; onClose: () => void }) => {
  return (
    <>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className="backdrop" onClick={onClose}>
            <div className="modal relative rounded-md shadow-lg border">{children}</div>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};

Modal.Title = Title;
Modal.Body = Body;

export default Modal;
