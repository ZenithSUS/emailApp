import { getEmails, getInfo } from "../appwrite/users";
import { useState, useEffect } from "react";
import Title from "../utils/title";
import { Models } from "appwrite";
import CryptoJS from "crypto-js";

const secretKey = "mySecretKey123";

function decrypt(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(decodeURIComponent(cipherText), secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export default function DisplayInfo() {
  const [info, setInfo] = useState<Models.Document[]>([]);
  const [emails, setEmails] = useState<Models.Document[]>([]);
  const [loading, setLoading] = useState(true);
  Title("Display Info");

  useEffect(() => {
    const fetch = async () => {
      const data = await getInfo();
      setInfo(data);

      const emailsData = await getEmails();
      setEmails(emailsData);

      setLoading(false);
    };

    fetch();
  }, []);

  const emailCounts = emails.reduce((acc: Record<string, number>, item) => {
    const decryptedEmail = decrypt(item.email.replace(/ /g, "+"));
    acc[decryptedEmail] = (acc[decryptedEmail] || 0) + 1;
    return acc;
  }, {});

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
    <div className="space-y-20">
      <div>
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
                <td className="py-3 px-6 border border-gray-300">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User who visited the website
        </h1>
        <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ftext-center">
              <th className="py-3 px-6 border border-gray-300">Email</th>
              <th className="py-3 px-6 border border-gray-300">Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(emailCounts).map(([email, count]) => (
              <tr
                key={email}
                className="hover:bg-gray-100 text-gray-700 text-center"
              >
                <td className="py-3 px-6 border border-gray-300">{email}</td>
                <td className="py-3 px-6 border border-gray-300">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
