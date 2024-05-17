import VideoDetails from '@/components/details'
import React from 'react'

const page = ({ params }: { params: { id: string,s:string,ep:string } }) => {
    const type = 'tv'
  console.log("f")
    console.log(`https://vidsrc.to/embed/${type}/${params.id}${(type == "tv" ? `/${params.s || 1}/${params.ep || 1}` : "")}`)
  return (
    <VideoDetails type='tv' id={params.id} currSeason={params.s} currEpisode={params.ep}/>
  )
}

export default page