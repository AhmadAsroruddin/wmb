import React from 'react';


const Navbar = () => {
    const navigateTo = (route) => {
        props.history.push(route);
      };
    return (
        <nav className="navbar navbar-expand-lg bg-primary sticky-top">
            <div className="container">
                <a className="navbar-brand text-white fs-3" href="src/pages/Home/components/Navbar.jsx#">
                    <i><b>Enigma</b> Shop</i>
                </a>
                <button className="navbar-toggler btn btn-transparent text-white" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto column-gap-4 fs-5">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={()=>navigateTo('/sda')}>Tentang Kami</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="src/pages/Home/components/Navbar.jsx#testimoni">Testimoni</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="src/pages/Home/components/Navbar.jsx#kontak-kami">Kontak Kami</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;