import { Button, Card, Form, Input } from "antd";
import style from "./index.less";
const formItemLayout = {
  labelCol: {
    xs: { span: 28 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 28 },
    sm: { span: 20 },
  },
};
function Antd() {
  return (
    <div className={style.content}>
      <Card title="Antd" className={style.card} bordered={false}>
        <Form {...formItemLayout}>
          <Form.Item name="username" label="用户名">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input />
          </Form.Item>
          <Button style={{ width: "100%" }} type="primary">
            登录
          </Button>
          <Button style={{ width: "100%", marginTop: 20 }}>注册</Button>
        </Form>
      </Card>
    </div>
  );
}

export default Antd;
