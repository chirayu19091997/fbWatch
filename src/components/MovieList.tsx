import TMDB_Api_Service from '@/services/tmdbClient'
import React from 'react'
import { MovieCard } from './Card'

const MovieList = async () => {
    const movies = await TMDB_Api_Service.get("/trending/all/week");
  return (
    <div>
        <h1 className='text-white text-2xl p-4 md:p-8 font-semibold'>Trending Now</h1>
    <div className='grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-2 px-3 md:px-8 bg-gray-900 w-full'>
        {movies.data.results.map((movie: any) => (
            <MovieCard
            key={movie.id} 
            name={movie.title || movie.name} 
            year={movie.release_date || movie.first_air_date}
            genre={movie.genres?.map((genre: any) => genre.name).join(", ")}
            rating={movie.vote_average}
            description={movie.overview} 
            imgPath={movie.poster_path}
            id={movie.id}
            type={movie.media_type}
            />
        ))}
    </div>
    </div>
  )
}

export default MovieList