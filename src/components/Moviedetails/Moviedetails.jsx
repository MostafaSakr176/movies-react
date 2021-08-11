import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Moviedetails() {
    
    const {id} = useParams();
    console.log(id);
    const [movieDetails, setMovieDetails] = useState("");

    async function getDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52bbcddeda849047525b51d6f8a12361&language=en-US`)
            console.log(data);
            
            setMovieDetails(data)
            
    }

        useEffect(() => {
            getDetails();
            
        },[])
    

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <img className="w-100" src={"https://image.tmdb.org/t/p/original"+movieDetails.poster_path} alt="" />
                    </div>
                    <div className="offset-md-1 col-md-6 col-sm-12">
                        <h2 className="my-3">{movieDetails.title}</h2>
                        <h5 className="my-5">{movieDetails.overview}</h5>
                        <h5 className="my-5">vote count : {movieDetails.vote_count}</h5>
                        <h5 className="my-5">vote average : {movieDetails.vote_average}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
