import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('UserName'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = () => {
    //next call an API and process changes
    console.log('Form submitted');
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            fieldType="text"
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            fieldType="password"
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
