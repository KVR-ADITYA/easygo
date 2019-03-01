import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class Comp1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">EasyGo</h1>
          <p class="lead">Life made easy by EasyGo.</p>
          <hr class="my-4" />
          <p>
            EasyGo is a open source project which mainly focuses on making
            travel simpler, easier and to improve your travel experiences.
            <br />
            We provide food during your long and tiresome journeys.
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}

export default Comp1;
