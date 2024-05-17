import { NavigationMenuDemo } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/Card"
import { CarouselSize } from "@/components/carousel"
import MovieList from "@/components/MovieList"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <CarouselSize />
      <MovieList />
    </div>
  )
}
