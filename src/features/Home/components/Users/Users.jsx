const Users = () => {
    return (
        <section class="bg-black text-white py-5">
            <div class="container text-center">

                <h2 class="fw-semibold mb-5">Active Users</h2>

                <div class="row justify-content-center g-3">

                    <div class="col-6 col-md-3">
                        <div class="bg-dark border p-3 rounded-4">
                            <h1 class="fw-semibold">1200+</h1>
                            <p class="mb-0">Users</p>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="bg-dark border p-3 rounded-4">
                            <h1 class="fw-semibold">150+</h1>
                            <p class="mb-0">Workers</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Users;