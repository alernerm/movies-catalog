import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      pasword: ''
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const username = this.username.current.value;
    console.log('Form submitted');

    //next call an API and process changes
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User name</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.handleChange}
              id="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
        </form>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default LoginForm;
