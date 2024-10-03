import React from 'react';

const TestimonialSection = ({ data }) => {
    return (
        <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                {data.title}
            </h2>
            {data.items.map((testimonial) => (
                <figure key={testimonial.id} className="my-12">
                    <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                        <p
                            className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
                            {testimonial.description}
                            {testimonial.highlight && (
                                <span className="italic"> {testimonial.highlight}</span>
                            )}
                        </p>
                    </blockquote>
                    <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
                        &#8212;{testimonial.name}
                    </figcaption>
                </figure>
            ))}
            <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        </section>
    );
};

export default TestimonialSection;
