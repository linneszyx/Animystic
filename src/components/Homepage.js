import React from 'react'
import Popular from './Popular'
import Upcoming from './Upcoming'
import Airing from './Airing'
import { useGlobalContext } from '../context/global'
import styled from 'styled-components'
function Homepage() {
    const {
        handleSubmit,
        search,
        searchAnime,
        handleChange,
        getAiringAnime,
        getPopularAnime,
        getUpcomingAnime,
    } = useGlobalContext()
    const [rendered, setRendered] = React.useState(false)
    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }
    return (
        <HomepageStyle>
            <header>
                <div className="logo">
                    <h1>
                        {
                            rendered === 'popular' ? 'Popular Anime ' : rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'
                        }
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                            getPopularAnime()
                        }}>
                            Popular<i className='fas fa-fire'></i></button>
                    </div>
                    <form action=" " className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder='Search Anime' value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyle>
    )
}
const HomepageStyle = styled.div`
background-color:#EDEDED;
header
{
    padding:2rem 5rem;
    width:60%;
    margin:0 auto;
    transition:all 0.4s ease-in-out;
    @media screen and (max-width:1530px){
        width:95%;
    }
    .logo
    {
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:2rem;
    }
    .search-container
    {
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
        button
        {
            display:flex;
            align-items:center;
            gap:0.5rem;
            padding:.7rem 1.5rem;
            outline:none;
            border-radius:30px;
            font-size:1.2rem;
            background-color:#fff;
            cursor:pointer;
            transition:all 0.4s ease-in-out;
            font-family:inherit;
            border:5px solid #e5e7eb;
        }
        form
        {
            position:relative;
            width:100%;
            .input-control
            {
                position:relative;
                transition:all 0.4s ease-in-out;
            }
            .input-control input
            {
                width:100%;
                padding:0.7rem 1rem;
                border:none;
                outline:none;
                border-radius:30px;
                font-size:1.2rem;
                background-color:#fff;
                transition:all 0.4s ease-in-out;
                border:5px solid #e5e7eb;
            }
            .input-control button
            {
                position:absolute;
                right:0;
                top:50%;
                transform:translateY(-50%);
            }
        }
    }
}   

`

export default Homepage