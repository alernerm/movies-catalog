import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
  state = {
    data: {
      name: '',
      username: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label('Name'),
    username: Joi.string()
      .required()
      .email()
      .label('UserName'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password')
  };

  doSubmit = () => {
    //next call an API and process changes
    console.log('Form submitted');
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInput('name', 'Name')}
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
