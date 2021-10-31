import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';

import './Main.scss';
import * as eventsActions from '../../utilities/redux/actions/eventsActions';
import * as authActions from '../../utilities/redux/actions/authActions';
import history from '../../utilities/history';
import { BASE_URL, SECRET_KEY } from '../../utilities/constants';
import noImage from '../../media/img/noimageavailable.png';

class Index extends Component {
  state = {
    isModal: false,
    events: []
  };

  componentDidMount() {
    const { fetchEventsAction } = this.props;
    fetchEventsAction();
  }

  static getDerivedStateFromProps(props, state) {
    if (state.events !== props.events) {
      return {
        events: props.events,
      };
    }
    return null;
  }

  handleDeleteEvents = () => {
    const { deleteEventsAction } = this.props;

    deleteEventsAction();
    this.setState({ isModal: false });
  };

  render() {
    const { isModal, events } = this.state;
    const { token, logoutAction, deleteEventAction } = this.props;

    const decoded = token && jwt.verify(token, SECRET_KEY);

    return (
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="d-flex justify-content-lg-between">
            <h3>{decoded.name}</h3>
            <div className="text-end">
              { token
                ? <button type="button" className="btn btn-secondary" onClick={logoutAction}>Logout</button>
                : <>
                  <button type="button" className="btn btn-outline-light me-2" onClick={() => history.push('/login')}>Login</button>
                  <button type="button" className="btn btn-warning" onClick={() => history.push('/register')}>Sign-up</button>
                </>
              }
            </div>
          </div>
        </header>

        <div className="content root">
          <h1> Welcome </h1>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Images</th>
              <th scope="col">Event name</th>
              <th scope="col">Location</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Submitted at</th>
              <th scope="col">{token && 'Action'}</th>
            </tr>
            </thead>
            <tbody>{events.length ? events
              .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
              .map((event, index) =>
                <tr key={index}>
                  <td><img src={event.user && event.user.image ? `${BASE_URL}${event.user.image}` : noImage} alt="#"></img></td>
                  <td>{event.eventName}</td>
                  <td>{event.location}</td>
                  <td>{event.startDate}</td>
                  <td>{event.endDate}</td>
                  <td>{event.submittedAt}</td>
                  <td>
                    {token && <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => deleteEventAction(event._id)}
                      disabled={event.user && !!decoded && event.user._id !== decoded._id}>
                      Delete
                    </button>}
                  </td>
                </tr>
              ) : <tr><td><h3>You have no current events</h3></td></tr>}
            </tbody>
          </table>

          { token ? <div className="btn btn-between">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                      onClick={() => history.push('/manageEvent')}>
                Manage Event
              </button>
              <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                      onClick={() => this.setState({ isModal: true })}>
                Delete all
              </button>
            </div> : ''
          }

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
                  <button type="button" className="btn btn-primary" onClick={this.handleDeleteEvents}>Delete All</button>
                </div>
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

const mapStateToProps = ({ events, token }) => ({
  events,
  token
});

const mapDispatchToProps = {
  ...eventsActions,
  ...authActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
