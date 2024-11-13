import React from "react";
import { Link } from "react-router-dom";
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import googlelogo from '../images/googlelogo.png'

function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-6">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left Section with Logo and Illustration */}
        <div className="w-1/2 bg-gradient-to-br from-purple-700 to-blue-600 p-8 flex flex-col items-center justify-center text-white">
          <div className="text-3xl font-bold mb-6">tapect</div>
          <img 
            src="path/to/illustration.png"
             // Replace with the path to your illustration image
            className="w-3/4"
          />
        </div>
        
        {/* Right Section with Sign-In Form */}
        <div className="w-1/2 p-8">
          {/* Language Selector */}
          <div className="flex justify-end mb-4">
            <button className="border p-1 rounded-full text-sm">
              🇺🇸 EN
            </button>
          </div>

          {/* Sign-In Form */}
          <h2 className="text-2xl font-bold text-blue-700">SIGN IN</h2>
          <p className="text-gray-600 mt-2">Enter your email and password to login</p>

          <form className="space-y-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <br />
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              />
            </div>
                <br />
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Subscribe to weekly newsletter</label>
            </div>

            <br />

            {/* Sign-In Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
            >
              SIGN IN
            </button>
          </form>

          {/* Divider */}
          <div className="text-center text-gray-500 my-4">OR</div>

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
          <p className="text-center text-sm text-gray-600 mt-4">
  Don’t have an account? <Link to="/signup" className="text-blue-600">SIGN UP</Link>
</p>

          {/* Footer Text */}
          <p className="text-center text-xs text-gray-500 mt-6">
            © 2023. VRSTO All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
