import { Component } from 'react';
import './app.scss';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}
  /**v3.5及以上支持 React 渲染流程之外的 JS 错误都能被其监听到；当渲染错误没有被开发者设置的错误边界捕获时，渲染报错都可以被监听到。 */
  onError(error) {
    console.log('==================Error==================', error);
  }

  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return this.props.children;
  }
}

export default App;
