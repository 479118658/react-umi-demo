import { Button, Result } from "antd";
import { history } from "umi";
function App() {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => history.replace("/")}>
            返回首页
          </Button>
        }
      />
    </>
  );
}
export default App;
