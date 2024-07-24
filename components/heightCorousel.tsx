
"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeightCorousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full">
      <div className="w-full items-center justify-center flex">
        <Carousel setApi={setApi} className="w-full lg:max-w-3xl md:max-w-2xl sm:max-w-lg xs:max-w-sm aspect-square" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="flex aspect-square w-full items-center justify-center p-6">
                  <Image 
                    src={`/product-gallery/${index+1}.jpg`}
                    alt={"left"}            
                    width={1080}
                    height={1080}
                    className="w-full h-full absolute top-8"
                  />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        
        </Carousel>
      </div>
  </div>
  )
}
