import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../individual/Header";

function NewAdminUser(props) {
  return (
    <Fragment>
      <div className="w-full h-full relative">
        <Header />
        <main className="w-full h-180/2 padding-12 sm2:p-5">
          <div className="w-full h-full relative">
            <div className="h-full w-full overflow-hidden flex items-center justify-center">
              {/* <!-- Root element for center items --> */}
              <div className="w-full flex flex-col h-screen bg-gray-100">
                {/* <!-- Auth Card Container --> */}
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                  {/* <!-- Auth Card --> */}
                  <div
                    className="
                  w-11/12
                  p-12
                  sm:w-8/12
                  md:w-6/12
                  lg:w-5/12
                  2xl:w-4/12
                  px-6
                  py-10
                  sm:px-10 sm:py-6
                  bg-white
                  rounded-lg
                  shadow-md
                  lg:shadow-lg
                "
                  >
                    {/* <!-- Card Title --> */}
                    <h2
                      className="
                    text-center
                    font-semibold
                    text-3xl
                    lg:text-4xl
                    text-gray-800
                  "
                    >
                      New Admin User
                    </h2>

                    <form className="mt-10" method="POST">
                      {/* <!-- Name --> */}
                      <label
                        for="name"
                        className="block text-xs font-semibold text-gray-600 uppercase"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="name"
                        name="name"
                        placeholder=" name"
                        autocomplete="name"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                        required
                      />
                      {/* <!-- Email Input --> */}
                      <label
                        for="email"
                        className="
                      block
                      text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      mt-2
                    "
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        autocomplete="email"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                        required
                      />
                      {/* <!-- Password Input --> */}
                      <label
                        for="password"
                        className="
                      block
                      mt-2
                      text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                    "
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        autocomplete="password"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      mb-4
                      text-gray-800
                      appearance-none
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                        required
                      />
                      {/* <!-- Password Input --> */}
                      <label
                        for="adminLevel"
                        className="
                      block
                      mt-2
                      text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                    "
                      >
                        Admin Level
                      </label>
                      <select
                        id="adminLevel"
                        name="adminLevel"
                        className="
                      block
                      w-full
                      py-3
                      px-1
                      mt-0
                      mb-4
                      text-gray-800
                      border-b-2 border-gray-100
                      focus:text-gray-500
                      focus:outline-none
                      focus:border-gray-200
                    "
                        required
                      >
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                        <option>Level 4</option>
                      </select>

                      {/* <!-- Auth Buttton --> */}
                      <button
                        type="submit"
                        className="
                      w-full
                      py-3
                      mt-10
                      bg-gray-800
                      rounded-sm
                      font-medium
                      text-white
                      uppercase
                      focus:outline-none
                      hover:bg-gray-700 hover:shadow-none
                    "
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

NewAdminUser.propTypes = {};

export default NewAdminUser;
