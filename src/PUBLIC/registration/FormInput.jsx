import React, { useState } from "react";
import { User } from "./Arrinput";

import "input.css"

function Profile() {
  const [editable, setEditable] = useState(false);
  const [userData, setUserData] = useState(User);

  const handleChange = (e, field) => {
    const value = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Yahan aap form submit logic implement karein
    console.log("Submitted Data:", userData);
    // Aur phir edit mode ko band kardein
    setEditable(false);
  };

  return (
    <>
      <div className="bg-gray-200">
        <div className="w-[85%] mx-auto py-4 rounded">
          <div className="bg-[#bf6d4fcc] flex justify-center ">
            <div className="py-3 px-[3rem] flex flex-col items-center">
              {/* Image and Profile Header */}
            </div>
            <div className=" heading text-white m-auto font-semibold text-2xl pl-[3rem]">
              {/* Profile details */}
            </div>
          </div>

          <div className="bg-gray-100 pb-8">
            {/* Personal and Additional Details */}
            <div className="grid grid-cols-2 gap-2 pl-2">
              {/* Personal Details */}
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 font-semibold">
                  {/* Mapping over personal details */}
                  {Object.keys(userData).slice(0, 4).map((field, index) => (
                    <div key={index}>{field.charAt(0).toUpperCase() + field.slice(1)}:</div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {/* Mapping over personal detail values */}
                  {Object.keys(userData).slice(0, 4).map((field, index) => (
                    <input
                      type="text"
                      key={index}
                      value={userData[field]}
                      onChange={(e) => handleChange(e, field)}
                      readOnly={!editable}
                    />
                  ))}
                </div>
              </div>
              {/* Additional Details */}
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 font-semibold">
                  {/* Mapping over additional details */}
                  {Object.keys(userData).slice(4).map((field, index) => (
                    <div key={index}>{field.charAt(0).toUpperCase() + field.slice(1)}:</div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {/* Mapping over additional detail values */}
                  {Object.keys(userData).slice(4).map((field, index) => (
                    <input
                      type="text"
                      key={index}
                      value={userData[field]}
                      onChange={(e) => handleChange(e, field)}
                      readOnly={!editable}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[3rem]">
            {/* Button to toggle edit mode */}
            <button
              className="bg-slate-600 text-white rounded-3xl p-[0.2rem_1.1rem] mr-2"
              onClick={() => setEditable(!editable)}
            >
              {editable ? "Cancel" : "Edit"}
            </button>
            {/* Button to submit the form */}
            {editable && (
              <button
                className="bg-green-600 text-white rounded-3xl p-[0.2rem_1.1rem]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
