import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick"
import Styles from './Home.module.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
export default class Home extends Component {
    state = {
        movies:[],
        tv:[],
        person:[]
    }
    getTrending = async(mediaType)=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`)
        this.setState({
            [mediaType]:data.results
        })
        
    }


    componentDidMount(){
        this.getTrending('movies');
        this.getTrending('tv');
        this.getTrending('person');
    }

    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        
        return (
            <div>
                <div className={Styles.header}>
                    <div className="container-fluid">
                        <Slider {...settings}>
                            {this.state.movies.map((value , index)=>{
                                return (
                                    <div key={index} className="item">
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original"+value.poster_path} alt="" />
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div className="item">
                                <div className="line my-4"></div>
                                <h1>Trending movies to watch now</h1>
                                <p className="socendColor">Most watched movies by days</p>
                                <div className="line my-4"></div>
                            </div>
                        </div>
                        {this.state.movies.slice(0,10).map((value , index)=>{
                                // console.log(index , value);
                            return (
                                
                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <Link className="text-white decoration-none" to={`/Moviedetails/${value.id}`}>
                                            <img className="w-100 mb-3" src={"https://image.tmdb.org/t/p/original"+value.poster_path} />
                                            <h6>{value.title} {value.name}</h6>
                                            <span className="vote">{value.vote_average}</span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div className="item">
                                <div className="line my-4"></div>
                                <h1>Trending TVs <br/> to watch now</h1>
                                <p className="socendColor">Most watched movies by days</p>
                                <div className="line my-4"></div>
                            </div>
                        </div>
                        {this.state.tv.slice(0,10).map((value , index)=>{
                            return (
                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100 mb-3" src={"https://image.tmdb.org/t/p/original"+value.poster_path} alt="" />
                                        <h6>{value.title} {value.name}</h6>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-4 my-3">
                            <div className="item">
                                <div className="line my-4"></div>
                                <h1>Trending Actors <br/> to watch now</h1>
                                <p className="socendColor">Most watched movies by days</p>
                                <div className="line my-4"></div>
                            </div>
                        </div>
                        {this.state.person.slice(0,10).map((value , index)=>{
                            return (
                                <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100 mb-3" src={"https://image.tmdb.org/t/p/original"+value.profile_path} alt="" />
                                        <h6>{value.title} {value.name}</h6>
                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

