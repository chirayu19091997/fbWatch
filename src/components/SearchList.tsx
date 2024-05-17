import useSearchStore from '@/context/search'
import React, { useEffect, useState } from 'react'
import { MovieCard } from './Card';
import { useSearchParams } from 'next/navigation';
import { fullSearch } from './search';

const SearchList = () => {
  const [results, setResults] = useState([]);
  const query = useSearchParams().get("query");

  const fetchResults = async (queryy:string) => {
    const res = await fullSearch(queryy);
    setResults(res);
  }
  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, [query])
  return (
    <div className='flex flex-col space-y-4 bg-gray-900 p-16 w-full h-full'>
      <p className='text-white'>Your Search Results for :- {query} </p>
      <div className='grid grid-cols-5 gap-2'>
        {results.map((movie: any) => (
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

export default SearchList