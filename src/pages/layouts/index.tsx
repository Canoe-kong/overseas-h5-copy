import React, { Component, ReactNode } from 'react';
import { View } from '@tarojs/components';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
// import dayjs from 'dayjs';
function createErrorBoundary(Page) {
  return class ErrorBoundary extends Component {
    el = React.createRef();
    state = {
      hasError: null,
    };

    static getDerivedStateFromError() {
      return {
        hasError: true,
      };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }

    /* Start 需要手动调用页面组件上的生命周期方法 **/
    componentDidShow() {
      return this.el.current?.componentDidShow?.();
    }

    componentDidHide() {
      return this.el.current?.componentDidHide?.();
    }

    onShareAppMessage() {
      return this.el.current?.onShareAppMessage?.();
    }

    //...

    /* End 需要手动调用页面组件上的生命周期方法 **/

    render() {
      return this.state.hasError ? (
        <View>Something went wrong.</View>
      ) : (
        <Provider store={store}>
          <Page ref={this.el} />
        </Provider>
      );
    }
  };
}

export default createErrorBoundary;
