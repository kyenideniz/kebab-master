"use client"

import { Button } from "@/components/ui/button"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Switcher() {
    const pathname = usePathname();
    const [ language, setLanguage ] = useState("EN");

    useEffect(() => {
        if ( pathname === "/en" ) {
            setLanguage("EN")
        } else if ( pathname === "/nl" ) {
            setLanguage("NL")
        } else if ( pathname === "/tr" ) {
            setLanguage("TR")
        }
        
      }, []);
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="border-0 lg:text-xl md:text-xl sm:text-lg xs:text-lg">{language}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-16">
                <div>
                    <Link href="/en" className="fi fi-gb-eng hover:brightness-75" ></Link>
                    <Link href="/nl" className="fi fi-nl hover:brightness-75" ></Link>
                    <Link href="/tr" className="fi fi-tr hover:brightness-75" ></Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}
