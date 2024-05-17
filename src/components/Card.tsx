"use client"
import * as React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { StarFilledIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
interface propss {
  id: string
  name?: string
  description?: string
  imgPath?: string;
  genre?: string
  year?: string
  rating?: string
  type?: string
}
export function MovieCard({ id, imgPath, name, description, year, type, rating, genre }: propss) {
  const redirect_url = `https://vidsrc.to/embed/${type}/${id}`
  return (
    <Link href={`${type}/${id}`}>
      <HoverCard >
        <Card className="p-0 relative m-0 border-0 mb-1">
          <HoverCardContent className="h-full z-[999] border rounded-lg border-gray-600" side="right" sideOffset={3}>
            <div className="w-96 pb-0 bg-black bg-opacity-80 text-white pt-4 rounded-xl z-90 flex flex-col justify-between space-y-2">
              <div className="min-h-8 px-4">{name}</div>
              <div className="min-h-8 px-4 pb-2 text-sm text-gray-200">
                {description}
              </div>
              <div className="flex justify-between py-4 border-t px-4">
                <Badge variant={"outline"} className="text-white">{type?.toUpperCase()}</Badge>
                <Badge variant={"outline"} className="text-white">{year?.slice(0, 4)}</Badge>
                <Badge variant={"outline"} className="space-x-2 text-white"><StarFilledIcon /><p>{rating?.toString()?.slice(0, 3)}</p></Badge>
              </div>
              {/* <CardDescription>{description?.slice(0,200)}</CardDescription> */}
            </div>
          </HoverCardContent>
          <CardContent className="p-0 border-0">
            <HoverCardTrigger>
              <Image
                src={"https://image.tmdb.org/t/p/w500" + imgPath}
                width={500}
                height={500}
                alt="Movie"
                className="w-full rounded-sm overflow-hidden hover:ring-4 hover:ring-indigo-700"
              />
            </HoverCardTrigger>
          </CardContent>
          {/* <CardFooter className="flex justify-between">
        <Link href={redirect_url} target="_blank">
        <Button>Watch</Button>
        </Link>
      </CardFooter> */}
        </Card>
      </HoverCard>
    </Link>
  )
}
