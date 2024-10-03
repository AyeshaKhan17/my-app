import React from "react";



const Header = ({ data }) => (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">


            <h1 className="text-3xl">{data.companyName}</h1>

            <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                &#9776;
            </button>

            <nav className="hidden sm:block space-x-8 text-xl">

                {data.menues.map(menu => (
                    <a key={menu.id} href={menu.url} className="text-xl mx-2 hover:opacity-90 ">
                        {menu.name}
                    </a>
                ))}

            </nav>
        </section>
    </header >
);;

export default Header;