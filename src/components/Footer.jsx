import React from 'react';

const Footer = ({ data }) => {

    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-teal-700 text-white text-xl">
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">

                <div className="mb-4 sm:mb-0">
                    <h2>{data.companyInfo.name}</h2>
                    {data.companyInfo.address}<br />
                    Email: <a href={`mailto:${data.companyInfo.email}`}>{data.companyInfo.email}</a><br />
                    Phone: <a href={`tel:+1${data.companyInfo.phone.replace(/-/g, '')}`}>{data.companyInfo.phone}</a>
                </div>


                <nav className=" flex flex-col gap-2 mb-4 sm:text-left">
                    {data.links.map((link) => (
                        <a href={`#${link.id}`} key={link.id} className="hover:opacity-90">
                            {link.name}
                        </a>
                    ))}
                </nav>


                <div className="flex flex-col gap-2">
                    <div className="flex space-x-4">
                        {data.socialLinks.map((social) => (
                            <a key={social.id} href={social.url} className="hover:opacity-90">
                                {social.name}
                            </a>
                        ))}
                    </div>
                    <p className="">
                        {data.copyright.title} <span>{currentYear}</span>
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;




