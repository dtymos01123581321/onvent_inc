import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Main.scss';
import * as eventsActions from '../../utilities/redux/actions/eventsActions';
import history from '../../utilities/history';

class Index extends Component {
  state = {
    isModal: false
  };

  componentDidMount() {
  }

  handleDeleteEvents = () => {
    const { deleteEventsAction } = this.props;

    deleteEventsAction();
    this.setState({ isModal: false });
  };

  render() {
    const { isModal } = this.state;
    const { events } = this.props;

    console.log('isModal  --: ', isModal);

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
          <tbody>{events.length ? events
            .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
            .map((event, index) =>
              <tr key={index}>
                <td>{event.eventName}</td>
                <td>{event.location}</td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td>{event.submittedAt}</td>
              </tr>
            ) : ''}
          </tbody>
        </table>

        <div className="btn btn-between">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                  onClick={() => history.push('/manageEvent')}>
            Manage Event
          </button>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                  onClick={() => this.setState({ isModal: true })}>
            Delete
          </button>
        </div>


        <div className={`modal ${isModal ? 'show' : 'fade'}`} style={{ display: isModal ? 'block' : 'none' }}
             id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete all events</h5>
              </div>
              <div className="modal-body">
                Do you want to delete all events?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={() => this.setState({ isModal: false })}>Close
                </button>
                <button type="button" className="btn btn-primary" onClick={this.handleDeleteEvents}>Delete</button>
              </div>
            </div>
          </div>
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
  ...eventsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
