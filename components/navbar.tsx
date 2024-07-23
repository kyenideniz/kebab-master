"use client"

import { cn } from '@/lib/utils';
import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
import React from 'react'


export function Navbar({ className, ...props } : React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [{
        href: `/`,
        label: 'Home',
        active: pathname === `/`
    },{
        href: `/product`,
        label: 'Product',
        active: pathname === `/product`
    },{
        href: `/contact`,
        label: 'Contact',
        active: pathname === `/contact`
    },];

  return (
        <div className='border-b'>
            <div className='flex items-center h-16 px-2'>
                <div className='items-start justify-start flex w-full'>
                    <Link href="/" className='text-4xl font-bold'> 
                        KebabMaster
                    </Link>
                </div>
                <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
                    {routes.map((route, index) => (
                        <Link key={index} href={route.href} className={cn("text-lg font-medium transition-colors hover:text-primary", route.active ? "text-black border-b border-red-500 dark:text-white" : "text-muted-foreground")}>
                            {route.label}
                        </Link>
                    ))} 
                </nav>
            </div>
        </div>
  )
}
