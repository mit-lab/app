import React from 'react';
import { Link } from "react-router-dom";
import { TwitterCircleFilled , FacebookFilled, InstagramFilled } from '@ant-design/icons';
import '../../App.css';


function Main() {
  return (
    <footer className="Footer">
      <div className="FooterWr">
        <Link href="/" className="FooterA">Соглашение о пользовании системой © 2020 ООО «SomeName». Все права защищены.</Link><br />
        <a href="mailto:support@somename.ru" target="_blank" className="FooterA" >support@somename.ru</a><br />
        <div className='FooterLine'></div>
        <div className="socialMedia">
          <a href="https://twitter.com" target="_blank"><TwitterCircleFilled /></a>
          <a href="https://www.facebook.com" target="_blank"><FacebookFilled /></a>
          <a href="https://www.instagram.com" target="_blank"><InstagramFilled /></a>
      </div>
      </div>
    </footer>
  );
};


export default Main;