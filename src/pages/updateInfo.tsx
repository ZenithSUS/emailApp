import { useState, useEffect } from "react";

type UserInformation = {
  fullName: string;
  email: string;
  birthdate: string;
  phoneNumber: string;
  address: string;
};

export default function UpdateInfoPage() {
  const [userIP, setUserIP] = useState<string>("");
  const [userInformation, setUserInformation] = useState<UserInformation>({
    fullName: "",
    email: "",
    birthdate: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setUserIP(data.ip));
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userInformation.fullName === "" ||
      userInformation.email === "" ||
      userInformation.birthdate === "" ||
      userInformation.phoneNumber === "" ||
      userInformation.address === ""
    ) {
      alert("Please fill out all the fields");
      return;
    }
    console.log(userInformation);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  return (
    <main className="grid min-h-screen place-items-center bg">
      <div className="space-y-5">
        <h1 className="font-bold text-center text-3xl text-shadow z-50">
          SKPI Employee Update {userIP}
        </h1>
        <div className="bg-white w-xl text-black p-5 rounded-md space-y-10 border-t-[3.5px] border-blue-500">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block">
                Full Name
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  required
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-l p-2 flex-1"
                  placeholder="Enter full name"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./user.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block">
                Email
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-l p-2"
                  placeholder="Enter email address"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./mail.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="birthdate" className="block">
                Birthdate
              </label>
              <input
                required
                type="date"
                name="birthdate"
                id="birthdate"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-l p-2"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phoneNumber" className="block">
                Phone Number
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-l p-2"
                  placeholder="Enter phone number"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./telephone.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="address" className="block">
                Address
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-l p-2"
                  placeholder="Enter address"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./pin.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <img src="./logo.png" alt="" className="w-12" />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:scale-105 transform transition-transform cursor-pointer"
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
