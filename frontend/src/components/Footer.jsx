import React from 'react'
import FooterBg from '../assets/coffee-footer.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "Menu", link: "/#menu" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "350px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className='text-white'>
            <div className='bg-black/60 min-h-[350px]'>
                <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-6 py-16 px-4'>

                    {/* Personal Branding */}
                    <div>
                        <h1 className='text-3xl font-cursive'>Tejaswini Aher</h1>
                        <p className='mt-3 text-sm text-gray-300'>
                            Frontend Developer passionate about building responsive,
                            user-friendly web applications using React & Tailwind CSS.
                        </p>

                        <p className='mt-4 text-sm'>
                            📧 <span className='font-semibold'>
                                tejaswiniaher905@gmail.com
                            </span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h1 className='text-xl font-semibold mb-4'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a
                                        href={data.link}
                                        className='hover:text-amber-400 duration-200'
                                    >
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h1 className='text-xl font-semibold mb-4'>Connect With Me</h1>
                        <div className='flex gap-5'>
                            <a
                                href="https://github.com/tejaswiniaher"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub className='text-3xl hover:text-amber-400 duration-300' />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/tejaswini-aher-53b9232a4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin className='text-3xl hover:text-amber-400 duration-300' />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className='text-center text-sm text-gray-400 pb-4'>
                    © {new Date().getFullYear()} Tejaswini Aher | Built with React & Tailwind CSS
                </div>
            </div>
        </div>
    )
}

export default Footer
