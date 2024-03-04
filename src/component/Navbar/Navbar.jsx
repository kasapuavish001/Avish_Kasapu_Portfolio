
import { AppstoreFilled } from '@ant-design/icons';
import { useState } from 'react';
import resume from '../../assests/images/pdf/Avish_Kasapu_.pdf';
import './Navbar.scss';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const data = [
        {
            id: 1,
            name: "Projects.",
            link: "/"
        },
        {
            id: 2,
            name: "About.",
            link: "/About"
        },
        {
            id: 1,
            name: "Resume.",
            link: resume
        },
        {
            id: 1,
            name: "Linkedin.",
            link: "https://www.linkedin.com/in/kasapu-avish-011001237/"
        },

    ]
    return (
        <div className='navbar'>
            <div className="navbar_main contain">
                <p className="navbar_logo">
                    <a href="/">Avish <br /> Kasapu</a>
                </p>
                <ul className={`navbar_menu ${showMenu ? 'show' : ''} `}>
                    {data.map((each, i) => {
                        return <li key={i}><a href={each.link} onClick={() => { setShowMenu(!showMenu) }}>{each.name}</a></li>
                    })}
                </ul>
                <div className="navbar_menumobile">
                    <button className='navbar_btn' onClick={() => { setShowMenu(!showMenu) }}> <AppstoreFilled className='icon' /></button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
