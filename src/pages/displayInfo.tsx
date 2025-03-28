import { getInfo } from "../appwrite/users";
import { useState, useEffect } from "react";
import Title from "../utils/title";
import { Models } from "appwrite";

export default function DisplayInfo() {
  const [info, setInfo] = useState<Models.Document[]>([]);
  const [loading, setLoading] = useState(true);
  Title("Display Info");

  useEffect(() => {
    getInfo().then((data) => {
      setInfo(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-100 flex justify-center items-center min-h-screen text-black text-3xl">
        Loading...
      </div>
    );
  }

  if (!loading && info.length === 0) {
    return (
      <div className="bg-gray-100 flex justify-center items-center min-h-screen text-black text-3xl">
        No data found
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        User Information
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ftext-center">
            <th className="py-3 px-6 border border-gray-300">Full Name</th>
            <th className="py-3 px-6 border border-gray-300">Gender</th>
            <th className="py-3 px-6 border border-gray-300">Address</th>
            <th className="py-3 px-6 border border-gray-300">Phone</th>
            <th className="py-3 px-6 border border-gray-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => (
            <tr
              key={item.$id}
              className="hover:bg-gray-100 text-gray-700 text-center"
            >
              <td className="py-3 px-6 border border-gray-300">
                {item.fullName}
              </td>
              <td className="py-3 px-6 border border-gray-300">
                {item.gender}
              </td>
              <td className="py-3 px-6 border border-gray-300">
                {item.address}
              </td>
              <td className="py-3 px-6 border border-gray-300">
                {item.phoneNumber}
              </td>
              <td className="py-3 px-6 border border-gray-300">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
