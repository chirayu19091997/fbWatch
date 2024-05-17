import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TMDB_Api_Service from "@/services/tmdbClient";
import Image from "next/image";
import Link from "next/link";

export async function CarouselSize() {
  const movies = await TMDB_Api_Service.get("/movie/popular");
  return (
    <div className="w-full flex justify-center items-center bg-gray-900">
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-[90%] mt-4"
    >
      <CarouselContent>
        {movies.data.results.map((movie:any, index:number) => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/4 h-full m-0">
            <Link href={`/movie/${movie.id}`} className="m-0 p-0 overflow-hidden h-full">
                <Image
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                width={70}
                height={20}
                alt="Movie"
                className="w-full h-full rounded-b-lg border border-gray-800 rounded-lg"
                />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
