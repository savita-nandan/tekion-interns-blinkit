import React from 'react';
import Image from '../atoms/Image';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import Instagram from '../../assets/images/instagram.png';
import Playstore from '../../assets/images/playstore.png';
import Appstore from '../../assets/images/appstore.png';
import '../../styles/style.css';

function Footer() {
   return (
      <footer class="footer flex flex__center__cross-axis flex__center__main-axis">
         <p class="flex">
            © 2018 Blinkit Commerce Pvt Ltd (formerly known as Grofers India Pvt. Ltd), 2016-2023</p>
         <div className="footer-left flex">
            <p className="footer-left-text flex"><strong>Download App</strong></p>
            <div className="footer-left-img flex flex__center__cross-axis flex__center__main-axis">
               <Image src={Playstore} alt="" />
               <Image src={Appstore} alt="" />
            </div>
         </div>
         <div className="footer-right flex flex__center__cross-axis flex__center__main-axis">
            <Image src={Facebook} alt="" />
            <Image src={Twitter} alt="" />
            <Image src={Instagram} alt="" />
            <Image src={Linkedin} alt="" />
         </div>
      </footer>
   );
}

export default Footer;
