import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default ({ key, reducer }) => WrappedComponent => {
  class ReducerInjector extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};

const useInjectReducer = {};

export { useInjectReducer };
