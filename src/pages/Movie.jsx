import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from '../components/layout/ui/Card';

function Movie() {
  const MovieData = useLoaderData();
  console.log(MovieData)
  return (
    <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-4'>
        {MovieData.Search.map((currMovie)=>{
          return <Card key={currMovie.imdbID} currMovie={currMovie}/>
        })}
    </div>
  )
}

export default Movie;