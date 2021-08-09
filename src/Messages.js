import React from "react";

class Messages extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <form>
          <div>
            <input type="text" name="message" placeholder="Message" />
            <label htmlFor="message">Enter message here</label>
          </div>
          <input type="submit" value="Post Message" />
        </form>
        <h2>Posted messages:</h2>
        <li>Message example 1</li>
        <li>Message example 2</li>
        <li>Message example 3</li>
      </div>
    );
  }
}

export default Messages;
