import React from "react";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import RocketSection from "../components/RocketSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import data from "../data.json";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
            <Header data={data.header} />
            <div className="max-w-4xl mx-auto">
                <HeroSection data={data.heroSection} />
                <RocketSection data={data.ourRockets} />
                <TestimonialSection data={data.ourTestimonials} />
                <ContactSection data={data.contactUs} />
            </div>
            <Footer data={data.footer} />
        </div>
    );
};

export default HomePage;
