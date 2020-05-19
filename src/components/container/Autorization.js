import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../App.css';


function Autorization() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="AutorizationWr">
      <div className="FormWr">
        <h1>Авторизация</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="FormItemWr">
            <Form.Item
              label="Логин"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Введите логин',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Введите пароль',
                },
              ]}
            >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            <Link to="/person">Войти</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Autorization;