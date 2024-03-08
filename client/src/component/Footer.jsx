import React from 'react'
import footerbg from '../assets/img/footer-bg.png'
import footergif from '../assets/img/footergif.gif'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from '../assets/img/logo.png'

const Footer = () => {
  return (


    <footer class="bg-white dark:bg-gray-900 w-full">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src={logo} class="h-16  me-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Home</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/" class="hover:underline">Upcoming Carnival</a>
                </li>
                <li>
                  <a href="/team" class="hover:underline">Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Activities</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/activity/art" class="hover:underline ">Art & Crafts</a>
                </li>
                <li>
                  <a href="/activity/adventure" class="hover:underline">Adventure</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/exhibitor" class="hover:underline">Exhibitor</a>
                </li>
                <li class="mb-4">
                  <a href="/volunteer" class="hover:underline">Volunteer</a>
                </li>
                <li class="mb-4">
                  <a href="/contact" class="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaLinkedin />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaTwitter />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagram />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaFacebookF />

            </a>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default Footer