"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCorousel() {
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
        <Carousel setApi={setApi} className="w-full max-w-4xl aspect-square" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square w-full items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-10 bg-red-500 w-12 text-white hover:bg-red-500 hover:text-white"/>
          <CarouselNext className="h-10 bg-red-500 w-12 text-white hover:bg-red-500 hover:text-white" />
        </Carousel>
      </div>
      <div className="py-10 text-lg text-muted-foreground items-center justify-center flex">
        Slide {current} of {count}
      </div>
  </div>
  )
}