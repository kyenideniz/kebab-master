"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailOpen, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    function onClick(){
        console.log("First Name", firstName);
    }

    return (
        <div className="p-2 w-full">
            <div className="lg:p-12 md:p-12 sm:p-2 xs:p-2 w-full items-center justify-center flex">
                <div className="max-w-6xl grid grid-cols-5 w-full space-x-3 "> 
                    <div className="lg:col-span-3 md:col-span-3 sm:col-span-5 xs:col-span-5 grid w-full lg:pl-12 md:pl-12 sm:pl-2 xs:pl-2 pr-2">
                        <div className="shadow-lg shadow-gray-800 p-12">
                            <div className="lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl font-bold py-8"> 
                                Company Details
                            </div>
                            <div className="grid grid-cols-2 w-full">
                                <div className="">
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl py-6">
                                        <Phone className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Phone Number</div>
                                    </div>
                                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg">+123 456 789 101</div>
                                </div>
                                <div>
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl py-6">
                                        <MailOpen className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">E-Mail Address</div>
                                    </div>
                                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg underline">donerrobot@gmail.com</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 pt-8 ">
                                <div>
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl pb-6">
                                        <MapPin className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Location</div>
                                    </div>
                                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg">123 Kebab Street <br></br>Netherlands, NL 10001</div>
                                </div>
                            </div>
                        </div>
                        <Image 
                            src={"/netherlands.PNG"} 
                            alt={"left"}            
                            width={500}
                            height={500}
                            className="w-full h-full pt-4"
                            />
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-5 xs:col-span-5 sm:pt-4 xs:pt-4 pr-2">
                        <div className="p-12 bg-[#cf0a2c] text-white w-full">
                            <div className="text-4xl font-semibold py-8">
                                Get in Touch
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="pb-6 pr-3">
                                    <div className="text-xl pl-3 py-3">First Name</div>
                                    <Input 
                                        placeholder="John" 
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                        name="firstName"
                                        className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"
                                    />
                                </div>
                                <div className="pb-6 pl-3">
                                    <div className="text-xl pl-3 py-3">Last Name</div>
                                    <Input 
                                        placeholder="Doe" 
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                        name="lastName"
                                        className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"
                                    />
                                </div>
                            </div>
                            <div className="pb-6 ">
                                <div className="text-xl pl-3 py-3">E-Mail</div>
                                <Input 
                                    placeholder="johndoe@mail.com" 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    className="placeholder:font-light font-light text-xl placeholeder:underline focus-within:text-white focus-visible:text-xl bg-transparent w-full h-12 placeholder:text-white border-white placeholder:text-xl"
                                />
                            </div>
                            <div>
                                <div className="pb-4">
                                    Message
                                </div>
                                <Textarea
                                    placeholder="Your Message..."
                                    name="message"
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    className="text-xl text-white focus:border-0 placeholder:font-light font-light placeholder:text-white placeholder:p-2 resize-none bg-transparent border-none shadow-lg shadow-gray-900"     
                                />
                            </div>
                            <div className="pt-12">
                                <Button 
                                onClick={onClick}
                                    className="w-full bg-[#d3d3d3] hover:bg-[#c0c0c0] font-semibold h-full text-black text-xl"
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}