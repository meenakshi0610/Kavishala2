import './Navbar.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#"><img src="logo.png" alt="kavishala" /> Kavishala Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item ql-1">
                            <a className="nav-link" aria-current="page" href="/#"><i className="fas fa-search"></i></a>
                        </li>
                        <li className="nav-item ql-1-1">
                            <a className="nav-link" aria-current="page" href="/#">Search</a>
                        </li>
                        <li className="nav-item ql-2">
                            <a className="nav-link" href="/#"><i className="far fa-heart"></i></a>
                        </li>
                        <li className="nav-item ql-2-2">
                            <a className="nav-link" href="/#">Wishlist</a>
                        </li>
                        <li className="nav-item ql-3">
                            <a className="nav-link" href="/#"><i className="fas fa-shopping-cart"></i></a>
                        </li>
                        <li className="nav-item ql-3-3">
                            <a className="nav-link" href="/#">Cart</a>
                        </li>
                        <li className="nav-item ql-4">
                            <a className="nav-link" href="/#"><button className="btn btn-sm btn-secondary">Login</button></a>
                        </li>
                        <li className="nav-item ql-4-4">
                            <a className="nav-link" href="/#">Login</a>
                        </li>
                        <li className="nav-item dropdown ql-5">
                            <a className="nav-link" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bars"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown ql-5-5">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item l-5" href="/#">Action</a></li>
                                <li><a className="dropdown-item l-6" href="/#">Another action</a></li>
                                <li><a className="dropdown-item l-7" href="/#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;