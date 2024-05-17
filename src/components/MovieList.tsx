import TMDB_Api_Service from '@/services/tmdbClient'
import React from 'react'
import { MovieCard } from './Card'

const MovieList = async () => {
    const movies = await TMDB_Api_Service.get("/trending/all/week");
  return (
    <div className='grid grid-cols-5 gap-4 p-16 bg-gray-900 w-full'>
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
  )
}

export default MovieList