import { user_man, user_woman } from "@/assets";
import { Modal } from "@/components";
import { formatString } from "@/helpers";
import Image from "next/image";

export default function Detail({ isActive, onClose, profile }: { isActive: boolean; onClose: () => void; profile: any }) {
  return (
    <Modal open={isActive} onClose={onClose}>
      <Modal.Title>Data Kepegawaian</Modal.Title>
      <Modal.Body>
        <div className="flex flex-row items-center">
          <div className="w-48 h-64 flex bg-locate rounded-md items-center justify-center">
            <Image src={profile.jk === "P" ? user_woman : user_man} className="w-44" alt="user" />
          </div>
          <div className="m-4 flex flex-col">
            <div className="mb-2">
              <b className="text-base font-semibold">Nama</b>
              <p className="text-lg">{formatString(profile.nama)}</p>
            </div>
            <div className="mb-2">
              <b className="text-base font-semibold">Posisi / Jabatan</b>
              <p className="text-lg">{profile.posisi}</p>
            </div>
            <div className="mb-2">
              <b className="text-base font-semibold">Alamat</b>
              <p className="text-lg">{formatString(profile.alamat)}</p>
            </div>
            <div>
              <b className="text-base font-semibold">Email</b>
              <p className="text-lg">{profile.email}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
