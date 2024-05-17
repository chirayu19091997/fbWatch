import { Badge } from '@/components/ui/badge';
import TMDB_Api_Service from '@/services/tmdbClient'
import { StarFilledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { title } from 'process';
import React from 'react';
import moment from 'moment';
import { IoTimeOutline } from "react-icons/io5";
import { FaRegThumbsUp } from 'react-icons/fa';
import Link from 'next/link';

const Property = ({ name, value }: { name: string; value: string }) => (
    <div className="flex items-center text-xs md:text-sm px-4">
        <div className="text-gray-400 w-28">{name} :</div>
        <div className="text-gray-50 w-full">{value}</div>
    </div>
);
const BagdeWithIcon = ({ icon, value }: { icon: any; value: string }) => (
    <div>
        <div className='p-1 px-3 rounded-full space-x-2 text-sm text-white border border-gray-700 flex justify-center items-center'>
            <span>{icon}</span>
            <p>{value}</p>
        </div>
    </div>
)
function createArrayOfArrays(count: number) {
    // Create the array from 1 to 10
    const innerArray = Array.from({ length: 10 }, (_, i) => i + 1);

    // Create an array with `count` elements, each being a copy of the innerArray
    const resultArray = Array.from({ length: count }, () => [...innerArray]);

    return resultArray;
}
const VideoDetails = async ({ type, id, currSeason, currEpisode }: { type: string, id: string, currSeason?: string, currEpisode?: string }) => {
    const res = await TMDB_Api_Service.get(`/${type}/${id}`);
    const movie = res.data;
    const { poster_path, seasons, title, overview, release_date, first_air_date, genres, vote_average, tagline, status, runtime, episode_run_time, revenue, popularity, adult, homepage, production_countries, production_companies } = movie;
    console.log(`https://vidsrc.to/embed/${type}/${id}` + type == "tv" ? `/${currSeason || 1}/${currEpisode || 1}` : "")
    return (
        <div className='bg-gray-900 p-3 md:p-6 flex flex-col space-y-16 text-white'>
            <div className='flex space-x-4'>
                {type == "tv" && (
                    
                
                <div className='flex flex-col space-y-2 w-1/3 max-h-[80vh] overflow-y-auto pr-2'>
                    {seasons.map((season: any,si:number) => (
                        <div key={season.id} className='flex flex-col'>
                            <div className='text-white text-lg font-bold text-center w-full'>{season.name}</div>
                            <div className='grid grid-cols-5 gap-2 mt-2'>
                                {createArrayOfArrays(season.episode_count).map((episode: any, ei) => (
                                    <Link href={`/tv/${id}/${si+1}/${ei+1}`} key={episode} className='text-white text-lg rounded-lg font-bold text-center p-4 bg-gray-700 m-1 cursor-pointer' style={{backgroundColor: ((`${ei+1}` == currEpisode)&&(`${si+1}` == currSeason)) ? "red" : "black"}}>{ei + 1}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                )}
                <div className='w-full'>

                <iframe src={`https://vidsrc.to/embed/${type}/${id}${(type == "tv" ? `/${currSeason || 1}/${currEpisode || 1}` : "")}`} className='w-full h-full min-h-[30vh] md:min-h-[80vh] rounded-lg' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row max-md:p-3 max-md:space-y-3 md:space-x-6'>
                <Image
                    src={"https://image.tmdb.org/t/p/w500" + poster_path}
                    width={600}
                    height={500}
                    alt="Movie"
                    className="min-w-1/3 rounded-sm overflow-hidden hover:ring-4 hover:ring-indigo-700"
                />

                <div className="w-full text-white flex flex-col max-md:justify-between space-y-2">
                    <div className="md:px-4 text-xs font-bold bg-gray-900 rounded-lg flex max-md:flex-col max-md:space-y-3 md:justify-between w-full">
                        <div className="text-lg md:text-3xl font-bold bg-gray-900 rounded-lg">{title}</div>
                        <div className="text-xs block md:hidden">{tagline}</div>
                        <BagdeWithIcon icon={<IoTimeOutline />} value={runtime || episode_run_time} />
                        <BagdeWithIcon icon={<FaRegThumbsUp />} value={popularity} />
                        {adult ? <BagdeWithIcon icon={<p className='font-bold text-lg'>A</p>} value={""} /> : null}
                        {/* <BagdeWithIcon icon={<p className='font-bold text-lg'>A</p>} value={""} /> */}
                    </div>                    <div className="min-h-8 px-4 text-sm hidden md:block">{tagline}</div>


                    {/* <div className="min-h-8 px-4 text-sm text-semibold">Genre :- {genres.map((genre:any) => genre.name).join(", ")}</div> */}
                    <div className="min-h-8 px-4 pb-2 text-xs md:text-sm text-gray-300 ">
                        {overview}
                    </div>
                    <Property name='Genre' value={genres?.map((genre: any) => genre.name).join(", ")} />
                    <Property name='Country' value={production_countries?.map((genre: any) => genre.name).join(", ")} />
                    <Property name='Production' value={production_companies?.map((genre: any) => genre.name).join(", ")} />
                    <div>

                    <div className="flex justify-between py-4 border-t px-4 pt-6 mt-4">
                        <Badge variant={"outline"} className="text-white">{type === "tv" ? "TV Show" : "Movie"}</Badge>
                        <Badge variant={"outline"} className="text-white">{release_date || first_air_date}</Badge>
                        <Badge variant={"outline"} className="space-x-2 text-white"><StarFilledIcon /><p>{vote_average?.toString()?.slice(0, 3)}</p></Badge>
                    </div>
                    </div>
                    {/* <CardDescription>{description?.slice(0,200)}</CardDescription> */}
                </div>
                {/* <div className='w-80 h-full  p-8'> */}
                    {/* <div className="text-center w-full p-4 text-white bg-gray-800">{title}</div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default VideoDetails