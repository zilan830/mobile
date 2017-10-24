import React from "react";

export default class Template extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>头部</h1>
        <div>
          {this.props.children}
        </div>
        <h1>尾部</h1>
      </div>
    )
  }
}