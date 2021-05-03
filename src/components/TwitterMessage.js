import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    // this state allows the creatation of the component of the state 
    this.state = {
      message: ''
    };
  }
  // this event allows to target the value of the input box you can test it by console.logging the event.target.value
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  // value here renders teh state above as the set value
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} name="message" id="message" value={this.state.message} />
        {/*// this is to put stuff on the page with MaxChars    */}
         <p>  {/* Length: {this.state.message.length} */}
          Character Reamining:{this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
