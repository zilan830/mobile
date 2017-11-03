import React from "react";
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to="/page1">第一页</Link>
        <Link to="/page2">第二页</Link>
        <div style={{"height":"500px","width":"100%"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}