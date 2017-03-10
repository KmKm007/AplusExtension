import React from 'react';
import MainRouter from '../router/MainRouter'

class AppComponent extends React.Component {
  render() {
    return (
      <MainRouter />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
