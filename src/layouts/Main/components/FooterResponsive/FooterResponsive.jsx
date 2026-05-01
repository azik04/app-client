import "./style.css"

const FooterResponsive = () => {
    return (
        <footer className="bg-footer__responsive d-block d-md-none">
            <ul className="nav justify-content-between">
                <li><a href="#" className="footer-link nav-link active">Profile</a></li>
                <li><a href="#" className="footer-link nav-link">Requests</a></li>
                <li><a href="#" className="footer-link nav-link">Workers</a></li>
                <li><a href="#" className="footer-link nav-link">Sign out</a></li>
            </ul>
        </footer>
    )
}

export default FooterResponsive;