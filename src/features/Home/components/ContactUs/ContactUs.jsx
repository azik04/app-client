const ContactUs = () => {
    return (
        <section class="py-5 bg-light">
            <div class="container">

                <h2 class="fw-semibold mb-5 text-dark">Contact Us</h2>

                <div class="row g-3">

                    <div class="col-12 col-md-6">
                        <label class="form-label" for="email">Email</label>
                        <input id="email" type="email" class="form-control form-control-lg"
                            placeholder="Enter your email"/>
                        <div class="text-danger small">Error message</div>
                    </div>

                    <div class="col-12 col-md-6">
                        <label class="form-label" for="fullname">Full Name</label>
                        <input id="fullname" type="text" class="form-control form-control-lg"
                            placeholder="Enter your fullname"/>
                        <div class="text-danger small">Error message</div>
                    </div>

                    <div class="col-12">
                        <label class="form-label" for="request">Request</label>
                        <textarea id="request" class="form-control form-control-lg" placeholder="Enter your request">
                        </textarea>
                        <div class="text-danger small">Error message</div>
                    </div>

                    <div class="col-12">
                        <button class="btn btn-dark btn-lg w-100">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs