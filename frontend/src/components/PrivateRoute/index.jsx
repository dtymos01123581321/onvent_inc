import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routeNames from '../../utilities/routeNames';

const Index = ({ component: Component, ...rest }) => {
  const { token } = rest;
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          token
            ? <Component {...props} />
            : (
              <Redirect
                to={{
                  pathname: routeNames.root,
                  state: { from: props.location },
                }}
              />
            )
        );
      }}
    />
  );
};

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(Index);
