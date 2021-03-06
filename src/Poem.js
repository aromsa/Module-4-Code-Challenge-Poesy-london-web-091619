import React from "react";

class Poem extends React.Component {

  state = {
    button: false,
    buttonText: "Mark as read"
  }

  readUnread = () => {
    let boolean = !this.state.button
    this.setState({
      button: boolean
    })
    this.buttonChange()
  }

  buttonChange = () => {
    if (this.state.button === false){
      this.setState({ buttonText: "Mark as unread"})
    }else if (this.state.button === true){
      this.setState({ buttonText: "Mark as read"}) 
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
          <button onClick={this.readUnread}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default Poem;
