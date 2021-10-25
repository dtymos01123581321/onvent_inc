import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../utilities/history';
import * as usersActions from '../../utilities/redux/actions/usersActions';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.scss';

class Index extends Component {
  state = {
    email: '',
    password: ''
  };

  componentDidMount() {}

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleDateChange = (date, type) => {
    this.setState({ [type]: date } ,)
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { loginAction } = this.props;

    loginAction({
      email,
      password
    })
  }

  handleChangeImage = e => {
    this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
  }

  render() {
  const { email, password } = this.state;

    return (
      <div className="content login">
        <h1> Login </h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-evenly">
            <button className="btn btn-success" onClick={() => history.push('/')}>Home</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

Index.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ events }) => ({
  events
});

const mapDispatchToProps = {
  ...usersActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
