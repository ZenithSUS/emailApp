import getInfo from "../appwrite/users";
import { useState, useEffect } from "react";
import { Users } from "../libs/types";

export default function displayInfo() {
  const [info, setInfo] = useState<Users[]>([]);

  useEffect(() => {
    getInfo().then((data) => {
      setInfo(data || []);
    });
  }, []);

  return (
    <div>
      <h1>Display Info</h1>
      <ul>
        {info.map((item) => (
          <li key={item.$id}>
            <h2>{item.fisrtName}</h2>
            <p>{item.address}</p>
            <p>{item.phone}</p>
            <p>{item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}