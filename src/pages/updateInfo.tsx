import { useState } from "react";
import { AddUser } from "../libs/types";
import { createInfo } from "../appwrite/users";
import Title from "../utils/title";

export default function UpdateInfoPage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  Title("Update Information");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: AddUser = {
      fullName,
      address,
      phone,
      gender,
      email,
    };

    console.log(data);

    if (
      !data.fullName ||
      !data.address ||
      !data.phone ||
      !data.gender ||
      !data
    ) {
      alert("Please fill all the fields");
      return;
    }

    createInfo(data)
      .then(() => {
        alert("Info updated successfully");
      })
      .catch((error) => {
        alert("Failed to update info");
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <form
        className="bg-white p-10 rounded-lg shadow-lg w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center">Update Info</h1>
        <div className="mt-5">
          <label className="block text-sm">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Email</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="mt-5">
          <label className="block text-sm">Gender</label>
          <select
            className="w-full p-2 border border-gray-300 rounded mt-1"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mt-5">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
