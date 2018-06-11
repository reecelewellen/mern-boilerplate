import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActionsRow from './DashboardActionsRow';

class Dashboard extends React.Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <div>
                <p className="lead welcome">
                  This is the backend of {user.name}
                </p>
                <DashboardActionsRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(
  Dashboard
);
