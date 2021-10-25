import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import history from '../../utilities/history';
import * as usersActions from '../../utilities/redux/actions/usersActions';
import 'react-datepicker/dist/react-datepicker.css';
import './Register.scss';
import noImage from '../../media/img/noimageavailable.png';

class Index extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: noImage
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
    const { name, email, password, confirmPassword, image } = this.state;
    const { registrationAction } = this.props;

    registrationAction({
      name,
      email,
      password})

    console.log('onSubmit  --: ', name, email, password, confirmPassword, image);
  }

  handleChangeImage = e => {
    this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
  }

  render() {
  const { name, email, password, confirmPassword, image } = this.state;

    return (
      <div className="content register">
        <p> Manage Event </p>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3 d-flex justify-content-center image-box">
            <img src={image} alt="#"/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEventName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEventName"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputImage" className="form-label">Upload avatar image</label>
            <input
              type="file"
              className="form-control"
              id="inputImage"
              name="image"
              accept="image/*"
              onChange={this.handleChangeImage}
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
