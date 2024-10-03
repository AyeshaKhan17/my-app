import React from "react";

const HeroSection = ({ data }) => (
    <div>
        <section className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12" >

            <div className="sm:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900
            dark:text-white">{data.title}</h2>
                <p className="max-w-md text-center text-2xl mt-4 sm:text-left text-slate-700 dark:text-slate-400">{data.subTitle}</p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">{data.description}</p>
            </div>
            <img src={data.image} alt={data.title} className="w-1/2" />

        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2 mb-8"></hr>
    </div>
);

export default HeroSection;





