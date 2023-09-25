"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleFormDataChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                alert("Message Sent! I'll get back to you.")
                setFormData({ name: "", email: "", message: "" })
            }
        })
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 flex justify-center mb-3">
                        <Image
                            className="transition ease-in-out delay-40 duration-200 drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0px_0px_2px_#1395BA] inline mx-[5px] cursor-pointer"
                            src="/logo-images/ContactLogo.png"
                            width={40}
                            height={40}
                            alt="contact logo"
                        />
                    </div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-r-2"></div>
                    <div className="h-[28px] border-solid border-[#F16C20] border-l-2"></div>
                </div>
                <h2 className="font-bold text-[36px] flex justify-center"><span className="">CONTACT</span></h2>
                <div className="mt-10">
                    <h2 className="flex justify-center"><span className="font-bold text-[20px] text-[#F16C20] text-center">Have a question or want to work together?</span></h2>
                    <div className="flex justify-center">
                        <form onSubmit={handleFormSubmit} className="mt-[60px]">
                            <div className="form-group">
                                <input value={formData.name} onChange={handleFormDataChange} type="text" className="mb-[5px] p-3 rounded-[10px] bg-[#1395BA]/[15%] md:w-[600px] w-[310px] h-[42px] form-control" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input value={formData.email} onChange={handleFormDataChange} type="email" className="mb-[5px] p-3 rounded-[10px] bg-[#1395BA]/[15%]  md:w-[600px] w-[310px] h-[42px] form-control" id="exampleFormControlInput1" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea value={formData.message} onChange={handleFormDataChange} className="p-3 rounded-[10px] bg-[#1395BA]/[15%] md:w-[600px] w-[310px] h-[142px] form-control" id="exampleFormControlTextarea1" name="message" placeholder="Your message" rows="5"></textarea>
                            </div>
                            <div className="contact-buttons flex float-right">
                                <button className="bg-[#F16C20] border-solid border-2 border-[#F16C20] hover:bg-[#EDEDED] hover:text-[#F16C20] transition ease-in-out delay-100 duration-200 w-[181px] h-[35px] rounded-[10px] mt-[8px]">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
