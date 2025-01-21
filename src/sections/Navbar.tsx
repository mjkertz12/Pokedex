import pokeballIcon from "../assets/pokeball-icon.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import "../styles/sections/Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navigationRoutes = [
    {
        name: "Search",
        route: "/search",
    },
    {
        name: "Compare",
        route: "/compare",
    },
    {
        name: "Pokemon",
        route: "/pokemon",
    },
    {
        name: "My Pokemon",
        route: "/mypokemon",
    },
    {
        name: "About",
        route: "/about",
    },
]

export const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        const index = navigationRoutes.findIndex(({ route }) => location.pathname.includes(route));
        ul(index);
    }, [location.pathname, navigationRoutes]);

    const ul = (idx: number) => {
        const underlines = document.querySelectorAll<HTMLElement>(".underline");
        for (let i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = "translate3d(" + idx * 100 + "%,0,0)";
        }
    }

    return (
        <nav>
            <div className='block'>
                <img src={pokeballIcon} alt="pokeball icon" />
            </div>
            <div className='data'>
                <ul>
                    <div className="underline"></div>
                    <div className="underline"></div>
                    <div className="underline"></div>
                    {
                        navigationRoutes.map(({ name, route }, index) => {
                            return <Link to={route} key={index}><li>{name}</li></Link>
                        })
                    }
                </ul>
            </div>
            <div className='block'>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}
