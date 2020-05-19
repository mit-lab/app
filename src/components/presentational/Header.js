import React  from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import { MessageTwoTone, UserOutlined, LineChartOutlined, CommentOutlined } from '@ant-design/icons';
import '../../App.css';

const { SubMenu } = Menu;

function Header(props) {
  return (
    <header className="Header">
      <div className="HeaderWr">
        <Link to="/person">
          <div className="LogoWr">
            <MessageTwoTone />  
            <h1>SomeName</h1>
          </div>
        </Link>
        <Menu onClick={props.changeMenu} selectedKeys={[props.current]} mode="horizontal">
          <Menu.Item onClick={props.showMessage} key="message" icon={<CommentOutlined />}>
            Сообщения
          </Menu.Item>
          <Menu.Item onClick={props.showStatistics} key="statistics" icon={<LineChartOutlined />}>
            Статистика
          </Menu.Item>
        </Menu>
        <Menu
          onClick={props.changeMenu}
          style={{ width: 150 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub2" icon={<UserOutlined />} title="User">
            <Menu.Item key="5">
              <Link to="/">Выйти</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </header>
  );  
}


export default Header;