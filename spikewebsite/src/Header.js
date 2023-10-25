import twitter from './images/twitter.png'

function Header() {
    return (
        <div id="header">
            <h3>293 SPIKE</h3>
            <a>About</a>
            <a>Sponsors</a>
            <a>Contact</a>

            <div id="header-right">
                <button class="header-social">
                    <img alt="Twitter" src={twitter} />
                </button>
                <button class="header-social"><img alt="Facebook" src="../public/facebook.png" /></button>
                <button class="header-social"><img alt="Instagram" src="../public/instagram.png"/></button>
                <button class="header-social"><img alt="GitHub" src="../public/github.png" /></button>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default Header;