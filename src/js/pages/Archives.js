import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Archived Article 1",
      "Archived Article 2",
      "Archived Article 3",
      "Archived Article 4",
      "Archived Article 5",
      "Archived Article 6",
      "Archived Article 7",
      "Archived Article 8",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div className="row">{Articles}</div>
      </div>
    );
  }
}
