import { createInfo, insertEmail } from "@/appwrite/users";
import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "react-router-dom";

type UserInformation = {
  fullName: string;
  email: string;
  birthdate: string;
  phoneNumber: string;
  address: string;
  gender: string;
};

// function encrypt(text: string) {
//   return CryptoJS.AES.encrypt(text, secretKey).toString();
// }

export default function UpdateInfoPage() {
  const [searchParams] = useSearchParams();
  const [sendOnce, setSendOnce] = useState(false);
  const e = searchParams.get("e") ?? "";
  const [isPending, startTransition] = useTransition();
  const [userInformation, setUserInformation] = useState<UserInformation>({
    fullName: "",
    email: "",
    birthdate: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });

  useEffect(() => {
    const fetch = async () => {
      if (e && !sendOnce) {
        await insertEmail(e);
        setSendOnce(true);
      }
    };

    fetch();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userInformation.fullName === "" ||
      userInformation.email === "" ||
      userInformation.birthdate === "" ||
      userInformation.phoneNumber === "" ||
      userInformation.address === "" ||
      userInformation.gender === ""
    ) {
      alert("Please fill out all the fields");
      return;
    }

    startTransition(async () => {
      try {
        await createInfo(userInformation);

        alert("User information updated successfully");
      } catch (error) {
        console.log(error);
      }
      setUserInformation({
        fullName: "",
        email: "",
        birthdate: "",
        phoneNumber: "",
        address: "",
        gender: "",
      });
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  return (
    <main className="grid min-h-screen place-items-center">
      <div className="space-y-5">
        <h1 className="font-bold text-center text-3xl text-shadow z-50">
          SKPI Employee Update
        </h1>
        <div className="bg-white w-xl text-black p-5 rounded-md space-y-10 border-t-[3.5px] border-blue-500">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="fullName" className="block">
                Full Name
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  disabled={isPending}
                  required
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={handleChange}
                  value={userInformation.fullName}
                  className="w-full border border-gray-300 rounded-l p-2 disabled:opacity-50 flex-1"
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
                  disabled={isPending}
                  required
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={userInformation.email}
                  className="w-full border border-gray-300 rounded-l p-2 disabled:opacity-50"
                  placeholder="Enter email address"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./mail.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <label htmlFor="birthdate" className="block">
                  Birthdate
                </label>
                <input
                  disabled={isPending}
                  required
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  onChange={handleChange}
                  value={userInformation.birthdate}
                  className="w-full border border-gray-300 rounded-l p-2 disabled:opacity-50"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phoneNumber" className="block">
                  Phone Number
                </label>
                <div className="grid grid-cols-[1fr_auto]">
                  <input
                    disabled={isPending}
                    required
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={userInformation.phoneNumber}
                    className="w-full border border-gray-300 rounded-l p-2 disabled:opacity-50"
                    placeholder="Enter phone number"
                  />
                  <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                    <img src="./telephone.png" alt="" className="w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="address" className="block">
                Address
              </label>
              <div className="grid grid-cols-[1fr_auto]">
                <input
                  disabled={isPending}
                  required
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                  value={userInformation.address}
                  className="w-full border border-gray-300 rounded-l p-2 disabled:opacity-50"
                  placeholder="Enter address"
                />
                <div className="bg-neutral-200 border-l-0 border border-neutral-300 rounded-r flex items-center w-10 justify-center">
                  <img src="./pin.png" alt="" className="w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <select
                disabled={isPending}
                required
                name="gender"
                id="gender"
                onChange={handleChange}
                value={userInformation.gender}
                className="w-full border border-gray-300 rounded p-2 disabled:opacity-50"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <img src="./logo.png" alt="" className="w-12 rotate-y-180" />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:scale-105 transform transition-transform cursor-pointer disabled:opacity-50"
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Update info"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
