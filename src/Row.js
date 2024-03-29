import React, { useEffect, useState } from 'react'
import axios from './axios'
import './row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url ='http://image.tmdb.org/t/p/original/'
function Row({title, fetchUrl,isLargeRow}) {
    const [movies, setMovies] =  useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(()=>{
        async function fetchData(){
            const request =  await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl])
    const opts={
        height: "390",
        width: '100%',
        playerVars:{
            autopay: 1,
        }
    }
    const handleClick= ((movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || '')
            // lấy id của video
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search)
                // https://www.youtube.com/watch?v=XtMThy8QKqU
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error)=> console.log(error))
        }
    });
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {
                movies.map((movie)=>(
                    <img key={movie.id} 
                        onClick={()=>handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__osterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))
            }
        </div>
                {trailerUrl && <Youtube videoId={trailerUrl}opts={opts}/>}
    </div>
  )
}

export default Row