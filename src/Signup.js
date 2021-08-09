import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form>
        <h1>Signup</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="age" placeholder="Age" />
          <label htmlFor="age">Age</label>
        </div>
        <div>
          <input type="text" name="city" placeholder="City" />
          <label htmlFor="city">City</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default Signup;
