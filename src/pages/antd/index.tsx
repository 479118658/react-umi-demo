import { Button, Card, Form, Input, message } from "antd";
import style from "./index.less";
import { useState } from "react";
import Index from "./ProForm";

function Antd() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 28 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 28 },
      sm: { span: 20 },
    },
  };
  const [login, setLogin] = useState(false);
  const onFinish = (values: any) => {
    values.password = btoa(values.password + "H");
    message.success("登录成功");
    // 登录成功后，将用户信息存储到localStorage中
    localStorage.setItem("userInfo", JSON.stringify(values));
    setLogin(true);
    console.log("Success:", values);
  };
  return !login ? (
    <div className={style.content}>
      <Card title="用户登录" className={style.card} bordered={false}>
        <Form {...formItemLayout} onFinish={onFinish}>
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              { required: true, message: "请输入用户名" },
              { pattern: /^1[3-9]\d{9}$/, message: "请输入正确手机号" },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              { required: true, message: "请输入密码" },
              { pattern: /^.{7,}$/, message: "密码要大于6位" },
            ]}
          >
            <Input type="password" allowClear />
          </Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            登录
          </Button>
          <Button style={{ width: "100%", marginTop: 20 }}>注册</Button>
        </Form>
      </Card>
    </div>
  ) : (
    <Index />
  );
}

export default Antd;
