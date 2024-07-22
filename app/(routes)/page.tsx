import { HomeCorousel } from "@/components/homeCorousel";
import { EmblaOptionsType } from 'embla-carousel'
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/ui/emblaCorousel/heightCorousel";
import { Input } from "@/components/ui/input";

export default function Home() {
  
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="p-2 ">
      <div className="p-12">
        <div className="pt-24 grid grid-cols-5 grid-rows-3 w-full min-h-[300px] space-x-3 items-center justify-center"> 
          <div className="h-[92px] w-[92px] bg-slate-300 col-start-1 col-span-1 row-start-1">Img1</div>
          <div className="h-full col-span-3 w-full col-start-2 row-start-1 row-span-5 text-4xl">
            Discover the benefits of KebabMaster Machines
          </div>
            <div className="h-[92px] w-[92px] bg-slate-300 col-start-5 row-start-3">Img 2</div>
         
              <Input placeholder="text" className="w-full border col-span-2 col-start-2 row-start-3" />
              <Button className="bg-red-500 col-span-1 row-start-3 col-start-4">Submit</Button>
       
        </div>  
      </div>

      <div className="pt-24 flex items-center justify-center w-full">
        <HomeCorousel />
      </div>
      <div className="pt-12 w-full h-full grid grid-rows-2 px-6">
        <div className="row-start-1 grid grid-cols-3 border-t">
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
        </div>

        <div className="row-start-2 grid grid-cols-3 border-t">
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
            <div className="w-full bg-red-400 h-full border-r">
              <div className="h-[180px] w-[180px]">Logo</div>
              <div className="py-8 bg-green-500">24/7</div>
              <div className="py-4 bg-blue-500">Lorem ipsu</div>
            </div>
        </div>
      </div>
      <div className="p-6 pt-12">Product gallery slider</div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="p-6 pt-12 grid grid-cols-2">
        <div className="grid gridrows-3 p-4 py-8">
          <div className="py-8">Reach out easily!</div>
          <div className="py-8">Experience top-notch machine solutions with KebabMaster. Browse a variety of options for your business needs.</div>
          <div className="py-8">
            <Button className="bg-red-500">Contact</Button>
          </div>
        </div>
        <div>
        <div className="items-center justify-center max-h-[190px] aspect-square bg-gray-400">
          12
        </div>
        </div>
      </div>
    </div>
  );
}
