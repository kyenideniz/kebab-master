"use client"

import { cn } from '@/lib/utils';
import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
import React from 'react'
import { Switcher } from '@/components/languageSwitch';


export function Navbar({ className, ...props } : React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [{
        href: `/tr`,
        label: 'Anasayfa',
        active: pathname === `/tr`
    },{
        href: `/tr/product`,
        label: 'Ürün',
        active: pathname === `/tr/product`
    },{
        href: `/tr/contact`,
        label: 'İletişim',
        active: pathname === `/tr/contact`
    },];

  return (
        <div className='border-b'>
            <div className='flex items-center lg:h-20 md:h-20 sm:h-16 xs:h-16 px-2'>
                <div className='items-start justify-start flex w-full'>
                    <Link href="/tr" className='lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-bold'> 
                        DonerRobot
                    </Link>
                </div>
                <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
                    {routes.map((route, index) => (
                        <Link key={index} href={route.href} className={cn("lg:text-xl md:text-xl sm:text-lg xs:text-lg font-medium transition-colors hover:text-primary", route.active ? "text-black border-b border-red-500 dark:text-white" : "text-muted-foreground")}>
                            {route.label}
                        </Link>
                    ))} 
                </nav>
                <div className='px-2'>
                    <Switcher />
                </div>
            </div>
        </div>
  )
}