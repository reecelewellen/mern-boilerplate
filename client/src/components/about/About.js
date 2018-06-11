import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">MERN-BOILERPLATE</h1>
              <p className="lead">I am a MERN-BOILERPLATE app. I have the basic register, and
                login for users, and some basic components on the front. Neat<br/><br/>Uses Bootstrap 4, FontAwesome 5 for templating
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
