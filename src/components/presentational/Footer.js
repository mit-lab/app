import React from 'react';
import { Link } from "react-router-dom";
import { TwitterCircleFilled , FacebookFilled, InstagramFilled } from '@ant-design/icons';
import '../../App.css';


function Main() {
  return (
    <footer className="Footer">
      <div className="FooterWr">
        <Link href="/" className="FooterA">Соглашение о пользовании системой © 2020 ООО «SomeName». Все права защищены.</Link><br />
        <Link href="mailto:support@somename.ru" target="_blank" className="FooterA" >support@somename.ru</Link><br />
        <div className='FooterLine'></div>
        <div className="socialMedia">
          <Link href="https://twitter.com" target="_blank"><TwitterCircleFilled /></Link>
          <Link href="https://www.facebook.com" target="_blank"><FacebookFilled /></Link>
          <Link href="https://www.instagram.com" target="_blank"><InstagramFilled /></Link>
      </div>
      </div>
    </footer>
  );
};


export default Main;