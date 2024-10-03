import React from 'react';

const RocketSection = ({ data }) => {
    return (
        <section id="rockets" className="p-6 my-12 scroll-mt-20">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                {data.title}</h2>

            <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">

                {data.items.map((rocket) => (
                    <li key={rocket.id}
                        className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">

                        <img src={rocket.image} alt={rocket.name} className="w-1/2 mb-6" />
                        <h3 className="text-3xl text-center text-slate-900 dark:text-white">{rocket.name}</h3>
                        <p>{rocket.code}</p>

                        <p className="hidden sm:block text-3xl text-center text-slate-500 mt-2 dark:text-slate-400">{rocket.description}</p>
                    </li>
                ))}
            </ul>
            <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        </section>
    );
};

export default RocketSection;
