import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar2() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <header class="bg-gradient-to-tr from-gray-900 to-gray-900 lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
            <div class="text-2xl font-bold flex-1 flex justify-between items-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-800">
                    <a href="/">SAKRA BARBERSHOP</a>
                </span>
            </div>

            <label for="menu-toggle" class="pointer-cursor md:hidden block">
                <svg class="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-slate-100 pt-4 md:pt-0">
                        <li><a class="md:p-4 py-3 px-0 block" href="/">Home</a></li>
                        {/* <li><a class="md:p-4 py-3 px-0 block" href="/bestCutting">Best Cutting</a></li>
                        <li><a class="md:p-4 py-3 px-0 block" href="/faceShape">Face Shape that Suits You</a></li>
                        <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/bestbarber">Best Barber</a></li> */}
                        <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/login">Login</a></li>
                        {/* <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" onClick={handleLogout}>Logout</a></li> */}
                        <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/register">Register</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar2;