"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailOpen, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import emailjs from '@emailjs/browser';
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().min(5),
    message: z.string().min(20).max(150)
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
    const router = useRouter();
    const { toast } = useToast()
    const pathname = usePathname();

    const [loading, setLoading] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'donerrob@donerrob.com',
            message: 'Mesajınız...',
        }
    });
    
    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);
            const formData = new FormData();

            formData.append('firstName', data.firstName);
            formData.append('lastName', data.lastName);
            formData.append('email', data.email);
            formData.append('messaeg', data.message);
            
            const { firstName, lastName, email, message } = data;

            const templateParams = {
                firstName,
                lastName,
                email,
                message,
            };
            await emailjs.send(
                "service_tiygxk7",
                "template_1wuu5mq",
                templateParams,
                "z3HOpD4iR3lIdb1Tp",
            );


            router.push(`/tr`)

            toast({
                title: "Başarılı",
                description: "Mesajınız gönderildi",
            })
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Ah ah! Bir şeyler yanlış gitti.",
                description: "İsteğiniz ile ilgili bir sorun vardı.",
                action: <ToastAction altText="Tekrar deneyin">Tekrar deneyin</ToastAction>,
            })
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-2 w-full">
            <div className="lg:p-12 md:p-12 sm:p-2 xs:p-2 w-full items-center justify-center flex">
                <div className="max-w-6xl grid grid-cols-5 w-full space-x-3 "> 
                    <div className="lg:col-span-3 md:col-span-3 sm:col-span-5 xs:col-span-5 grid w-full lg:pl-12 md:pl-12 sm:pl-2 xs:pl-2 pr-2">
                        <div className="shadow-lg shadow-gray-800 p-12">
                            <div className="lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl font-bold py-8"> 
                                Şirket Bilgileri
                            </div>
                            <div className="grid grid-cols-2 w-full">
                                <div className="">
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl py-6">
                                        <Phone className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Telefon numarası</div>
                                    </div>
                                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg">+123 456 789 101</div>
                                </div>
                                <div>
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl py-6">
                                        <MailOpen className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">E-Mail Adresi</div>
                                    </div>
                                    <div className="lg:text-xl md:text-xl sm:text-lg xs:text-lg underline">donerrobot@gmail.com</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 pt-8 ">
                                <div>
                                    <div className="lg:text-2xl md:text-2xl sm:text-xl xs:text-xl pb-6">
                                        <MapPin className="inline pr-3 "/>
                                        <div className="inline h-[40px] aspect-square">Lokasyon</div>
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
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                                    <div className="text-4xl font-semibold py-8">
                                        İletişim Formu
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="pb-6 pr-3">
                                                <FormField
                                                    control={form.control} 
                                                    name="firstName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xl pl-3 py-3">İsim</FormLabel>
                                                            <FormControl>
                                                                <Input 
                                                                    type="text" 
                                                                    disabled={loading} 
                                                                    placeholder='John' 
                                                                    className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"
                                                                    {...field} 
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                        </div>
                                        <div className="pb-6 pl-3">
                                            <FormField
                                                    control={form.control} 
                                                    name="lastName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-xl pl-3 py-3">Soyisim</FormLabel>
                                                            <FormControl>
                                                                <Input 
                                                                    type="text" 
                                                                    disabled={loading} 
                                                                    placeholder='Doe' 
                                                                    className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"
                                                                    {...field} 
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                            />
                                        </div>
                                    </div>
                                    <div className="pb-6 "> 
                                        <FormField
                                            control={form.control} 
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-xl pl-3 py-3">E-Mail</FormLabel>
                                                    <FormControl>
                                                        <Input 
                                                            type="text" 
                                                            disabled={loading} 
                                                            placeholder='info@doner-robot.nl' 
                                                            className="placeholder:font-light font-light text-xl bg-transparent w-full h-12 focus-visible:text-xl placeholder:text-white border-white placeholder:text-xl"
                                                            {...field} 
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={form.control} 
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="pb-4">Mesaj</FormLabel>
                                                    <FormControl>
                                                        <Textarea 
                                                            
                                                            disabled={loading} 
                                                            placeholder='Mesajınız' 
                                                            className="text-xl text-white focus:border-0 placeholder:font-light font-light placeholder:text-white placeholder: resize-none bg-transparent border-none shadow-lg shadow-gray-900"
                                                            {...field} 
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="pt-12">
                                        <Button 
                                            disabled={loading}
                                            type='submit'
                                            className="w-full bg-[#d3d3d3] hover:bg-[#c0c0c0] font-semibold h-full text-black text-xl"
                                        >
                                            Göder
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}