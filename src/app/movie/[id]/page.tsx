import VideoDetails from '@/components/details'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <VideoDetails type='movie' id={params.id}/>
  )
}

export default Page