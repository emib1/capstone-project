import logo from './icons_assets/Logo.svg'

function Nav() {

    return (
        <div class="nav">
            <ul class="navli">
                <img src={logo} alt='Logo' class="logo"/>
                <li><a href="/Home">Homepage</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Reservation">Reservation</a></li>
                <li><a href="/OrderOnline">Order Online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </div>

    );
}

export default Nav;
