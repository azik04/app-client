const Header = () => {
    return(
        <header class="hero-section">
            <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1920/800?1" class="d-block w-100 carousel-img" alt="Slide 1"></img>
                    </div>

                    <div class="carousel-item">
                        <img src="https://picsum.photos/1920/800?2" class="d-block w-100 carousel-img" alt="Slide 2"></img>
                    </div>

                    <div class="carousel-item">
                        <img src="https://picsum.photos/1920/800?3" class="d-block w-100 carousel-img" alt="Slide 3"></img>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </header>
    )
}

export default Header;