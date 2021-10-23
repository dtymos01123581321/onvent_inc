import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Main.scss';
import Button from '../../components/Button/Button';

class Index extends Component {
  state = {
  };

  componentDidMount() {}

  render() {

    return (
      <div className="content root">
        <p> Root </p>
        <div className="btn">
          <Button type="button" size="l" color="green" text="Manage Event" href="/manageEvent" />
        </div>
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
