const Footer = () => {
    return (
        <footer class="bg-black text-white py-5">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center mb-5">
                    <span class="fs-4 fw-semibold">LOGO</span>

                    <div class="d-flex gap-4 fs-3">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>

                <div class="row g-4 text-center">

                    <div class="col-6 col-md-3">
                        <div class="bg-dark border p-3 rounded-4">
                            <h6 class="fw-semibold">Əlaqə telefon</h6>
                            <p class="small mb-0">+994 12 310 0113</p>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="bg-dark border p-3 rounded-4">
                            <h6 class="fw-semibold">Mobil / Whatsapp</h6>
                            <p class="small mb-0">+994 50 444 2633</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="bg-dark border p-3 rounded-4">
                            <h6 class="fw-semibold">Ünvan</h6>
                            <p class="small mb-0">
                                Nizami k. 203B, AF Business House, 2-ci mərtəbə
                            </p>
                        </div>
                    </div>

                    <span>Made By : Hacıbalayev Əvəz (050-415-77-10)</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;