"use client"
import { HomeCorousel } from "@/components/homeCorousel";
import { EmblaOptionsType } from 'embla-carousel'
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/ui/emblaCorousel/heightCorousel";
import { Input } from "@/components/ui/input";

import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  
  setTheme("dark");

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="p-2 w-full">
      <div className="p-12 w-full items-center justify-center flex">
        <div className="max-w-6xl grid grid-cols-5 grid-rows-2 w-full space-x-3 relative "> 
          <div className="h-[92px] w-[92px] bg-slate-300 col-start-1 col-span-1 row-start-1 left-0 top-0">
            <Image 
              src={"/banner/banner-left.png"} 
              alt={"left"}            
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>

          <div className=" col-span-3  col-start-2 row-start-1 row-span-2 absolute top-8 ">
            <div className="text-justify font-[600] pb-8 text-[36px] w-full text-4xl">
              Discover the benefits of
            </div>
            <div className=" text-justify font-[600] text-[36px] w-full text-4xl">
              KebabMaster Machines
            </div>
          </div>

          <div className="h-[92px] w-[92px] bg-slate-300 col-start-5 row-start-2 absolute right-0 bottom-0">
            <Image 
              src={"/banner/banner-right.png"} 
              alt={"left"}            
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>

          <div className="space-x-4 col-span-3 w-full col-start-2 row-start-2 row-span-1 absolute -bottom-4 grid grid-cols-12 ">
            <Input placeholder="Contact Address" className="col-span-10 w-full h-16 rounded-none text-xl shadow-lg border-0" />
            <Button className=" bg-[#cf0a2c] col-span-2 h-16 w-full text-lg rounded-none">Submit</Button>
          </div>
        </div>  
      </div>

      <div className="pt-24 flex items-center justify-center w-full">
        <HomeCorousel />
      </div>

      <div className="items-center justify-center flex">
        <div className="max-w-7xl w-full">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="border-t-[2px] py-6 text-3xl font-bold" >Learn more about our machines</AccordionTrigger>
            </AccordionItem>
          </Accordion>
        
          <div className=" w-full h-full grid grid-rows-2 px-6">
            <div className="row-start-1 grid grid-cols-3 ">
              <div className="w-full h-full border-r-[2px] p-4">
                <div className="aspect-square">
                  <div className="w-full h-full">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 180.000000 199.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,199.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M767 1729 c-261 -30 -488 -190 -602 -424 -59 -121 -79 -204 -79 -340 0 -136 20 -219 79 -340 120 -247 354 -403 643 -429 l72 -6 0 85 0 85 -30 0 -30 0 6 -56 7 -56 -59 7 c-113 14 -240 63 -329 126 -88 63 -85 56 -38 98 l42 38 -23 22 -23 22 -37 -42 c-42 -46 -35 -48 -95 36 -65 92 -112 214 -127 331 l-7 57 57 -5 56 -5 0 32 0 32 -56 -5 -57 -5 7 57 c15 117 62 239 127 331 60 84 53 82 95 36 l37 -42 23 22 23 22 -42 38 c-47 42 -50 35 38 98 89 63 216 112 329 126 l59 7 -7 -56 -6 -56 30 0 c30 0 30 0 30 56 l0 56 48 -7 c136 -19 248 -64 352 -140 l61 -46 -43 -38 -43 -39 24 -19 24 -20 36 40 35 39 29 -33 c70 -83 136 -227 151 -329 4 -25 10 -58 13 -74 l5 -29 -56 5 -56 5 0 -31 0 -31 81 0 82 0 -6 95 c-27 424 -421 749 -850 699z"/> <path d="M1045 1200 c-121 -121 -141 -137 -158 -128 -19 10 -57 7 -88 -6 -12 -5 -38 11 -89 54 -39 34 -72 60 -73 59 -1 -2 -10 -13 -20 -25 -17 -21 -16 -22 57 -79 72 -56 74 -59 69 -95 -15 -110 115 -171 192 -90 29 31 39 84 22 120 -6 12 29 52 131 153 l139 136 -21 20 -22 21 -139 -140z m-153 -197 c22 -20 23 -51 1 -75 -33 -37 -95 -13 -95 37 0 49 56 72 94 38z"/> <path d="M1081 822 c-50 -8 -85 -44 -105 -109 -7 -21 -4 -23 29 -23 29 0 37 5 46 27 13 34 26 43 65 43 54 0 80 -51 52 -103 -6 -12 -51 -75 -100 -139 -66 -88 -88 -125 -88 -148 l0 -30 135 0 135 0 0 33 0 32 -90 -3 c-49 -2 -90 -2 -90 1 0 3 36 54 80 113 92 123 109 165 92 222 -7 21 -21 47 -32 57 -21 19 -88 33 -129 27z"/> <path d="M1444 763 c-14 -32 -50 -111 -80 -175 -30 -64 -54 -130 -54 -146 l0 -30 106 6 106 5 -4 -42 c-3 -41 -3 -41 29 -41 32 0 33 1 33 41 0 36 2 40 20 34 17 -6 20 -2 20 30 0 29 -4 35 -17 33 -16 -3 -18 7 -21 70 l-3 72 -32 0 -32 0 3 -72 3 -73 -70 -1 c-39 0 -71 1 -71 1 0 1 17 37 39 81 21 43 53 113 71 154 18 41 36 79 41 84 17 18 9 26 -27 26 -33 0 -36 -3 -60 -57z m120 -310 c9 -22 -10 -41 -25 -26 -13 13 -5 43 10 43 5 0 12 -8 15 -17z"/> </g> </svg> 
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#cf0a2c]">24/7 Operation</div>
                <div className="py-4 text-xl">Achieve continuous, hygienic, and sterile operation 24/7 with our advanced machine. Perfect for maintaining top-quality standards without compromise.</div>
              </div>
              <div className="w-full h-full border-r-[2px] p-4">
                <div className="aspect-square">
                <div className="w-full h-full">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 217.000000 199.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,199.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1750 1781 c-41 -44 -109 -120 -150 -170 -41 -49 -78 -90 -81 -90 -4 -1 -49 42 -100 95 -115 118 -167 154 -225 154 -24 0 -55 -5 -71 -10 -15 -6 -82 -65 -149 -131 l-120 -120 -20 22 c-24 28 -110 91 -150 112 -70 36 -164 42 -164 11 0 -7 40 -78 89 -156 l89 -143 -213 -215 c-217 -218 -245 -255 -245 -322 0 -66 36 -110 317 -390 231 -229 285 -278 318 -287 93 -25 124 -10 255 121 61 60 112 109 114 107 1 -2 35 -57 75 -121 40 -65 82 -124 94 -133 55 -38 148 -4 166 61 14 49 4 72 -91 225 l-85 137 219 218 c121 121 226 232 235 248 20 38 20 114 0 152 -9 16 -59 72 -111 124 -53 52 -96 99 -95 105 0 5 45 48 101 95 239 203 258 227 238 301 -14 50 -57 79 -120 79 -43 0 -48 -3 -120 -79z m177 17 c15 -14 23 -33 23 -53 0 -29 -17 -47 -167 -180 -93 -82 -175 -154 -183 -162 -12 -11 1 -29 97 -126 66 -65 119 -128 128 -150 30 -72 18 -89 -223 -331 l-219 -218 -63 103 c-34 57 -64 106 -66 108 -2 2 -10 -2 -19 -9 -9 -7 -17 -11 -18 -9 -2 2 -13 21 -25 41 l-21 37 55 31 c30 17 57 37 60 45 11 27 -243 391 -357 512 l-42 45 114 114 c180 180 196 180 387 -9 l133 -132 42 50 c23 27 95 110 160 182 104 117 122 133 149 133 19 0 41 -9 55 -22z m-1240 -209 c121 -69 294 -262 460 -513 l93 -139 -60 -35 c-33 -20 -60 -41 -60 -47 0 -6 14 -33 30 -59 29 -46 30 -49 13 -62 -10 -7 -21 -14 -24 -14 -3 0 -84 127 -179 283 -95 155 -219 358 -276 450 -57 93 -104 171 -104 174 0 11 57 -10 107 -38z m47 -295 c3 -9 48 -84 100 -168 264 -428 265 -431 250 -439 -8 -4 -14 -12 -14 -17 0 -5 34 -64 75 -132 l74 -123 -113 -114 -114 -114 -56 -5 -56 -4 -163 159 c-89 88 -214 210 -278 272 -134 129 -166 177 -155 237 7 34 35 66 219 252 116 116 214 212 218 212 4 0 10 -7 13 -16z m553 -646 c28 -46 81 -132 118 -193 152 -246 156 -255 120 -295 -23 -25 -77 -26 -97 -2 -8 9 -72 111 -143 227 -70 116 -136 222 -146 237 -22 30 -24 48 -6 48 6 1 30 14 52 30 22 16 43 29 46 30 4 0 29 -37 56 -82z"/> <path d="M1852 1768 c-30 -30 1 -73 36 -51 23 14 25 29 7 47 -20 19 -27 20 -43 4z"/> <path d="M1444 236 c-8 -21 3 -36 27 -36 15 0 20 6 17 22 -4 27 -35 37 -44 14z"/> </g> </svg> 
                  </div>
                </div>
                <div className=" text-3xl font-bold text-[#cf0a2c]">Precision Cutting</div>
                <div className="py-4 text-xl">Experience the precision of our cutting-edge doner kebab machines. Each machine is crafted to deliver unparalleled slicing accuracy, ensuring every cut is perfect.</div>
              </div>
              <div className="w-full h-full  p-4">
                <div className="aspect-square">
                  
                <div className="w-full h-full">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 214.000000 212.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,212.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M848 1740 c-93 -16 -268 -87 -268 -110 0 -20 22 -20 53 -2 17 11 66 33 107 48 70 26 86 28 220 29 133 0 151 -2 220 -27 48 -18 78 -24 84 -18 14 14 0 24 -64 48 -103 37 -243 50 -352 32z"/> <path d="M1335 1658 c-15 -24 -93 -134 -172 -246 -80 -112 -143 -205 -141 -206 56 -41 70 -48 81 -37 9 9 6 16 -12 30 l-23 18 154 220 155 221 134 -95 c74 -52 173 -122 221 -155 l88 -61 -23 -31 c-13 -17 -81 -114 -152 -216 -71 -102 -130 -187 -132 -189 -2 -2 -14 2 -28 9 -49 26 -47 -14 3 -42 l30 -18 85 123 c47 67 126 178 175 247 49 69 89 125 88 126 0 1 -48 34 -106 74 -58 41 -165 116 -239 168 -74 52 -140 96 -146 98 -7 3 -24 -14 -40 -38z"/> <path d="M853 1535 c-74 -16 -153 -50 -153 -65 0 -19 27 -22 52 -7 69 45 247 61 344 32 31 -9 52 -11 58 -5 17 17 -6 29 -80 45 -84 18 -139 18 -221 0z"/> <path d="M1508 1461 c-11 -17 -14 -18 -34 -4 -32 20 -54 6 -102 -66 l-39 -59 -23 30 -22 30 -79 -114 c-87 -123 -104 -167 -95 -242 3 -32 1 -55 -7 -64 -9 -12 -7 -18 13 -31 13 -9 58 -40 99 -69 68 -49 75 -52 85 -35 14 25 57 64 97 88 41 24 269 339 269 371 0 12 -7 27 -15 34 -8 7 -15 25 -15 41 0 18 -8 34 -20 41 -11 7 -20 18 -20 25 0 39 -71 58 -92 24z m57 -21 c4 -6 -23 -51 -59 -100 -63 -86 -81 -127 -53 -118 6 3 38 41 70 86 53 74 87 101 87 71 0 -7 -32 -56 -71 -110 -62 -88 -75 -119 -50 -119 4 0 34 38 66 85 32 47 62 85 67 85 30 0 7 -45 -92 -184 -103 -143 -160 -206 -188 -206 -6 0 -21 -14 -35 -31 l-24 -30 -70 49 c-48 32 -69 53 -64 61 4 7 4 29 -2 49 -14 54 4 106 69 203 31 46 63 91 70 99 26 27 16 -40 -11 -76 -14 -18 -25 -40 -25 -48 0 -31 25 -15 60 36 79 118 133 188 146 188 23 0 16 -20 -32 -86 -40 -58 -48 -84 -25 -84 5 0 21 19 36 43 52 78 106 147 115 147 5 0 12 -5 15 -10z"/> <path d="M915 1343 c-77 -18 -95 -25 -95 -40 0 -12 6 -14 28 -8 15 4 64 9 110 12 57 3 82 9 82 18 0 20 -72 30 -125 18z"/> <path d="M312 1094 l3 -89 54 -5 c34 -4 58 -12 66 -23 15 -21 35 -22 35 -3 0 24 -29 45 -76 57 l-44 11 0 49 0 49 205 0 205 0 0 -30 c0 -27 -6 -34 -50 -54 -65 -30 -80 -44 -80 -72 0 -31 28 -32 39 0 6 15 28 31 65 46 l56 22 0 59 0 59 -224 0 c-123 0 -232 3 -241 6 -14 6 -15 -4 -13 -82z"/> <path d="M805 1161 c-3 -6 4 -15 15 -21 27 -14 25 -44 -2 -63 -22 -14 -22 -16 -4 -23 10 -4 26 -3 35 3 20 12 27 79 10 99 -13 16 -45 19 -54 5z"/> <path d="M715 1000 c-11 -17 31 -96 73 -138 40 -40 91 -62 145 -62 17 0 27 5 27 15 0 8 -8 15 -17 15 -75 0 -140 46 -179 125 -26 54 -37 64 -49 45z"/> <path d="M440 912 c0 -23 -11 -47 -34 -75 -47 -59 -84 -136 -107 -224 -23 -91 -44 -335 -34 -409 l6 -54 260 0 260 0 24 53 c30 65 41 149 26 204 -6 22 -33 69 -59 103 -82 108 -79 97 -53 182 25 85 21 106 -28 152 -22 21 -31 39 -31 62 0 31 -2 32 -49 39 -26 3 -78 5 -114 3 l-67 -3 0 -33z m190 -17 c0 -12 -16 -15 -80 -15 -64 0 -80 3 -80 15 0 12 16 15 80 15 64 0 80 -3 80 -15z m54 -80 c30 -28 34 -64 11 -118 -29 -70 -20 -108 45 -187 62 -75 73 -104 68 -184 -2 -39 -12 -88 -21 -108 l-16 -38 -237 0 -237 0 6 162 c8 223 41 353 116 456 l31 42 104 0 c96 0 105 -2 130 -25z"/> <path d="M1682 903 c-5 -10 -12 -30 -16 -44 -4 -21 -14 -29 -43 -36 -52 -12 -55 -38 -6 -50 33 -7 40 -14 53 -51 18 -52 41 -52 53 0 7 31 15 39 45 49 21 6 41 15 45 19 10 9 -10 25 -47 37 -23 7 -33 19 -44 51 -15 45 -26 52 -40 25z m47 -93 c6 0 11 -4 11 -10 0 -5 -6 -10 -14 -10 -8 0 -18 -10 -22 -22 l-7 -23 -8 23 c-5 12 -16 22 -25 22 -14 0 -13 4 7 23 19 19 26 21 35 10 6 -7 16 -13 23 -13z"/> <path d="M1067 763 c-2 -4 -10 -24 -16 -45 -10 -30 -18 -38 -49 -45 -47 -11 -48 -34 -2 -49 36 -12 43 -20 60 -66 5 -16 14 -28 20 -28 6 0 15 12 20 28 17 46 24 54 60 66 46 15 44 37 -4 50 -34 10 -41 17 -50 50 -11 38 -29 56 -39 39z m23 -88 c0 -8 7 -15 15 -15 20 0 19 -6 -5 -30 -20 -20 -20 -20 -40 0 -24 24 -25 30 -5 30 8 0 15 7 15 15 0 8 5 15 10 15 6 0 10 -7 10 -15z"/> <path d="M1437 613 c-2 -4 -14 -38 -26 -74 l-21 -65 -70 -23 c-102 -32 -101 -44 6 -75 60 -18 61 -19 79 -70 37 -103 35 -100 48 -87 7 6 21 40 33 74 l21 62 71 23 c40 13 72 29 72 35 0 7 -32 24 -72 37 l-71 25 -21 62 c-21 63 -40 92 -49 76z m23 -95 c0 -44 23 -71 75 -88 l50 -17 -45 -13 c-58 -15 -68 -25 -76 -66 -9 -51 -21 -50 -36 2 -12 44 -16 48 -62 61 -26 8 -46 16 -44 19 3 2 25 10 49 17 40 12 45 16 57 60 14 49 32 63 32 25z"/> </g> </svg> 
                </div>

                </div>
                <div className=" text-3xl font-bold text-[#cf0a2c]">Easy Cleaning</div>
                <div className="py-4 text-xl">Crafted from durable stainless steel, our machine ensures easy cleaning and maintenance. Enjoy hygienic operations effortlessly with a sleek, modern design that meets all sanitation standards.</div>
              </div>
            </div>

            <div className="row-start-2 grid grid-cols-3 border-t-[2px]">
              <div className="w-full h-full border-r-[2px] p-4">
                <div className="aspect-square">
                  <div className="w-full h-full">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 143.000000 208.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,208.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M1728 3878 c-114 -33 -109 57 -109 -1801 l0 -1727 43 -35 c65 -53 912 -44 946 10 58 92 9 105 -425 110 l-403 6 0 122 0 123 267 -11 c293 -11 333 -1 333 84 0 76 -19 81 -332 81 l-268 0 0 99 0 100 295 5 295 6 0 70 0 70 -295 6 -295 5 0 110 0 109 387 0 c349 0 390 4 420 37 98 108 30 128 -417 124 l-390 -3 0 111 0 111 268 0 c313 0 332 5 332 81 0 92 -49 105 -343 89 l-257 -14 0 102 0 102 268 0 c310 0 332 5 332 78 0 94 -27 102 -324 102 l-276 0 0 105 0 105 398 -7 c388 -7 399 -6 421 35 59 110 19 122 -421 122 l-400 0 6 102 6 103 264 -4 c302 -3 385 29 320 125 -28 42 -43 44 -312 42 l-282 -1 0 119 0 119 271 -9 c302 -10 337 0 326 95 l-7 59 -296 6 -296 5 6 131 6 131 387 -2 c412 -3 443 4 443 92 0 33 -16 54 -51 67 -64 25 -756 23 -841 -2z"/> <path d="M364 3637 c-296 -281 -317 -318 -220 -386 65 -45 64 -46 246 129 92 88 170 160 174 160 8 0 -1 -2884 -10 -2892 -3 -4 -68 56 -145 133 -169 171 -289 192 -289 52 0 -55 29 -91 213 -263 355 -333 357 -333 644 -35 256 266 273 289 244 343 -58 109 -132 82 -303 -113 -70 -80 -134 -145 -142 -145 -9 0 -16 659 -15 1465 l0 1465 145 -154 c149 -159 174 -174 248 -149 120 41 88 105 -189 378 -299 294 -305 294 -601 12z"/> </g> </svg> 
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#cf0a2c]">Adjustable Cuts</div>
                <div className="py-4 text-xl">Our machine features programmable cutting angles and durations, offering precise control over every slice. Customize your settings for optimal results and consistency with ease.</div>
              </div>
              <div className="w-full h-full border-r-[2px] p-4">
                <div className="aspect-square">
                  <div className="w-full h-full">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 217.000000 222.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,222.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M1172 3978 c-437 -177 -819 -582 -846 -897 l-10 -111 404 -426 404 -426 -405 -411 -404 -410 10 -139 c22 -316 376 -749 767 -940 210 -102 170 -125 698 391 l440 430 440 -437 c515 -511 469 -485 678 -383 418 205 743 613 767 964 l11 158 -398 398 -398 398 277 286 c443 459 513 545 513 633 -1 304 -339 687 -791 896 -259 120 -236 131 -704 -337 l-405 -405 -405 405 c-453 453 -440 445 -643 363z m593 -433 l395 -395 -486 -486 -487 -486 -290 306 c-160 168 -337 356 -395 416 -121 129 -125 180 -30 376 125 258 651 660 868 664 17 0 208 -178 425 -395z m1588 295 c355 -174 687 -545 687 -769 0 -93 -1172 -1313 -2296 -2390 l-467 -447 -81 27 c-317 105 -764 613 -792 901 l-9 100 1337 1339 c895 897 1350 1339 1378 1339 22 0 132 -45 243 -100z m682 -2662 c-26 -276 -326 -664 -665 -858 -203 -116 -166 -136 -644 344 l-423 426 483 495 484 494 388 -389 388 -390 -11 -122z"/> <path d="M1267 3689 c-15 -38 21 -79 51 -60 33 20 26 91 -9 91 -16 0 -36 -14 -42 -31z"/> <path d="M1467 3489 c-17 -44 25 -85 56 -54 25 25 9 85 -23 85 -12 0 -27 -14 -33 -31z"/> <path d="M1023 3467 c9 -44 87 -50 87 -7 0 17 -21 33 -47 37 -36 5 -45 -2 -40 -30z"/> <path d="M1667 3309 c-17 -44 25 -85 56 -54 25 25 9 85 -23 85 -12 0 -27 -14 -33 -31z"/> <path d="M793 3271 c-15 -39 42 -84 71 -55 27 27 6 84 -31 84 -16 0 -34 -13 -40 -29z"/> <path d="M1220 3260 c0 -27 13 -40 40 -40 27 0 40 13 40 40 0 27 -13 40 -40 40 -27 0 -40 -13 -40 -40z"/> <path d="M1420 3080 c0 -27 13 -40 40 -40 27 0 40 13 40 40 0 27 -13 40 -40 40 -27 0 -40 -13 -40 -40z"/> <path d="M988 3071 c-14 -36 6 -71 41 -71 37 0 53 50 25 78 -30 30 -53 28 -66 -7z"/> <path d="M560 3040 c0 -27 13 -40 40 -40 27 0 40 13 40 40 0 27 -13 40 -40 40 -27 0 -40 -13 -40 -40z"/> <path d="M1188 2891 c-14 -37 6 -71 42 -71 37 0 53 29 38 68 -15 40 -66 42 -80 3z"/> <path d="M747 2849 c-15 -38 25 -71 67 -55 38 15 24 74 -19 82 -19 4 -41 -8 -48 -27z"/> <path d="M949 2678 c-8 -12 -1 -34 14 -49 34 -35 88 -5 71 39 -15 37 -65 43 -85 10z"/> <path d="M3104 3675 c3 -25 20 -45 36 -45 17 0 33 20 36 45 5 35 -3 45 -36 45 -33 0 -41 -10 -36 -45z"/> <path d="M2908 3491 c-14 -36 6 -71 41 -71 37 0 53 50 25 78 -30 30 -53 28 -66 -7z"/> <path d="M3329 3478 c-19 -30 22 -66 60 -51 17 6 31 26 31 42 0 35 -71 42 -91 9z"/> <path d="M2707 3309 c-17 -44 25 -85 56 -54 25 25 9 85 -23 85 -12 0 -27 -14 -33 -31z"/> <path d="M3140 3262 c0 -38 46 -70 68 -47 29 28 10 85 -28 85 -26 0 -40 -13 -40 -38z"/> <path d="M3571 3282 c-17 -27 9 -82 39 -82 30 0 56 55 39 82 -6 10 -24 18 -39 18 -15 0 -33 -8 -39 -18z"/> <path d="M2940 3080 c0 -27 13 -40 40 -40 27 0 40 13 40 40 0 27 -13 40 -40 40 -27 0 -40 -13 -40 -40z"/> <path d="M3384 3075 c-30 -36 3 -84 45 -68 36 14 35 75 -1 87 -12 4 -32 -5 -44 -19z"/> <path d="M3800 3040 c0 -47 70 -56 86 -12 14 35 -2 52 -49 52 -24 0 -37 -15 -37 -40z"/> <path d="M2060 2748 c-159 -171 -418 -433 -575 -582 -157 -149 -285 -279 -285 -289 0 -19 174 -207 542 -584 183 -189 217 -215 250 -197 96 53 1168 1173 1168 1221 0 11 -25 39 -55 63 -30 24 -149 135 -265 247 -311 301 -455 433 -474 433 -9 0 -146 -140 -306 -312z m880 -568 c-60 -71 -303 -326 -540 -566 l-430 -437 -324 337 c-179 185 -325 345 -325 356 -1 12 114 130 254 262 140 133 376 373 524 533 l269 292 341 -324 342 -323 -111 -130z"/> <path d="M3184 2895 c-30 -36 3 -84 45 -68 36 14 35 75 -1 87 -12 4 -32 -5 -44 -19z"/> <path d="M3607 2849 c-15 -38 25 -71 67 -55 38 15 24 74 -19 82 -19 4 -41 -8 -48 -27z"/> <path d="M3406 2668 c-17 -44 37 -74 71 -39 15 15 22 37 14 49 -20 33 -70 27 -85 -10z"/> <path d="M1014 1627 c-31 -31 -13 -87 27 -87 32 0 40 11 35 43 -6 46 -38 68 -62 44z"/> <path d="M809 1398 c-25 -39 40 -86 69 -50 14 17 20 40 13 51 -17 27 -65 27 -82 -1z"/> <path d="M1233 1391 c-15 -39 42 -84 71 -55 27 27 6 84 -31 84 -16 0 -34 -13 -40 -29z"/> <path d="M606 1208 c-17 -44 37 -74 71 -39 15 15 22 37 14 49 -20 33 -70 27 -85 -10z"/> <path d="M1061 1201 c-33 -21 -13 -81 26 -81 16 0 34 13 40 29 14 37 -31 73 -66 52z"/> <path d="M1470 1180 c-18 -30 7 -60 51 -60 26 0 39 14 39 40 0 42 -67 57 -90 20z"/> <path d="M854 1027 c-31 -31 -13 -87 27 -87 32 0 40 11 35 43 -6 46 -38 68 -62 44z"/> <path d="M1283 957 c4 -26 21 -47 37 -47 43 0 37 78 -7 87 -28 5 -35 -4 -30 -40z"/> <path d="M1707 970 c-7 -18 -3 -42 9 -54 30 -30 88 -3 80 39 -9 46 -73 57 -89 15z"/> <path d="M1080 781 c0 -21 7 -43 16 -48 28 -18 70 22 58 55 -18 45 -74 40 -74 -7z"/> <path d="M1532 785 c-29 -28 -10 -85 28 -85 26 0 40 13 40 38 0 38 -46 70 -68 47z"/> <path d="M1318 588 c-17 -21 -18 -36 -2 -52 27 -27 84 -6 84 31 0 42 -53 55 -82 21z"/> <path d="M3374 1627 c-31 -31 -13 -87 27 -87 32 0 40 11 35 43 -6 46 -38 68 -62 44z"/> <path d="M3127 1389 c-7 -18 -2 -42 9 -53 29 -29 86 16 71 55 -15 39 -65 37 -80 -2z"/> <path d="M3549 1398 c-8 -12 -1 -34 14 -49 34 -35 88 -5 71 39 -15 37 -65 43 -85 10z"/> <path d="M3760 1203 c0 -47 17 -63 52 -49 44 16 35 86 -12 86 -25 0 -40 -13 -40 -37z"/> <path d="M3334 1207 c-30 -29 -14 -90 21 -83 19 4 35 24 35 45 0 39 -33 62 -56 38z"/> <path d="M2890 1179 c-8 -12 -5 -32 6 -43 27 -27 90 -4 79 29 -11 33 -68 43 -85 14z"/> <path d="M3534 1027 c-31 -31 -13 -87 27 -87 32 0 40 11 35 43 -6 46 -38 68 -62 44z"/> <path d="M2654 974 c-5 -15 -3 -39 6 -54 22 -36 84 -8 76 35 -8 43 -67 57 -82 19z"/> <path d="M3087 969 c-15 -38 21 -79 51 -60 33 20 26 91 -9 91 -16 0 -36 -14 -42 -31z"/> <path d="M3286 788 c-15 -40 34 -73 67 -45 30 25 13 77 -26 77 -15 0 -34 -14 -41 -32z"/> <path d="M2861 781 c-33 -21 -13 -81 26 -81 16 0 34 13 40 29 14 37 -31 73 -66 52z"/> <path d="M3062 601 c-34 -21 -15 -81 26 -81 44 0 61 40 29 71 -17 17 -37 21 -55 10z"/> </g> </svg> 
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#cf0a2c]">Kitchen Security</div>
                <div className="py-4 text-xl">Ensuring a safe working environment, our machine includes an emergency stop button for added peace of mind. Prioritize safety without compromising efficiency.</div>
              </div>
                <div className="w-full h-full p-4">
                  <div className="aspect-square">
                    <div className="w-full h-full">
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="144.000000pt" height="144.000000pt" viewBox="0 0 224.000000 212.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,212.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M2348 3961 c-984 -154 -1440 -1283 -839 -2076 640 -845 2008 -562 2272 470 226 882 -545 1745 -1433 1606z m568 -213 c793 -298 1009 -1291 410 -1882 -642 -631 -1733 -295 -1916 590 -176 856 690 1599 1506 1292z"/> <path d="M2360 3075 l-467 -545 279 -10 c168 -6 277 -18 275 -30 -3 -27 -163 -537 -202 -645 -17 -47 -26 -91 -20 -96 10 -10 935 1058 935 1080 0 6 -127 11 -282 11 -235 0 -280 5 -271 28 41 109 235 737 228 743 -4 5 -218 -237 -475 -536z"/> <path d="M1090 1390 c-99 -16 -310 -47 -470 -69 -395 -54 -400 -59 -400 -413 0 -363 25 -393 278 -329 344 88 671 54 1043 -110 572 -251 721 -279 912 -171 43 23 163 84 267 133 386 185 443 218 585 339 180 154 490 389 573 434 62 34 77 81 43 135 -29 46 -231 32 -388 -27 -84 -32 -155 -47 -190 -40 -70 14 -197 -19 -363 -97 l-130 -61 93 -27 c233 -70 213 -310 -30 -369 -124 -29 -875 -31 -1023 -2 -84 16 -52 20 210 22 580 5 901 50 933 132 44 115 -150 201 -523 231 -370 31 -445 52 -551 158 -149 149 -459 195 -869 131z"/> </g> </svg> 
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#cf0a2c]">Energy Efficiency</div>
                  <div className="py-4 text-xl">Achieve cost savings with our machine's low energy consumption, designed for efficiency without compromising performance. Optimize your operations while reducing overheads effortlessly.</div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center justify-center flex">
        <div className="max-w-7xl w-full">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="border-t-[2px] py-6 text-3xl font-bold" >Learn more about our machines</AccordionTrigger>
            </AccordionItem>
          </Accordion>
          <div className="py-8">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>

      <div className="items-center justify-center flex">
        <div className="max-w-7xl w-full border-t-[2px]">
          <div className="p-6 pt-12 grid grid-cols-2 ">
            <div className="p-4 py-8">
              <div className="py-6 text-4xl font-bold leading-normal">Reach out easily!</div>
              <div className="py-6 text-2xl line- text-justify">Experience top-notch machine solutions with KebabMaster. Browse a variety of options for your business needs.</div>
              <div className="py-6">
                <Button className=" bg-[#cf0a2c] h-16 w-1/3 text-xl rounded-none">Contact</Button>
              </div>
            </div>
           
            <div className="relative w-full aspect-square items-center justify-center flex">
              <Image 
                src={"/banner/banner-right.png"} 
                alt={"left"}            
                width={1080}
                height={1080}
                className="max-h-[190px] max-w-[190px] absolute top-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
