import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './ManageEvent.scss';

class Index extends Component {
  state = {
    startDate: '',
    endDate: ''
  };

  componentDidMount() {}

  handleDateChange = (date, type) => {
    this.setState({ [type]: date } , ()=> console.log('bebeeb  --: ', { [type]: date }))
  }

  render() {
  const { startDate, endDate } = this.state;

    return (
      <div className="content manage-event">
        <p> Manage Event </p>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEventName" className="form-label">Event name</label>
            <input type="text" className="form-control" id="exampleInputEventName"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation" className="form-label">Location</label>
            <input type="text" className="form-control" id="exampleInputLocation"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputStartDate" className="form-label">Start date</label>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => this.handleDateChange(date, 'startDate')}
              dateFormat="Pp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEndDate" className="form-label">End date</label>
            <DatePicker
              className="form-control"
              selected={endDate}
              onChange={(date) => this.handleDateChange(date, 'endDate')}
              dateFormat="Pp"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
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
