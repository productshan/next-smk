"use client";

import React, { useState, useEffect } from "react";

function loginHandler({ username, password, data }: { username: string; password: string; data: any[] }) {
  const defaultPassword = "smkn1ba3bisa";
  const user = data.find((row: any) => row.nisn === username);

  if (!user || password !== defaultPassword) {
    return null;
  }

  return user;
}

function LoginCard({ onLogin, data }: { onLogin: (user: any) => void; data: any[] }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const loggedInUser = loginHandler({ ...user, data });
    if (loggedInUser) {
      onLogin(loggedInUser); // Pass the logged-in user data to the parent
    } else {
      setError(true); // Show error if login fails
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 "
              required
              placeholder="Masukan NISN anda"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 "
              required
              placeholder="Masukan Password anda"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="submit" className="w-full bg-primary-300 text-white py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-500">Username salah!</p>}
      </div>
    </div>
  );
}

function ResultCard({ user }: { user: any }) {
  return (
    <div className="w-full h-full flex items-center justify-center mx-auto pt-[256px] sm:pt-0">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-7/12">
        <h2 className="text-xl font-bold mb-4 text-center">Pengumuman Kelulusan</h2>
        <p className="text-gray-700">Berdasarkan rapat dewan Guru SMKN 1 Banyuasin III</p>
        <table className="ml-0 sm:ml-4 mx-2 text-base text-gray-700 font-semibold">
          <tbody>
            <tr>
              <td>Hari</td>
              <td>:</td>
              <td className="pl-2">Selasa</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td>:</td>
              <td className="pl-2">29 April 2025</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700">Menyatakan bahwa peserta didik atas nama</p>
        <table className="ml-0 sm:ml-4 mx-2 text-base text-gray-700 font-semibold">
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td className="pl-2">{user.name}</td>
            </tr>
            <tr>
              <td>NISN</td>
              <td>:</td>
              <td className="pl-2">{user.nisn}</td>
            </tr>
            <tr>
              <td>Program Keahlian</td>
              <td>:</td>
              <td className="pl-2">{user.kk}</td>
            </tr>
            <tr>
              <td>Konsentrasi Keahlian</td>
              <td>:</td>
              <td className="pl-2">{user.kk}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700">Telah menyelesaikan semua program pembelajaran dan dinyatakan</p>
        <p className="text-lg bg-green-400 px-4 py-2 mt-2 rounded-sm font-bold text-center">{user.k}</p>
      </div>
    </div>
  );
}

function Index() {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/read-csv")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div className="w-full h-96">{loggedInUser ? <ResultCard user={loggedInUser} /> : <LoginCard onLogin={setLoggedInUser} data={data} />}</div>;
}

export default Index;
