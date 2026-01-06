import React from 'react'
import Bg from '../assets/Bg.png'
import { motion } from 'framer-motion'

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Contact = () => {
    return (
        <div id='contact' style={bgImage} className='min-h-screen flex items-center justify-center p-6'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='w-full max-w-3xl bg-secondary/30 rounded-lg shadow-md p-8'>
                <h1
                    className='text-3xl font-bold text-center text-amber-900 mb-6 font-cursive'>Contact Us</h1>
                <p className='text-center text-lg text-gray-600 mb-8 font-cursive'>Have a question or want to collaborate? Let’s talk.</p>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                        <input type="text" id='name' name='name' placeholder='Your Name'
                            className='w-full px-4 py-2 border borde-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                        <input type="email" id='email' name='email' placeholder='Your Email'
                            className='w-full px-4 py-2 border borde-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                        <textarea name="message" id="message" placeholder='Your Message' rows="5"
                            className='w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 '
                        ></textarea>
                    </div>
                    <button className='w-full py-2 px-4 bg-amber-900 text-white font-semibold rounded-lg shadow-md hover:bg-amber-950 transition duration-300'>Send Message</button>
                </form>
                <div className="mt-8 text-center space-y-1">
                    <p className="text-dark">Connect with me</p>
                    <a
                        href="https://github.com/tejaswiniaher"
                        className="font-semibold text-accent hover:underline"
                    >
                        GitHub
                    </a>
                    <p className="font-semibold text-dark">
                        tejaswiniaher905@gmail.com
                    </p>
                </div>

            </motion.div>
        </div>
    )
}

export default Contact