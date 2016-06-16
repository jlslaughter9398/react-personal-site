import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      
          <div class="footer">
              <div class="container">

                  <div class="row">
                      <div class="col-footer col-md-4  col-md-offset-4 col-xs-6">
                          <h3>Social Networks</h3>
                          <p>Your new web application can also be placed on the following social networks:</p>
                          <div>
                              <img src="../../../../img/icons/facebook.png" width="32" alt="Facebook" />
                                  <img src="../../../../img/icons/twitter.png" width="32" alt="Twitter" />
                                      <img src="../../../../img/icons/linkedin.png" width="32" alt="LinkedIn" />
                                          <img src="../../../../img/icons/rss.png" width="32" alt="RSS Feed" />
                          </div>
                      </div>

                  </div>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="footer-copyright">&copy; 2016 JSPREMIERWEBSOLUTIONS</div>
                      </div>
                  </div>
              </div>
          </div>
      
    );
  }
}
