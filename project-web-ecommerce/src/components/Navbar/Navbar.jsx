import React from "react";
import  Logo  from "../../assets/Logo.png";

export const Navbar = () => {
    return (
        <div>
            {/* upper navbar */}
            <div>
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#" className="font-bold  text-2xl  sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="w-10 uppercase" />
                            E-shop
                        </a>
                    </div>
                    <div>
                        <div className="group">
                            <input type="text" placeholder="Enter your search...."
                            className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                        </div>
                    </div>
                </div>
            </div>
            {/* lower navbar */}
        </div>
    );
};
