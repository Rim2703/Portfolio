"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        // console.log(data)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                setEmailSubmitted(true);
                // Reset the form
                e.target.email.value = '';
                e.target.subject.value = '';
                e.target.message.value = '';
            } else {
                console.error('Error submitting the form');
            }

        } catch (error) {
            console.error('Error submitting the form', error);
        }
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">

            <div>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-4">
                    <Link href="https://github.com/Rim2703" target="_blank">
                        <Image src="/images/github.png" alt="Github Icon" width={30} height={25} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rimsha-khan-94635b235/" target="_blank">
                        <Image src="/images/linkedin.png" alt="Linkedin Icon" width={30} height={25} />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium"> Your email</label>
                    <input type="email" id="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        required placeholder='Enter your email' />

                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input type="text" id="subject" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        required placeholder='Enter Something' />

                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea name='message' id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        required placeholder='Write message' />
                    <button type='submit' className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"> Send Message</button>
                </form>
                {emailSubmitted && (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                )}
            </div>
        </section>
    )
}

export default Contact