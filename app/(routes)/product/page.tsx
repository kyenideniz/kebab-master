import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
        <div className="p-2 w-full">
            <div className="lg:p-12 md:p-12 sm:p-2 xs:p-2 w-full items-center justify-center flex">
                <div className=" w-full lg:p-12 md:p-12 sm:p-2 xs:p-2">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        <div className="text-start">
                            <div className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-red-500 font-normal lg:p-8 md:p-8 sm:p-2 xs:p-2">
                                Features of Doner Robot
                            </div>
                            <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-2xl md:text-2xl sm:text-lg xs:text-lg">
                                <div> Hygienic and can slice without touching.</div>
                                <div> Easy to use without the need for experience.</div>
                                <div> Can operate 24 hours a day.</div>
                                <div> Can slice doner at the desired thickness, precisely and continuously.</div>
                                <div> Special meat slicing blade.</div>
                                <div> Homogeneous doner cooking thanks to heat shields.</div>
                                <div> Long-lasting radiant heaters and wires.</div>
                                <div> Low energy consumption.</div>
                                <div> Parts can be easily disassembled and cleaned.</div>
                                <div> Reduced personnel costs</div>
                                <div> Solving the problem of finding workers</div>
                            </div>
                        </div>
                        <div className="w-full items-center justify-center flex lg:p-8 md:p-8 sm:p-2 xs:p-2 xs:py-4 sm:py-4">
                            <Image 
                                src={"/product-page/1.png"} 
                                alt={"left"}            
                                width={500}
                                height={500}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        <div className="text-start">
                            <div className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-red-500 font-normal lg:p-8 md:p-8 sm:p-2 xs:p-2">
                                Advantages
                            </div>
                            <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-2xl md:text-2xl sm:text-lg xs:text-lg">
                                <div> Reduces overall operating costs.</div>
                                <div> Brings prestige to the business.</div>
                                <div> Adjustable motor speed.</div>
                                <div> Oil-isolated doner motor.</div>
                                <div> Forward and backward movement of the doner grill.</div>
                                <div> Increased quality</div>
                                <div> Consistent flavor</div>
                                <div> Reduced production costs</div>
                                <div> Enhanced competitiveness</div>
                                <div> Reduced workplace accidents</div>
                                <div> Time savings</div>
                            </div>
                        </div>
                        <div className="max-h-[450px] items-center justify-center flex lg:p-8 md:p-8 sm:p-2 xs:p-2 ">
                            
                            <Image 
                                src={"/product-page/2.jpg"} 
                                alt={"left"}            
                                width={500}
                                height={500}
                                className="max-h-[450px] "
                            />
                        </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 py-12">
                        <div className="text-start">
                            <div className="lg:text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-red-500 font-normal lg:p-8 md:p-8 sm:p-2 xs:p-2">
                                Advantages of Leasing
                            </div>
                            <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-2xl md:text-2xl sm:text-lg xs:text-lg">
                                <div> Fixed low fee</div>
                                <div> No down payment</div>
                                <div> No investment required</div>
                                <div> Approval within 4 hours</div>
                                <div> Optimal use of working capital</div>
                                <div> No high purchase costs</div>
                                <div> Economic risk borne by the leasing company</div>
                                <div> Possibility of ownership</div>
                            </div>
                        </div>
                        <div className="max-h-[400px] items-center justify-center flex lg:p-8 md:p-8 sm:p-2 xs:p-2 xs:py-4 sm:py-4 rounded">
                            <Image 
                                src={"/product-page/3.jpg"} 
                                alt={"left"}            
                                width={500}
                                height={500}
                                className="max-h-[400px] h-full rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        <div className="h-full w-full lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="lg:py-8 md:py-8 sm:py-2 xs:py-2 lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 225.000000 235.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,235.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M2476 4475 c7 -242 41 -315 146 -315 118 0 149 98 125 387 l-13 153 -132 0 -133 0 7 -225z"/> <path d="M3798 4556 c-136 -108 -438 -462 -438 -513 0 -68 74 -143 140 -143 57 0 490 440 510 519 27 105 -128 205 -212 137z"/> <path d="M1346 4376 c-140 -68 -99 -161 183 -422 260 -241 314 -261 397 -150 58 77 33 120 -198 342 -269 256 -295 272 -382 230z"/> <path d="M2566 3611 c-134 -42 -246 -138 -765 -659 -268 -270 -490 -489 -492 -487 -1 3 -14 121 -27 264 -34 359 -100 496 -269 561 -246 94 -502 -166 -583 -590 -18 -94 -80 -436 -138 -760 -89 -500 -113 -602 -158 -670 -206 -313 -170 -411 337 -908 l369 -362 136 0 136 0 -446 444 c-524 522 -522 519 -335 766 38 50 67 179 169 770 136 788 170 917 271 1036 185 216 269 111 321 -402 l33 -334 -82 -89 c-89 -97 -98 -123 -56 -180 65 -89 97 -63 819 658 698 697 784 769 916 771 78 0 183 -80 215 -166 57 -150 27 -196 -446 -674 -468 -473 -473 -480 -402 -551 66 -66 95 -52 263 124 l141 149 74 -81 c122 -135 100 -193 -175 -455 -202 -192 -226 -240 -148 -295 70 -49 86 -41 258 124 l162 154 68 -74 c121 -132 80 -234 -189 -473 -178 -157 -197 -188 -154 -253 50 -77 105 -60 265 84 l148 132 59 -56 c147 -141 90 -266 -306 -666 -289 -292 -408 -375 -617 -431 l-108 -29 280 -2 280 -1 325 335 c480 495 540 674 303 916 l-79 82 40 88 c69 152 40 267 -103 413 -76 78 -81 89 -60 136 61 132 27 271 -98 400 l-77 81 205 209 c241 246 300 351 301 530 0 314 -278 516 -581 421z"/> <path d="M3923 3361 c-207 -12 -250 -39 -239 -149 20 -195 816 -171 816 24 0 140 -76 156 -577 125z"/> <path d="M3311 2456 c-64 -92 -43 -131 194 -359 270 -259 378 -301 438 -168 38 83 4 135 -233 356 -253 236 -330 269 -399 171z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 font-bold items-center justify-center flex">Ease of Use</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Extremely simple to operate, doner robots enable staff to work faster and more effectively, making kitchen operations more efficient.</div>
                            </div>
                        </div>

                        <div className="h-full w-full  lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="lg:py-8 md:py-8 sm:py-2 xs:py-2 lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 277.000000 235.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,235.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M3120 4674 c-47 -24 -50 -36 -56 -207 -7 -244 -4 -247 267 -247 l209 0 0 -169 0 -169 -95 -13 c-1555 -214 -2252 -1994 -1248 -3187 830 -985 2432 -860 3112 244 157 254 298 744 204 708 -30 -12 -33 18 -33 319 0 286 4 330 30 320 143 -55 -109 592 -345 887 -296 370 -872 700 -1224 700 -51 0 -51 0 -51 180 l0 180 211 0 c262 0 259 -2 259 232 0 210 -10 227 -150 243 -100 11 -100 11 -66 -69 59 -138 10 -205 -150 -206 -53 0 -136 -48 -203 -118 -74 -78 -71 -79 -191 28 -75 67 -118 90 -166 90 -147 1 -158 12 -151 153 l7 127 -60 0 c-33 0 -82 -12 -110 -26z m920 -1144 c1161 -271 1650 -1695 900 -2618 -982 -1207 -2899 -511 -2888 1048 7 1050 967 1808 1988 1570z"/> <path d="M3578 3114 c-70 -53 -78 -107 -78 -503 0 -333 -5 -394 -31 -404 -56 -22 -129 -175 -129 -271 0 -250 309 -407 514 -260 167 118 172 417 10 520 l-54 34 6 370 c3 204 0 390 -6 416 -26 105 -153 159 -232 98z m136 -1037 c67 -64 65 -191 -4 -217 -131 -50 -203 87 -109 207 51 64 54 64 113 10z"/> <path d="M2090 3867 c-160 -85 -218 -198 -206 -398 14 -210 16 -210 232 7 107 107 246 229 309 272 63 43 115 85 115 93 0 55 -356 75 -450 26z"/> <path d="M4877 3880 c-101 -30 -97 -42 59 -159 85 -65 225 -190 310 -279 185 -194 165 -190 192 -36 61 349 -213 580 -561 474z"/> <path d="M433 2927 c-83 -82 -65 -187 41 -244 87 -46 931 -31 993 18 71 56 74 172 7 236 -45 42 -62 43 -518 43 l-471 0 -52 -53z"/> <path d="M28 2053 c-5 -15 -7 -80 -4 -145 l6 -118 618 -5 c613 -6 619 -5 665 38 62 58 62 156 1 214 -58 54 -1265 69 -1286 16z"/> <path d="M480 1147 c-99 -41 -117 -155 -40 -237 l47 -50 477 0 478 0 49 49 c83 83 39 248 -67 252 -353 13 -900 5 -944 -14z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 font-bold items-center justify-center flex">Speed and Efficiency</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Automatic doner robots enable restaurants to provide fast service. They are ideal for businesses that offer high-quality service in a short time.</div>
                            </div>
                        </div>

                        <div className="h-full w-full lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="lg:py-8 md:py-8 sm:py-2 xs:py-2 lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 267.000000 267.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,267.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M2361 5319 c-1107 -105 -2083 -986 -2310 -2086 -37 -179 -44 -915 -10 -1104 168 -953 963 -1802 1934 -2064 297 -80 1095 -81 1388 -1 2009 547 2662 3066 1173 4521 -571 558 -1330 814 -2175 734z m759 -168 c1724 -302 2624 -2270 1730 -3782 -1011 -1710 -3520 -1633 -4430 134 -956 1856 639 4010 2700 3648z"/> <path d="M2455 4140 c-644 -163 -884 -988 -427 -1465 524 -547 1438 -237 1523 517 66 586 -521 1093 -1096 948z m165 -137 c0 -28 -25 -42 -107 -61 -60 -13 -149 -50 -199 -82 -79 -49 -95 -53 -115 -28 -28 34 -33 28 73 94 155 96 348 139 348 77z m261 5 c93 -27 162 -61 266 -131 13 -9 11 -25 -6 -45 -23 -28 -32 -27 -88 13 -35 25 -121 64 -193 87 -212 69 -193 139 21 76z m63 -242 c243 -137 351 -418 256 -670 -201 -538 -964 -485 -1080 74 -96 463 409 828 824 596z m-849 -119 c-57 -91 -95 -195 -95 -260 0 -36 -11 -47 -48 -47 -45 0 -47 4 -30 77 44 199 148 381 192 338 26 -27 24 -39 -19 -108z m1254 -27 c25 -49 51 -117 59 -150 8 -33 19 -76 24 -95 8 -27 -1 -35 -41 -35 -40 0 -51 10 -51 47 0 65 -38 169 -95 260 -39 62 -43 81 -22 106 30 36 52 13 126 -133z m-1335 -520 c15 -60 51 -145 79 -187 45 -69 47 -81 21 -108 -44 -43 -158 156 -194 341 -27 135 58 93 94 -46z m1413 65 c-58 -241 -152 -409 -200 -360 -26 26 -23 40 30 124 33 52 66 132 74 178 17 104 22 113 71 113 32 0 37 -9 25 -55z m-297 -499 c-132 -102 -420 -184 -407 -115 5 24 37 44 97 60 102 26 251 98 271 131 9 15 24 11 46 -11 31 -31 30 -36 -7 -65z m-788 15 c59 -33 146 -66 193 -73 68 -10 85 -21 85 -53 0 -36 -9 -39 -85 -27 -153 25 -374 145 -347 189 20 33 33 30 154 -36z"/> <path d="M2607 3685 c-7 -30 -39 -77 -71 -105 -130 -111 -54 -360 111 -360 54 0 113 -47 113 -90 0 -88 -89 -108 -163 -37 -33 31 -67 47 -86 40 -51 -19 -37 -105 26 -157 31 -27 63 -73 71 -103 18 -72 118 -71 128 1 4 25 38 76 75 113 127 127 64 317 -115 346 -102 16 -142 85 -86 147 47 52 67 50 131 -11 62 -59 119 -48 119 23 0 28 -22 63 -58 90 -32 23 -63 68 -69 100 -17 82 -106 83 -126 3z"/> <path d="M889 2735 c-5 -14 -7 -372 -4 -795 l5 -770 340 0 340 0 6 137 6 136 104 -13 c57 -8 208 -48 334 -90 408 -135 750 -170 992 -104 175 49 1333 651 1397 727 117 138 39 378 -141 438 -97 32 -128 21 -552 -193 -416 -209 -396 -201 -396 -153 0 155 -141 225 -454 225 -310 1 -629 45 -785 108 -136 55 -305 92 -424 92 l-75 0 -6 135 -6 135 -335 5 c-258 5 -338 0 -346 -20z m571 -775 l0 -680 -230 0 -230 0 0 680 0 680 230 0 230 0 0 -680z m468 349 c45 -15 132 -45 192 -66 140 -51 430 -83 740 -83 275 0 340 -31 340 -160 0 -140 -60 -164 -416 -160 -384 4 -357 7 -372 -33 -29 -76 18 -87 371 -87 355 0 421 13 481 97 35 50 853 463 917 463 117 0 194 -134 132 -229 -28 -42 -1090 -609 -1292 -689 -181 -72 -650 -19 -1019 116 -88 32 -219 65 -291 73 l-131 14 0 400 0 400 133 -15 c74 -7 170 -26 215 -41z"/> <path d="M1179 2496 c-18 -335 6 -468 77 -423 29 18 34 54 34 229 l0 208 -55 6 c-35 4 -56 -3 -56 -20z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 text-4xl font-bold items-center justify-center flex">Cost Savings</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Doner robots reduce the need for human labor, with lowered costs. This saves on personnel costs and makes business processes more efficient.</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 py-8 ">
                        <div className="h-full w-full lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="py-8  lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 270.000000 256.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1108 2499 c-15 -8 -18 -25 -18 -112 l0 -103 -47 -12 c-26 -7 -84 -30 -129 -51 l-82 -39 -68 69 c-41 42 -76 69 -86 67 -25 -4 -358 -335 -358 -356 0 -10 31 -48 69 -86 l69 -68 -29 -58 c-39 -80 -69 -157 -69 -180 0 -19 -7 -20 -103 -20 -67 0 -107 -4 -115 -12 -17 -17 -17 -489 0 -506 8 -8 48 -12 113 -12 l101 0 12 -47 c7 -26 30 -84 51 -129 l39 -82 -69 -68 c-38 -38 -69 -76 -69 -85 0 -25 330 -359 355 -359 12 0 49 29 90 70 66 66 70 69 91 55 36 -23 191 -85 213 -85 20 0 21 -6 21 -103 0 -67 4 -107 12 -115 17 -17 489 -17 506 0 8 8 12 48 12 113 l0 101 50 13 c27 7 85 30 129 51 l78 38 69 -69 c38 -38 76 -69 85 -69 25 0 359 331 359 355 0 12 -29 49 -69 89 l-69 68 43 92 c24 50 47 108 50 129 l7 37 102 0 c66 0 106 4 114 12 9 9 12 79 12 253 0 174 -3 244 -12 253 -8 8 -48 12 -113 12 l-101 0 -12 47 c-7 26 -30 84 -51 129 l-39 82 69 68 c42 41 69 76 67 86 -4 25 -336 358 -356 358 -10 0 -48 -31 -86 -69 l-68 -69 -92 43 c-50 24 -108 47 -128 50 l-38 7 0 102 c0 66 -4 106 -12 114 -15 15 -474 16 -500 1z m432 -164 c0 -105 6 -115 79 -130 46 -10 186 -70 221 -95 15 -11 34 -20 42 -20 7 0 44 31 81 68 l67 68 133 -131 132 -130 -67 -70 c-38 -39 -68 -76 -68 -83 0 -7 11 -29 24 -50 30 -45 96 -204 96 -229 0 -10 7 -29 16 -41 14 -20 23 -22 110 -22 l94 0 0 -185 0 -185 -94 0 c-108 0 -110 -1 -132 -86 -8 -33 -38 -106 -66 -162 l-51 -104 70 -71 69 -72 -133 -131 -132 -130 -70 70 -70 69 -103 -51 c-57 -28 -130 -58 -163 -67 -33 -10 -66 -22 -72 -27 -9 -7 -13 -41 -13 -104 l0 -94 -185 0 -185 0 0 94 c0 63 -4 97 -12 103 -7 5 -44 20 -83 32 -38 12 -112 43 -163 68 l-93 47 -72 -70 -72 -70 -131 133 -130 132 69 69 70 70 -51 103 c-28 57 -58 131 -67 164 -10 33 -22 66 -27 72 -7 9 -41 13 -104 13 l-94 0 0 185 0 185 94 0 c87 0 96 2 110 22 9 12 16 31 16 41 0 25 66 184 96 229 13 21 24 43 24 50 0 7 -31 44 -68 83 l-68 70 133 130 133 130 67 -67 c37 -38 74 -68 81 -68 8 0 27 9 42 20 35 25 175 85 221 95 73 15 79 25 79 130 l0 95 185 0 185 0 0 -95z"/> <path d="M1237 2020 c-258 -44 -476 -219 -574 -460 -79 -197 -69 -409 28 -609 44 -89 63 -116 139 -191 75 -76 102 -95 191 -139 219 -107 442 -109 654 -7 200 97 335 258 397 473 18 61 23 104 23 198 0 185 -41 306 -153 453 -160 211 -446 325 -705 282z m266 -86 c245 -54 451 -260 502 -502 49 -229 -16 -452 -180 -618 -141 -142 -299 -202 -509 -191 -180 9 -302 63 -431 192 -133 132 -195 283 -195 470 0 429 392 742 813 649z"/> <path d="M1037 1713 c-4 -3 -7 -109 -7 -234 l0 -227 -35 -35 c-29 -29 -35 -42 -35 -77 0 -36 6 -48 35 -76 35 -32 35 -33 35 -118 0 -76 2 -86 21 -96 17 -9 25 -8 41 6 17 16 19 29 16 101 -3 76 -1 83 18 94 56 30 63 118 14 167 l-30 30 0 217 c0 130 -4 224 -10 236 -10 18 -50 26 -63 12z m57 -558 c8 -23 -4 -45 -25 -45 -22 0 -34 22 -25 45 3 8 14 15 25 15 10 0 21 -7 25 -15z"/> <path d="M1327 1714 c-4 -4 -7 -77 -7 -162 l0 -155 -35 -34 c-30 -29 -35 -41 -35 -80 0 -39 5 -50 35 -79 l36 -33 -2 -151 c-1 -151 5 -180 36 -180 31 0 37 29 36 180 l-2 151 36 33 c30 29 35 40 35 79 0 39 -5 51 -35 80 l-34 34 -3 159 -3 159 -25 3 c-14 2 -29 0 -33 -4z m47 -410 c18 -18 6 -54 -19 -54 -25 0 -37 36 -19 54 8 9 17 16 19 16 2 0 11 -7 19 -16z"/> <path d="M1615 1709 c-4 -6 -7 -47 -6 -90 2 -79 2 -80 -33 -113 -34 -31 -41 -53 -36 -100 3 -28 29 -64 51 -71 19 -6 20 -17 19 -237 -1 -190 1 -234 13 -245 12 -12 19 -13 36 -4 20 11 21 18 21 240 l0 229 35 35 c29 29 35 42 35 77 0 36 -6 48 -35 75 -33 32 -34 35 -37 121 -3 88 -3 89 -30 92 -14 2 -29 -2 -33 -9z m54 -263 c16 -20 3 -46 -24 -46 -13 0 -26 7 -29 16 -7 19 10 44 29 44 7 0 18 -6 24 -14z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 font-bold items-center justify-center flex">Customizability</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Doner robots can be programmed to different menus and customer demands enhance service quality and maximize customer satisfaction.</div>
                            </div>
                        </div>

                        <div className="h-full w-full lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="lg:py-8 md:py-8 sm:py-2 xs:py-2 lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 278.000000 280.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M887 2763 c-4 -3 -7 -42 -7 -85 0 -83 13 -105 45 -78 19 16 21 140 3 158 -13 13 -31 16 -41 5z"/> <path d="M352 2538 c-20 -20 -14 -31 42 -87 55 -54 79 -61 93 -25 4 10 -12 33 -48 70 -56 56 -67 62 -87 42z"/> <path d="M1377 2496 c-60 -58 -64 -65 -45 -84 22 -22 44 -12 93 44 37 44 46 60 38 72 -17 28 -28 24 -86 -32z"/> <path d="M795 2530 c-209 -42 -377 -200 -441 -415 -26 -87 -23 -230 6 -315 31 -93 74 -163 146 -240 62 -65 84 -102 84 -141 0 -16 -7 -19 -51 -19 -43 0 -55 -5 -80 -29 -40 -41 -41 -98 -1 -142 23 -26 38 -33 79 -36 51 -5 51 -5 57 -46 5 -32 18 -52 56 -89 28 -27 50 -53 50 -58 0 -6 9 -28 20 -49 28 -56 84 -98 149 -113 31 -6 65 -21 76 -32 11 -12 33 -31 49 -44 16 -12 26 -26 22 -30 -4 -4 -53 -7 -109 -7 -94 0 -107 3 -169 32 -148 70 -238 216 -238 383 0 25 -5 40 -16 44 -31 12 -409 7 -422 -6 -17 -17 -15 -133 3 -169 11 -20 33 -37 68 -53 51 -22 54 -26 91 -110 l39 -88 -20 -61 c-26 -78 -21 -94 61 -179 78 -80 105 -89 179 -58 l53 22 88 -38 c85 -37 89 -40 114 -92 31 -66 53 -82 115 -82 57 0 56 7 17 -117 -19 -59 -21 -75 -10 -88 11 -13 78 -15 535 -15 288 0 530 3 539 6 13 5 16 26 16 125 l0 119 223 2 222 3 3 89 3 90 -78 78 -78 79 83 -2 c47 -1 88 3 94 9 6 6 9 46 7 101 l-4 91 118 0 c93 0 119 3 123 14 3 8 -39 105 -94 214 l-100 200 10 53 c6 30 8 104 5 164 -24 503 -448 889 -947 862 -58 -4 -120 -11 -139 -16 -33 -10 -36 -8 -103 54 -136 125 -326 180 -503 145z m225 -61 c131 -30 271 -138 334 -258 114 -218 76 -437 -110 -626 -57 -58 -84 -110 -84 -164 0 -19 -6 -21 -55 -21 l-55 0 0 193 0 193 29 28 c48 46 74 120 68 188 -19 211 -267 299 -414 146 -44 -46 -63 -96 -63 -170 0 -69 26 -136 66 -167 24 -19 24 -20 24 -215 l0 -197 -52 3 -53 3 -6 40 c-7 56 -22 80 -99 161 -114 120 -157 236 -147 394 6 106 32 182 91 265 53 74 97 112 176 154 105 56 240 75 350 50z m766 -209 c149 -35 287 -112 394 -222 76 -77 110 -125 160 -226 74 -148 100 -298 80 -463 l-11 -98 89 -176 88 -175 -102 0 c-128 0 -129 -1 -122 -115 l6 -85 -108 0 c-102 0 -109 -1 -115 -21 -6 -18 10 -39 91 -120 96 -96 97 -98 99 -148 l2 -51 -221 -2 -221 -3 -3 -120 -3 -120 -481 2 c-265 2 -482 4 -484 5 -1 2 8 34 20 73 21 62 27 70 54 77 31 8 72 50 72 73 0 26 45 67 99 92 95 43 107 44 164 22 72 -29 107 -17 184 64 73 76 82 104 54 176 l-21 51 31 78 c35 88 58 117 105 132 57 19 74 51 74 140 0 62 -3 79 -16 84 -27 10 -394 7 -415 -4 -15 -9 -19 -22 -19 -64 0 -131 -75 -263 -194 -341 -26 -17 -27 -17 -74 26 -53 49 -60 59 -40 59 27 0 89 73 101 118 8 31 20 48 44 62 35 21 73 85 73 125 0 22 4 25 36 25 116 0 174 116 92 185 -23 19 -41 25 -79 25 -43 0 -49 3 -49 20 0 35 30 82 100 156 165 174 207 432 104 635 -14 28 -24 53 -21 55 2 2 35 8 73 13 88 12 207 5 310 -19z m-796 -120 c145 -74 115 -294 -46 -330 -111 -26 -214 60 -214 177 1 132 140 214 260 153z m-98 -398 c21 -2 51 1 68 6 l30 11 0 -180 0 -179 -85 0 -85 0 0 181 c0 169 1 181 18 173 9 -4 34 -9 54 -12z m416 -414 c15 -15 15 -51 0 -66 -9 -9 -111 -12 -399 -12 -339 0 -390 2 -403 16 -19 18 -21 45 -4 62 17 17 789 17 806 0z m-148 -155 c0 -10 -9 -32 -20 -50 -28 -47 -69 -55 -257 -51 l-163 3 -29 30 c-16 17 -32 42 -35 58 l-6 27 255 0 c236 0 255 -1 255 -17z m-717 -103 c16 -172 137 -323 316 -391 80 -31 213 -30 296 1 80 31 151 77 199 130 53 59 105 173 114 249 l7 62 163 2 163 2 -3 -45 c-3 -42 -6 -46 -45 -65 -64 -31 -88 -60 -122 -144 -44 -110 -46 -131 -22 -186 25 -56 23 -62 -54 -134 -41 -39 -60 -51 -73 -46 -96 41 -103 41 -224 -7 -83 -33 -112 -57 -143 -121 l-20 -42 -83 -3 c-92 -3 -107 3 -117 49 -11 50 -63 91 -163 127 -95 36 -124 36 -185 5 -34 -17 -48 -10 -110 56 -52 55 -54 62 -32 114 22 53 19 87 -16 174 -40 102 -59 126 -118 151 -27 12 -51 29 -55 38 -7 18 -8 69 -2 75 2 2 76 4 164 4 l160 0 5 -55z m607 -66 c0 -18 -45 -76 -69 -89 -63 -32 -125 -24 -172 24 -67 66 -60 71 101 71 77 0 140 -3 140 -6z"/> <path d="M1522 1983 l3 -28 80 0 c79 0 80 0 80 25 0 24 -2 25 -83 28 l-83 3 3 -28z"/> <path d="M124 1995 c-12 -31 15 -45 85 -45 74 0 95 9 89 36 -3 16 -14 19 -86 22 -67 2 -83 0 -88 -13z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 font-bold items-center justify-center flex">Innovation</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Doner robots are continuously updated and equipped with new features. This helps businesses maintain a competitive edge.</div>
                            </div>
                        </div>

                        <div className="h-full w-full lg:p-8 md:p-8 sm:p-2 xs:p-2">
                            <div className="shadow-lg shadow-black rounded-[40px] h-full w-full">
                                <div className="w-full items-center justify-center flex">
                                    <div className="lg:py-8 md:py-8 sm:py-2 xs:py-2 lg:max-w-[256px] md:max-w-[236px] sm:max-w-[192px] xs:max-w-[162px]">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="lg:w-[256px] md:w-[196px] sm:w-[150px] xs:w-[100px]" width="128.000000pt" height="128.000000pt" viewBox="0 0 282.000000 256.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M1210 4930 c-98 -34 -215 -160 -246 -266 -31 -102 -34 -3357 -4 -3466 31 -111 102 -203 201 -258 l89 -50 873 -6 872 -6 13 -94 c72 -538 748 -870 1257 -618 571 282 681 1037 214 1460 l-119 108 0 1103 0 1103 -511 510 -511 510 -1024 -1 c-826 -1 -1040 -6 -1104 -29z m2011 -584 c-4 -587 -64 -526 515 -526 l474 0 0 -810 c0 -446 -6 -810 -12 -810 -7 0 -38 38 -68 85 -31 47 -199 281 -374 520 -377 515 -360 506 -519 290 -58 -80 -179 -244 -268 -365 -90 -121 -235 -321 -324 -444 l-161 -224 -347 309 c-191 170 -359 309 -374 309 -29 0 -65 -29 -415 -342 l-238 -212 6 1251 c7 1371 3 1328 128 1390 59 29 172 32 1023 28 l957 -5 -3 -444z m528 -19 l340 -347 -350 0 -349 0 -1 350 c0 193 5 349 10 347 6 -2 164 -159 350 -350z m-329 -1323 c0 -15 91 -142 542 -757 205 -279 297 -448 245 -447 -10 0 -53 14 -97 29 -436 158 -1039 -212 -1106 -678 l-14 -96 -855 2 c-1055 3 -997 -16 -1024 327 l-13 155 314 5 c273 5 317 11 336 41 55 87 2 105 -335 111 l-313 5 0 98 0 98 321 287 c176 157 327 288 335 291 8 3 170 -134 361 -305 190 -170 362 -310 382 -310 24 0 87 69 174 188 673 926 747 1021 747 956z m659 -1336 c450 -133 658 -637 437 -1053 -273 -512 -1042 -490 -1297 37 -272 561 263 1194 860 1016z"/> <path d="M1820 4176 c-195 -100 -275 -345 -176 -535 248 -475 953 -121 720 362 -94 193 -348 274 -544 173z m300 -146 c86 -44 120 -106 120 -216 0 -252 -342 -330 -449 -102 -101 212 121 426 329 318z"/> <path d="M1944 1676 c-75 -75 -7 -136 149 -136 141 0 190 40 147 120 -25 47 -253 59 -296 16z"/> <path d="M3822 1432 c-40 -48 -20 -512 23 -540 82 -51 105 3 111 267 5 254 -6 301 -76 301 -19 0 -45 -13 -58 -28z"/> <path d="M3808 692 c-48 -125 39 -261 123 -191 35 29 38 162 5 195 -33 33 -115 30 -128 -4z"/> </g> </svg> 
                                    </div>
                                </div>
                                <div className="lg:p-8 md:p-8 sm:p-2 xs:p-2 lg:text-4xl md:text-4xl sm:text-3xl xs:text-3xl text-red-500 font-bold items-center justify-center flex">Minimal Error Rate</div>
                                <div className="lg:p-8 md:p-8 sm:px-6 xs:px-6 sm:pb-4 xs:pb-4 text-justify">Working within programmed parameters, doner robots minimize human error. This ensures consistent and successful results every time.</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 w-full h-full">
                        <Button className="bg-[#cf0a2c] w-full h-full text-lg text-white"><Link href={"/contact"}>Contact</Link></Button>
                    </div>
                </div>  
            </div>
        </div>
    )
}