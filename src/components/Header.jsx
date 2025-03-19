import { Link } from "react-router-dom"

// Componente Header: rappresenta la barra di navigazione dell'app
export default function Header() {

    return (

        // Navbar principale con Bootstrap
        <nav className=" navbar navbar-expand-lg ">

            <div className="container-fluid">

                {/* Logo che funge da link alla homepage */}
                <Link className="navbar-brand" to="/"><img src="../public/img/logo.png" alt="" /></Link>

                {/* Contenitore per i link della navbar */}
                <div className="navbar-icon" id="navbarNav">

                    <ul className="navbar-nav d-flex flex-row gap-3">

                        {/* Link per aggiungere un nuovo viaggio */}
                        <li className="nav-item">
                            <i class="fa-regular fa-address-book"></i>
                        </li>

                        <li className="nav-item">
                            <i class="fa-regular fa-user"></i>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-trip"><i className="fa-regular fa-square-plus"></i></Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    )

}