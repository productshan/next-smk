import { user_man, user_woman } from "@/assets";
import { Modal } from "@/components";
import { formatString } from "@/helpers";
import Image from "next/image";

export default function Detail({ isActive, onClose, profile }: { isActive: boolean; onClose: () => void; profile: any }) {
  return (
    <Modal open={isActive} onClose={onClose}>
      <Modal.Title>Data Kepegawaian</Modal.Title>
      <Modal.Body>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-36 sm:w-48 sm:h-64 flex shadow-lg bg-white rounded-md items-center justify-center">
            <Image src={profile.picture ? profile.picture : profile.jk === "P" ? user_woman : user_man} className="w-48 h-auto" alt="user" />
          </div>
          <div className="mt-2 sm:m-4 grid grid-cols-1  gap-2 sm:gap-4">
            <div>
              <b className="text-sm sm:text-base font-semibold">Nama</b>
              <p className="sm:text-lg">{formatString(profile.nama)}</p>
            </div>
            <div>
              <b className="text-sm sm:text-base font-semibold">Posisi / Jabatan</b>
              <p className="sm:text-lg">{profile.posisi}</p>
            </div>
            <div>
              <b className="text-sm sm:text-base font-semibold">Alamat</b>
              <p className="sm:text-lg">{formatString(profile.alamat)}</p>
            </div>
            <div>
              <b className="text-sm sm:text-base font-semibold">Email</b>
              <p className="sm:text-lg">{profile.email}</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
