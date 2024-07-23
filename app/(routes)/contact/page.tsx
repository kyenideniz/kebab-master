import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, MailOpen, MapPin, Phone, Share2, Twitter } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="p-2 w-full">
            <div className="p-12 w-full items-center justify-center flex">
                <div className="max-w-6xl grid grid-cols-5 w-full space-x-3 "> 
                    <div className="col-span-3 row-span-2 grid w-full pl-12 pr-2">
                        <div className="shadow-lg shadow-gray-800 p-12">
                            <div className="text-4xl font-bold py-8"> 
                                Company Details
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="">
                                    <div className="text-2xl py-6">
                                        <Phone className="inline text-2xl pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Phone Number</div>
                                    </div>
                                    <div className="text-xl">+123 456 789 101</div>
                                </div>
                                <div>
                                    <div className="text-2xl py-6">
                                        <MailOpen className="inline text-2xl pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">E-Mail Address</div>
                                    </div>
                                    <div className="text-xl underline">donerrobot@gmail.com</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 pt-8 ">
                                <div>
                                    <div className="text-2xl pb-6">
                                        <MapPin className="inline text-2xl pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Location</div>
                                    </div>
                                    <div className="text-xl">123 Kebab Street <br></br>Netherlands, NL 10001</div>
                                </div>
                                <div>
                                    <div className="text-2xl pb-6">
                                        <Share2  className="inline text-2xl pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Connect with us</div>
                                    </div>
                                    <div className="text-xl">
                                        <Facebook className="inline space-x-2"/>
                                        <Twitter className="inline ml-2"/>
                                    </div>
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
                    
                    <div className="col-span-2 bg-[#cf0a2c] p-12 text-white">
                        <div className="text-4xl font-semibold py-8">
                            Get in Thouch
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="pb-6 pr-3">
                                <div className="text-xl pl-3 py-3">First Name</div>
                                <Input placeholder="John" className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"/>
                            </div>
                            <div className="pb-6 pl-3">
                                <div className="text-xl pl-3 py-3">Last Name</div>
                                <Input placeholder="Doe" className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"/>
                            </div>
                        </div>
                        <div className="pb-6 ">
                            <div className="text-xl pl-3 py-3">E-Mail</div>
                            <Input placeholder="johndoe@mail.com" className="placeholder:font-light font-light text-xl placeholeder:underline focus-within:text-white focus-visible:text-xl bg-transparent w-full h-12 placeholder:text-white border-white placeholder:text-xl"/>
                        </div>
                        <div>
                            <div className="pb-4">
                                Message
                            </div>
                            <Textarea
                                placeholder="Your Message..."
                                className="text-xl text-white placeholder:font-light font-light placeholder:text-white placeholder:p-2 resize-none bg-transparent border-none shadow-lg shadow-gray-900"
                                
                            />
                        </div>
                        <div className="pt-12">
                            <Button className="w-full bg-[#d3d3d3] hover:bg-[#c0c0c0] font-semibold h-full text-black text-xl">Send</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}