import VideoDetails from '@/components/details'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  console.log("k")
  return (
   <VideoDetails type='tv' id={params.id}/>
  )
}

export default Page