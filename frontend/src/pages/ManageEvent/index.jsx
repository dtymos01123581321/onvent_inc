import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import * as eventsActions from '../../utilities/redux/actions/eventsActions';
import 'react-datepicker/dist/react-datepicker.css';
import './ManageEvent.scss';
import { TIME_TEMPLATE } from '../../utilities/constants';

class Index extends Component {
  state = {
    eventName: '',
    location: '',
    startDate: '',
    endDate: ''
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
    const { eventName, location, startDate, endDate } = this.state;
    const { setEventAction } = this.props;

    setEventAction({
      eventName,
      location,
      startDate: moment(startDate).format(TIME_TEMPLATE),
      endDate: moment(endDate).format(TIME_TEMPLATE),
      submittedAt: moment().format(TIME_TEMPLATE)})
  }

  render() {
  const { eventName, location, startDate, endDate } = this.state;

    return (
      <div className="content manage-event">
        <p> Manage Event </p>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEventName" className="form-label">Event name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEventName"
              name="eventName"
              value={eventName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation"
              name="location"
              value={location}
              onChange={this.handleInputChange}
            />
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
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ events }) => ({
  events
});

const mapDispatchToProps = {
  ...eventsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
