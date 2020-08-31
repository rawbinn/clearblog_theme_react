import React, {useState, useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import axios from 'axios';


export default function Navbar() {

    const [menu, setMenu] = useState(false);

    const getMenu = async() => {
        await axios.get('http://larapress.seshra.com/api/menu?name=main-menu')
        .then(response => {
            response.data.map(m => {
                if(m.url === '/' || m.url === 'http://larapress.seshra.com/'){

                    m.url = '/'
                }
                else if(m.url.indexOf("http://larapress.seshra.com") === 0){
                    m.url = m.url.split('/')[3]

                }
                else{
                    m.url = m.url
                }
            })
            setMenu(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getMenu();
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">Larapress</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                       {menu && menu.map(m => (
                        <li className="nav-item" key={m.id}>
                            <Link className="nav-link" to={m.url}>{m.title}</Link>
                        </li>
                       ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}