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
        <TwitterCircleFilled />
        <FacebookFilled />
        <InstagramFilled />
      </div>
      </div>
    </footer>
  );
};


export default Main;