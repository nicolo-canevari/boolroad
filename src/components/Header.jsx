import { Link } from "react-router-dom"


export default function Header() {

    return (

        <nav className=" navbar navbar-expand-lg ">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/"><img src="../public/img/logo.png" alt="" /></Link>

                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span className="navbar-toggler-icon"></span>

                </button> */}

                <div className="" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/add-trip"><i className="fa-regular fa-square-plus"></i></Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}