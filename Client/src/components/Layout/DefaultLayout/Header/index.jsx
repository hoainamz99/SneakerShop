import React from 'react'
import '../Header/style.css'
import logo from '../Header/logo.png'
import { Link } from 'react-router-dom';



function Header() {
    return (

        <div className="header">
            <div className='nav_top'>
                <div className="name">
                    <p>
                        nguyenvuhoainamz / 0866526107
                    </p></div>
                <div className="login">
                    <ul>
                        <li><Link to="/signin">Đăng ký</Link></li>
                        <li>/</li>
                        <li><Link to="/login">Đăng nhập</Link></li>
                    </ul>
                </div>
            </div>
            <div className="nav_bottom">
                <div className="logo">
                    <Link to="/"> <img src={logo} /></Link>
                </div>
                <div className="nav">
                    <div className="nav__pc">
                        <ul>
                            <li> <Link to="/">ALL PRODUCTS</Link></li>
                            <li> <Link to="/">SHOES <i class='bx bx-caret-down'></i></Link> </li>
                            <li> <Link to="/">ACCESSORIES</Link> </li>
                            <li> <Link to="/admin">ADMIN</Link></li>
                            <li> <Link to="/news">LATEST VANS NEWS</Link> </li>
                        </ul>

                    </div>

                </div>
                <div className="gh">

                    {/* nav mobile */}
                    <div className="nav__mobile">
                        <div className="logo__mobile">
                            <a href="#"><img src="#" alt="logo" /></a>
                            <ul>
                                <li> <a href="/shop">ALL PRODUCTS</a></li>
                                <li> <a href="/shop">SHOES <i class='bx bx-caret-down'></i></a> </li>
                                <li> <a href="/accesories">SIZE CHART</a> </li>
                                <li> <a href="/aboutus">ABOUT US</a></li>
                                <li> <a href="/news">LATEST VANS NEWS</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="icon">
                        <label for="gh-mobile-input" class="gh__bars-button">
                            <i class="fa-solid fa-bars"></i>
                        </label>
                        <input type="checkbox" hidden class="gh__input" id="gh-mobile-input" />
                        <label for="gh-mobile-input" class="gh__overlay"></label>
                        <a href="#"> <i class="fa-solid fa-magnifying-glass"></i> </a>
                        <Link to="/cart">  <i class="fa-solid fa-cart-shopping"></i> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header