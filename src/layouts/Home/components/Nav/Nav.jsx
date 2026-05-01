const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top py-1 px-2">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <button class="d-block d-md-none btn"><i class="fa-solid fa-bars"></i></button>

                <div class="fw-semibold fs-5 text-dark">Logo</div>

                <a href="auth" class="btn btn-dark">Sign In</a>
            </div>
        </nav>
    )
}

export default Nav