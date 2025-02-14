// import { Component } from 'react'
// import { View, Text } from '@tarojs/components'
// import './index.module.scss'

// export default class Index extends Component {

//   componentWillMount() { }

//   componentDidMount() { }

//   componentWillUnmount() { }

//   componentDidShow() { }

//   componentDidHide() { }

//   render() {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }
import { Component } from 'react';
import { Button } from '@tarojs/components';
import createErrorBoundary from '../layouts';
import { connect } from 'react-redux';

// 页面组件
class Index extends Component {
  state = {
    counter: 0,
  };

  //   componentWillMount() { }

  //   componentDidMount() { }

  //   componentWillUnmount() { }

  componentDidShow() {
    console.log('show');
  }

  componentDidHide() {
    console.log('hide');
  }

  onShareAppMessage() {
    return {
      title: 'myShareTitle',
    };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 2) {
      // 模拟 JS 报错
      throw new Error('I crashed!');
    }
    return <Button onClick={this.handleClick}>{this.state.counter}</Button>;
  }
}

export default createErrorBoundary(
  connect((state) => {
    console.group('redux数据');
    console.log(`%c 新值`, `color: #03A9F4; font-weight: bold`, state);
    // console.log(`%c 时间`, `color: #4CAF50; font-weight: bold`, dayjs().format('MM-DD HH:mm:ss'));
    console.groupEnd();
    return state;
  })(Index),
);
