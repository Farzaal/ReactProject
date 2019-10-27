import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './sagaInjectors';

export default ({ key, saga, mode }) => WrappedComponent => {
  class InjectSaga extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};

const useInjectSaga = {};

export { useInjectSaga };
