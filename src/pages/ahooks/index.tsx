import { useRequest } from 'ahooks';
import { Button } from 'antd';

// 定义一个函数，返回一个Promise对象，1s后返回字符串'Hello'
function getFirstName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
}
// 定义一个函数，返回一个Promise对象，2s后返回字符串'World'
function getLastName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('World');
    }, 2000);
  });
}

// 导出一个函数，用于渲染组件
export default () => {
  // 使用useRequest函数，获取getFirstName函数的结果，手动触发
  const { data, loading, error, run } = useRequest(getFirstName, { manual: true });
  // 使用useRequest函数，获取getFirstName和getLastName函数的结果，手动触发
  const {
    data: d2,
    loading: l2,
    run: run2,
  } = useRequest(() => Promise.all([getFirstName(), getLastName()]), {
    manual: true,
    onSuccess: (res, parma) => console.log('成功', res, parma),
  });
  console.log(d2);

  return (
    <div>
      <Button onClick={run}>请求</Button>

      <div>{loading ? 'loading...' : data}</div>
      <Button onClick={run2}>请求2个同时并行</Button>
      <div>{l2 ? 'loading...' : d2?.join(' ')}</div>
    </div>
  );
};
