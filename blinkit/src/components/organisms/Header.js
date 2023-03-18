import React from 'react';
import Logo from '../../assets/images/blinkit.webp';
import Cart from '../../assets/images/cart.png';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import '../../styles/style.css';
import BelowNavBar from '../molecules/BelowNavBar';

function Header() {
  return (
    <React.Fragment>
      <nav className="navBar flex flex__center__cross-axis">
        <div className="navBar__left flex flex__center__cross-axis">
          <Image styles="navBar__left__icon" src={Logo} alt="" />
          <div className="navBar__left__content" >
            <p><strong>Delivery in 10 mins</strong></p>
            <p>Ranchi,Jharkhand,India</p>
          </div>
        </div>
        <div className="navBar__right flex flex__center__cross-axis">
          <p>Login</p>
          <Button styles="btn flex flex__center__cross-axis">
            <Image styles="btn__icon" src={Cart} alt="" />
            <p className="btn__text">My Cart</p>
          </Button>
        </div>
      </nav>
      <BelowNavBar/>
    </React.Fragment>
  );
}
export default Header;
