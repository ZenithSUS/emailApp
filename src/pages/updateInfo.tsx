import { useState } from "react";

export default function UpdateInfoPage() {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName, address, phone, gender);
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <form className="bg-white p-10 rounded-lg shadow-lg w-1/3" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center">Update Info</h1>
        <div className="mt-5">
          <label className="block text-sm">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Gender</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-5">
          <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
