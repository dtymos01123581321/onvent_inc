import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './ManageEvent.scss';

class Index extends Component {
  state = {
  };

  componentDidMount() {}

  render() {

    return (
      <div className="content manage-event">
        <p> manageEvent </p>

      </div>
    );
  }
}

Index.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
