import React from "react";
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import googlelogo from '../images/googlelogo.png'


function SignUpForm() {
  return (
    <section className="max-w-screen-2xl ">
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        
        {/* Language Selector */}
        <div className="absolute top-4 right-4">
          <button className="border p-1 rounded-full">
            🇺🇸 EN
          </button>
        </div>
        
        {/* Form Header */}
        <h2 className="text-center text-3xl font-bold text-blue-700">Sign Up</h2>
        <p className="text-center text-gray-600">Enter your email and password to register</p>

        {/* Form Fields */}
        <form className="space-y-5 text-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <br />

          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Subscribe to weekly newsletter</label>
          </div>

          <br />

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>

        <br />

        {/* Divider */}
        <div className="flex items-center pb-6">
          <span className="border-b w-full border-gray-300"></span>
          <span className="text-gray-500 px-4">OR</span>
          <span className="border-b w-full border-gray-300"></span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <button className="p-3 rounded-full px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gray-300 text-blue-600">
    <img src={facebook} alt="facebook" />

    </button>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <button className="p-3 rounded-full px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gray-300 text-red-600">
    <img src={twitter} alt="twitter" />

    </button>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <button className="p-3 rounded-full px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gray-300 text-green-600">
    <img src={insta} alt="insta" />

    </button>
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <button className="p-3 rounded-full px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gray-300 text-blue-800">
    <img src={googlelogo} alt="googlelogo" />

    </button>
  </a>
</div>


        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 ">
          Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
    </section>
  );
}

export default SignUpForm;
