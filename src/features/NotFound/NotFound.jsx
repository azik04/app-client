const NotFound = () => {
    return (
        <div class="app-container d-flex">

            <section class="bg-section d-flex align-items-center justify-content-center">
                <div class="bg-white p-4 rounded border text-center">
                    <p className="fs-1">404</p>
                    <p className="fs-3">Oops! Page not found.</p>
                    <a href="/" class="btn btn-dark">Go Home</a>
                </div>
            </section>

        </div>
    )
}

export default NotFound;