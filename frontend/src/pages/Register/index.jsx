import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import history from '../../utilities/history';
import * as usersActions from '../../utilities/redux/actions/usersActions';
import './Register.scss';
import noImage from '../../media/img/noimageavailable.png';

class Index extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    file: null,
  };

  componentDidMount() {}

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleDateChange = (date, type) => {
    this.setState({ [type]: date } ,)
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, file } = this.state;
    const { registrationAction } = this.props;

    registrationAction({
      name,
      email,
      password,
      file})
  }

  handleChangeImage = (e) => {
    this.setState({file:e.target.files});
  }

  render() {
  const { name, email, password, confirmPassword, file } = this.state;

    const image = file ? URL.createObjectURL(file[0]) : noImage;

    return (
      <div className="content register">
        <h1> Register </h1>
        <form onSubmit={this.onFormSubmit}>
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
              name="file"
              accept="image/*"
              onChange={this.handleChangeImage}
            />
          </div>
          <div className="mb-3 d-flex justify-content-evenly">
            <button className="btn btn-success" onClick={() => history.push('/')}>Home</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

        {/*<form onSubmit={this.onFormSubmit}>*/}
        {/*  <h1>File Upload</h1>*/}
        {/*  <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />*/}
        {/*  {console.log(this.state.file)}*/}
        {/*  <button className="upload-button" type="submit">Upload to DB</button>*/}
        {/*</form>*/}
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
