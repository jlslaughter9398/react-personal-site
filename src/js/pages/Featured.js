import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Featured Article 1",
      "Featured Article 2",
      "Featured Article 3",
      "Featured Article 4",
      "Featured Article 5",
      "Featured Article 6",
      "Featured Article 7",
      "Featured Article 8",
      "Featured Article 9",
      "Featured Article 10",
      "Featured Article 11",
      "Featured Article 12",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div className="row">{Articles}</div>
      </div>
    );
  }
}
