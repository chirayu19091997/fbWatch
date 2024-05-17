"use client"
import SearchList from '@/components/SearchList'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Search = () => {
  return (
    <Suspense>
      <SearchList />
    </Suspense>
  )
}

export default Search