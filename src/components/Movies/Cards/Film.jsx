import React from "react";
import s from './Film.module.css'


class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS', {
            headers: {
                'accept': 'application/json',
                'X-API-KEY': 'd4b2b958-b33a-455b-b012-5bc7428a621c'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.films
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                    });
                }
            )
    }
    render() {
        {
            const { isLoaded, items } = this.state;
            if (!isLoaded) {
                return <p>Loading...</p>
            } else {
                return (
                    <div className={s.container}>    
                        {items.map(item => (
                            <div className={s.movie_card} key={item.filmId}>
                                <div className={s.movie__cover_item}>
                                    <img className={s.poster} src={item.posterUrlPreview} alt="film" />
                                    <div className={s.movie__cover_darkened}></div>
                                </div>
                                <div className={s.decription}>
                                    <div className={s.movie_title}>{item.nameRu}</div>
                                    <div className={s.category}>{item.genres.map((genre) => ` ${genre.genre}`)}</div>
                                    <div className={s.movie_average}>{item.rating}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        }
    }
}


export default Film
