const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top py-1 px-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                
                <button className="d-block d-md-none btn">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="fw-semibold fs-5 text-dark">
                    Logo
                </div>

                <a href="/auth" className="btn btn-dark">
                    Sign In
                </a>

            </div>
        </nav>
    )
}

export default Nav;