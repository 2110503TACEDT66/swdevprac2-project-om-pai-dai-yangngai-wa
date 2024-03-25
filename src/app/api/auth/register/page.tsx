"use client";

import React, { useState } from "react";

const LoginPage = async () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  

  return (
    <main className="flex w-screen flex-col  items-center bg-main-100 min-h-[90vh] p-7">
      <h1 className=" text-5xl py-10 font-semibold text-white">
        REGISTER
      </h1>
      <div className="px-7 py-4 shadow space-y-7 bg-white rounded-md flex flex-col w-2/5">

        <div className=" flex flex-row w-full ">
            <div className=" flex flex-col space-y-3 w-full">
                <h1 className=" font-bold text-xl">
                    Email
                </h1>
                <input onChange={(e) => (setEmail(e.target.value))}
                placeholder="johndoe@gmail.com" className=" text-xl text-blck font-semibold placeholder:text-xl border-2 focus:outline-none py-2 px-5 border-gray-300 h-full rounded-md" type="text" />
            </div>
        </div>
        <div className=" flex flex-row w-full ">
            <div className=" flex flex-col space-y-3 w-full">
                <h1 className=" font-bold text-xl">
                    Password
                </h1>
                <input onChange={(e) => (setPass(e.target.value))}
                placeholder="Password" className=" text-xl text-blck font-semibold placeholder:text-xl border-2 focus:outline-none py-2 px-5 border-gray-300 h-full rounded-md" type="password" />
            </div>
        </div>
        <div className=" flex flex-row w-full space-x-5">
            <div className=" flex flex-col space-y-3 w-1/2">
                <h1 className=" font-bold text-xl">
                    Name
                </h1>
                <input onChange={(e) => (setName(e.target.value))}
                placeholder="John Doe" className=" text-xl text-blck font-semibold placeholder:text-xl border-2 focus:outline-none py-2 px-5 border-gray-300 h-full rounded-md" type="text" />
            </div>
            <div className=" flex flex-col space-y-3 w-1/2">
                <h1 className=" font-bold text-xl">
                    Telephone
                </h1>
                <input onChange={(e) => (setTelephone(e.target.value))}
                placeholder="02 000 2254" className=" text-xl text-blck font-semibold placeholder:text-xl border-2 focus:outline-none py-2 px-5 border-gray-300 h-full rounded-md" type="text" />
            </div>
        </div>
        <button  className=" bg-main-100 text-white  text-center py-3 rounded-md font-semibold" >
            REGISTER
        </button>
      </div>
    </main>
  );
};

export default LoginPage;