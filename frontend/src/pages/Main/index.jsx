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
    const { events } = this.props;

    return (
      <div className="content root">
        <p> Root </p>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Event name</th>
            <th scope="col">Location</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col">Submitted at</th>
          </tr>
          </thead>
          <tbody>
            {events.length ? events
              .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
              .map((event, index) =>
                <tr key={index}>
                  <td>{event.eventName}</td>
                  <td>{event.location}</td>
                  <td>{event.startDate}</td>
                  <td>{event.endDate}</td>
                  <td>{event.submittedAt}</td>
                </tr>
              ) : ''
            }
          </tbody>
        </table>

        <div className="btn">
          <Button type="button" size="l" color="green" text="Manage Event" href="/manageEvent" />
        </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
