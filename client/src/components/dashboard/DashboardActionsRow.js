import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to='/' className="btn btn-primary"> Home </Link>
    </div>
  );
};

export default Dashboard;
