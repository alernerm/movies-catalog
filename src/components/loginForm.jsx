import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const username = this.username.current.value;
    console.log('Form submitted');

    //next call an API and process changes
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User name</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default LoginForm;
