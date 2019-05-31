import React from 'react';
import { Form } from 'semantic-ui-react';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { email, password } = this.state;

    fetch('https://hsalah.net/ports_app/login', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('accessToken', data.token);
    })
    .catch(console.log)
  }

  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              type='password'
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </React.Fragment>
    );
  }
}

export default Login;