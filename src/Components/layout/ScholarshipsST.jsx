import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import HeaderUser from "../individual/HeaderUser";
import { Link } from "react-router-dom";

function ScholarshipsST(props) {
  const [newSchoPop, setNewSchoPop] = useState("hidden");
  const [schoPop, setSchoPop] = useState("hidden");
  const changeNewSchoPop = () => {
    newSchoPop === "hidden" ? setNewSchoPop(" ") : setNewSchoPop("hidden");
  };
  const changeSchoPop = () => {
    schoPop === "hidden" ? setSchoPop(" ") : setSchoPop("hidden");
  };
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <HeaderUser />
        <main className="w-full h-180/2 padding-12 sm2:p-5 z-0 relative">
          <div className="w-full h-full relative">
            <div className="w-full h-180/2 centerSom bg-white lg1:bg-transparent">
              <div
                className="
              grid
              gap-6
              pt-5
              px-5
              mb-8
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              usm:px-1
            "
              >
                {/* <!-- Card 1 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
                relative
                text-center
                md3:h-36
              "
                  onClick={() => changeNewSchoPop()}
                >
                  <div className="w-20 h-20 centerSom">
                    <img
                      src="./img/icons8-add-100.png"
                      alt="add logo"
                      className="w-full h-full bg-cover"
                    />
                    <div>
                      <p className="mb-2 text-md font-medium text-gray-900"></p>
                      <p className="text-sm font-normal text-gray-800"></p>
                      <p className="text-sm font-normal text-gray-800"></p>
                      <p className="text-sm font-normal text-gray-800">
                        <span className="text-white bg-green-400"></span>
                      </p>
                      <p className="text-sm font-normal text-gray-800">
                        <span className="text-white bg-gray-500"></span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                  onClick={() => changeSchoPop()}
                >
                  <div className="mr-4 bg-blue-500 text-white rounded-full">
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-md font-medium text-gray-900">
                      Abib Khan
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      CNIC: 1542748485745
                    </p>
                    <p className="text-sm font-normal text-gray-800">AGE: 15</p>
                    <p className="text-sm font-normal text-gray-800">
                      APPLICATION SUBMITTED:
                      <span className="text-white bg-green-400">YES</span>
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      STATUS:{" "}
                      <span className="text-white bg-gray-500">PENDING</span>
                    </p>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                >
                  <div className="mr-4 bg-blue-500 text-white rounded-full relative">
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-md font-medium text-gray-900">
                      Sufyan Khan
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      CNIC: 1542785695745
                    </p>
                    <p className="text-sm font-normal text-gray-800">AGE: 15</p>
                    <p className="text-sm font-normal text-gray-800">
                      APPLICATION SUBMITTED:
                      <span className="text-white bg-green-400">YES</span>
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      STATUS:{" "}
                      <span className="text-white bg-green-400">ACCEPTED</span>
                    </p>
                  </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div
                  className="
                flex
                items-center
                p-4
                bg-white
                border-2 border-gray-200
                rounded-lg
                shadow-sm
                dark:bg-gray-800
              "
                >
                  <div className="mr-4 bg-blue-500 text-white rounded-full">
                    <img
                      className="rounded-full w-12 h-12"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-md font-medium text-gray-900">
                      Kabib Khan
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      CNIC: 15427851555745
                    </p>
                    <p className="text-sm font-normal text-gray-800">AGE: 15</p>
                    <p className="text-sm font-normal text-gray-800">
                      APPLICATION SUBMITTED:
                      <span className="text-white bg-gray-500">NO</span>
                    </p>
                    <p className="text-sm font-normal text-gray-800">
                      STATUS:
                      <span className="text-white bg-gray-500">
                        Not Submitted
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* pop up section */}
              {/* <!-- popup section  --> */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${schoPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        Abib Khan
                      </h1>
                    </div>
                  </div>
                  {/* <!-- Admin --> */}
                  <hr className="mt-5 border" />
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Application Status
                      </label>
                      <select
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        mb-5
                        bg-gray-100
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                      >
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Denied</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Notes for student
                      </label>
                      <textarea
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        h-32
                        focus:outline-none
                        focus:ring-gray-600
                        focus:border-transparent
                        mb-5
                      "
                        type="text"
                        value="The application was not accepted because the student photos and academic records are not clear so please upload a new photos/documents."
                      />
                    </div>
                  </div>
                  <hr classNameName="mt-5 border" />
                  {/* <!-- 1 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Name
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        value="Abib Khan"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        CNIC
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        value="1542748485745"
                      />
                    </div>
                  </div>
                  {/* <!-- 2 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Gender
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Age
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        value="15"
                      />
                    </div>
                  </div>
                  {/* <!-- 3 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Mobile
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        value="+54-5689-896-896"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Phone
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        value="5623894512"
                      />
                    </div>
                  </div>

                  {/* <!-- 4 row --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Email
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      value="test@test.com"
                    />
                  </div>

                  {/* <!-- 5 row --> */}
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                      >
                        CNIC PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                          flex flex-col
                          border-2 border-black
                          w-full
                          h-64
                          hover:bg-gray-100 hover:border-gray-300
                          group
                        "
                        >
                          <div className="flex flex-col items-center justify-center pt-0">
                            <img
                              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
                              className="bg-cover w-full h-60"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                      >
                        STUDENT PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                          flex flex-col
                          border-2 border-black
                          w-full
                          h-64
                          hover:bg-gray-100 hover:border-gray-300
                          group
                        "
                        >
                          <div className="flex flex-col items-center justify-center pt-0">
                            <img
                              src="./img/graduate-member.jpg"
                              className="bg-cover w-full h-60"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    flex
                    items-center
                    justify-self-end
                    md:gap-8
                    gap-4
                    pt-5
                    pb-5
                    mx-7
                  "
                  >
                    <button
                      className="
                      w-auto
                      bg-gray-800
                      hover:bg-gray-700
                      rounded-lg
                      shadow-xl
                      font-medium
                      text-white
                      px-4
                      py-2
                    "
                    >
                      UPDATE FILES
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- 6row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Guardian/Parent
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Kashif Khan</option>
                        <option>Aisha Khan</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Guardian/Parent
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Aisha Khan</option>
                        <option>Kashif Khan</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- 7 row --> */}
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <Link to="/parentsSt">
                      <button
                        className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      >
                        Add Parent/Guardian
                      </button>
                    </Link>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- institution --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      institution/School Name
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      placeholder="institution/School Name"
                    />
                  </div>
                  <div className="grid grid-cols-1 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Institution Type
                    </label>
                    <select
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  bg-gray-100
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                    >
                      <option>Pre-School</option>
                      <option>School</option>
                      <option>High School</option>
                      <option>College</option>
                      <option>University</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Which level/Grade/Semester are you in?
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Pre-School</option>
                        <option>School</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Education you are pursuing
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Pre-school</option>
                        <option>School</option>
                        <option>Master</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Institution/School Email
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="xyzschool@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Institution/School Phone
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="1524562548"
                      />
                    </div>
                  </div>
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Institution/School Joining Date
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="24/10/2020"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Institution/School Address
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="Xyz street"
                      />
                    </div>
                  </div>
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                      >
                        ID CARD PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                          flex flex-col
                          border-2 border-black
                          w-full
                          h-64
                          hover:bg-gray-100 hover:border-gray-300
                          group
                        "
                        >
                          <div className="flex flex-col items-center justify-center pt-0">
                            <img
                              src="./img/Pakistani-CNIC-of-chinese-man.jpg"
                              className="bg-cover w-full h-60"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                      >
                        ADMISSION RECEIPT COPY
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                          flex flex-col
                          border-4 border-dashed
                          w-full
                          h-32
                          hover:bg-gray-100 hover:border-gray-300
                          group
                        "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                              w-10
                              h-10
                              text-gray-400
                              group-hover:text-gray-600
                            "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                              lowercase
                              text-sm text-gray-400
                              group-hover:text-gray-600
                              pt-1
                              tracking-wider
                            "
                            >
                              Click to Download
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                mx-7
                md:gap-8
                gap-4
                pt-5
                pb-5
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      SAVE INFORMATION
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- FEES --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Required Fees
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      value="i need 240$ to finish my school year"
                    />
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE REQUIRED FEES
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- academic records --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Which level/Grade/Semester you recently passed
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>School</option>
                        <option>Pre-School</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        % of Marks,GPA,GRADE
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="2.4 GPA"
                      />
                    </div>
                  </div>
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Date of exam
                      </label>
                      <input
                        className=" py-2 px-3 rounded-lg border border-gray-300
                    mt-1 focus:outline-none focus:ring-1 focus:ring-gray-600
                    focus:border-transparent "
                        type="text"
                        value="24/10/2020"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Date of result
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        placeholder="29/10/2020"
                      />
                    </div>
                  </div>
                  <div
                    className="
                    grid grid-cols-1
                    md:grid-cols-2
                    gap-5
                    md:gap-8
                    mt-5
                    mx-7
                  "
                  >
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                      "
                      >
                        Results recived on:
                      </label>
                      <input
                        className="
                        py-2
                        px-3
                        rounded-lg
                        border border-gray-300
                        mt-1
                        focus:outline-none
                        focus:ring-1
                        focus:ring-gray-600
                        focus:border-transparent
                      "
                        type="text"
                        value="Results recived on information"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                        uppercase
                        md:text-sm
                        text-xs text-gray-500 text-light
                        font-semibold
                        mb-1
                      "
                      >
                        Exam result sheet
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                          flex flex-col
                          border-4 border-dashed
                          w-full
                          h-32
                          hover:bg-gray-100 hover:border-gray-300
                          group
                        "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                              w-10
                              h-10
                              text-gray-400
                              group-hover:text-gray-600
                            "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                              lowercase
                              text-sm text-gray-400
                              group-hover:text-gray-600
                              pt-1
                              tracking-wider
                            "
                            >
                              Click to download
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    flex
                    items-center
                    justify-self-end
                    md:gap-8
                    gap-4
                    pt-5
                    pb-5
                    mx-7
                  "
                  >
                    <button
                      className="
                      w-auto
                      bg-gray-800
                      hover:bg-gray-700
                      rounded-lg
                      shadow-xl
                      font-medium
                      text-white
                      px-4
                      py-2
                    "
                    >
                      UPDATE QUALIFICATION
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- bank account --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Bank Account
                    </label>
                    <select
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  bg-gray-100
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                    >
                      <option>12453568794 Meezan Bank Limited</option>
                      <option>12000568794 Dubai islamic Bank</option>
                    </select>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <Link to="/bankSt">
                      <button
                        className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      >
                        Create Bank Account
                      </button>
                    </Link>
                  </div>

                  {/* <!-- buttons --> */}
                  <hr className="mt-5 border" />
                  <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
                    <button
                      className="
                  w-auto
                  bg-red-400
                  hover:bg-red-200
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      onClick={() => changeSchoPop()}
                    >
                      Cancel
                    </button>
                    <button
                      className="
                  w-auto
                  bg-green-400
                  hover:bg-green-200
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
              {/* End of pop up section */}
              {/* pop up section */}
              {/* <!-- popup section new bank --> */}
              <div
                className={`h-full w-full bg-white absolute top-0 left-0 ${newSchoPop}`}
              >
                <div className="grid h-auto bg-white rounded-lg shadow-xl w-full">
                  <div className="flex justify-center">
                    <div className="flex">
                      <h1 className="text-gray-600 font-bold pt-5 md:text-2xl text-xl">
                        Scholarship Application
                      </h1>
                    </div>
                  </div>
                  {/* <!-- 1 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Name
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        CNIC
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="CNIC"
                      />
                    </div>
                  </div>
                  {/* <!-- 2 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Gender
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Age
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  {/* <!-- 3 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Mobile
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Phone
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  {/* <!-- 4 row --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Email
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  {/* <!-- 5 row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                    mb-1
                  "
                      >
                        CNIC PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              Select a photo
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                    mb-1
                  "
                      >
                        STUDENT PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              Select a photo
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE FILES
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- 6row --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Guardian/Parent
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Kashif Khan</option>
                        <option>Aisha Khan</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Guardian/Parent
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Aisha Khan</option>
                        <option>Kashif Khan</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- 7 row --> */}
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <Link to="/parentsSt">
                      <button
                        className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      >
                        Add Parent/Guardian
                      </button>
                    </Link>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- institution --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      institution/School Name
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      placeholder="institution/School Name"
                    />
                  </div>
                  <div className="grid grid-cols-1 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Institution Type
                    </label>
                    <select
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  bg-gray-100
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                    >
                      <option>Pre-School</option>
                      <option>School</option>
                      <option>High School</option>
                      <option>College</option>
                      <option>University</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Which level/Grade/Semester are you in?
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Pre-School</option>
                        <option>School</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Education you are pursuing
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>Pre-school</option>
                        <option>School</option>
                        <option>Master</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Institution/School Email
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Institution/School Phone
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Institution/School Joining Date
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Joining date"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Institution/School Address
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Adress"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                    mb-1
                  "
                      >
                        ID CARD PHOTO
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              Select a photo
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                    mb-1
                  "
                      >
                        ADMISSION RECEIPT COPY
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              CHOOSE A FILE
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                mx-7
                md:gap-8
                gap-4
                pt-5
                pb-5
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      SAVE INFORMATION
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- FEES --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Required Fees
                    </label>
                    <input
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                      type="text"
                      placeholder="Required Fees"
                    />
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE REQUIRED FEES
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- academic records --> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Which level/Grade/Semester you recently passed
                      </label>
                      <select
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    bg-gray-100
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                      >
                        <option>School</option>
                        <option>Pre-School</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        % of Marks,GPA,GRADE
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Marks, GPA, Grade"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Date of exam
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Date of exam"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Date of result
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Date of result"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                  "
                      >
                        Results recived on:
                      </label>
                      <input
                        className="
                    py-2
                    px-3
                    rounded-lg
                    border border-gray-300
                    mt-1
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-600
                    focus:border-transparent
                  "
                        type="text"
                        placeholder="Results recived on"
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <label
                        className="
                    uppercase
                    md:text-sm
                    text-xs text-gray-500 text-light
                    font-semibold
                    mb-1
                  "
                      >
                        Exam result sheet
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          className="
                      flex flex-col
                      border-4 border-dashed
                      w-full
                      h-32
                      hover:bg-gray-100 hover:border-gray-300
                      group
                    "
                        >
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              className="
                          w-10
                          h-10
                          text-gray-400
                          group-hover:text-gray-600
                        "
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <p
                              className="
                          lowercase
                          text-sm text-gray-400
                          group-hover:text-gray-600
                          pt-1
                          tracking-wider
                        "
                            >
                              CHOOSE A FILE
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <button
                      className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      UPDATE QUALIFICATION
                    </button>
                  </div>
                  <hr className="mt-5 border" />
                  {/* <!-- bank account --> */}
                  <div className="grid grid-cols-1 mt-5 mx-7">
                    <label
                      className="
                  uppercase
                  md:text-sm
                  text-xs text-gray-500 text-light
                  font-semibold
                "
                    >
                      Bank Account
                    </label>
                    <select
                      className="
                  py-2
                  px-3
                  rounded-lg
                  border border-gray-300
                  mt-1
                  bg-gray-100
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gray-600
                  focus:border-transparent
                "
                    >
                      <option>12453568794 Meezan Bank Limited</option>
                      <option>12000568794 Dubai islamic Bank</option>
                    </select>
                  </div>
                  <div
                    className="
                flex
                items-center
                justify-self-end
                md:gap-8
                gap-4
                pt-5
                pb-5
                mx-7
              "
                  >
                    <Link to="/bankSt">
                      <button
                        className="
                  w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      >
                        Create Bank Account
                      </button>
                    </Link>
                  </div>

                  {/* <!-- buttons --> */}
                  <hr className="mt-5 border" />
                  <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
                    <button
                      className="
                  w-auto
                  bg-red-400
                  hover:bg-red-200
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                      onClick={() => changeNewSchoPop()}
                    >
                      Cancel
                    </button>
                    <button
                      className="
                  w-auto
                  bg-green-400
                  hover:bg-green-200
                  rounded-lg
                  shadow-xl
                  font-medium
                  text-white
                  px-4
                  py-2
                "
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              {/* End of pop up section */}
              {/* end of pop up section */}
              {/* end of pop up section */}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

ScholarshipsST.propTypes = {};

export default ScholarshipsST;
