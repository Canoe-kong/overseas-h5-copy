import { Component } from 'react';
import './app.scss';
import 'taro-ui/dist/style/index.scss';

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
    return this.props.children;
  }
}

export default App;
