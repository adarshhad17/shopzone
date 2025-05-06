import React from 'react'
import './Footer.css'
import footerlogo from '../../../assets/FooterAssets/footer-logo.png';
import fb from '../../../assets/FooterAssets/fb.png';
import twiter from '../../../assets/FooterAssets/twiter.png';
import be from '../../../assets/FooterAssets/be.png';
import youtube from '../../../assets/FooterAssets/youtube.png';

function Footer() {
  return (
    <footer className='footer-main'>
        <div className='logo-footer'> <img src={footerlogo} alt="" /></div>
        <p > 2024  Copy rights </p>
      <div className='footer-icons'>
         <img src={fb} /> 
         <img src={twiter} /> 
         <img src={be} /> 
         <img src={youtube} style={{height:"10px", marginTop:"7px"}} /> 
      </div>

    </footer>
  )
}

export default Footer
