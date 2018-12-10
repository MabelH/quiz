import React, { Fragment } from 'react'
import UserImage from './img/user.svg'

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isUsernameValid: null,
      isPasswordValid: null,
      wasValidated: false
    }

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)

    this.form = React.createRef()

    this.onSubmit = this.onSubmit.bind(this)
  }

  onUsernameChange(event) {
    this.setState({ wasValidated: false })
    this.setState({ username: event.target.value })
  }

  onPasswordChange(event) {
    this.setState({ wasValidated: false })
    this.setState({ password: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()

    this.setState({ wasValidated: true })

    if (this.form.current.checkValidity()) {
      const { username, password } = this.state
      this.props.handleSubmit({ username, password })
    }
  }

  render() {
    const { username, password, wasValidated } = this.state
    const { onUsernameChange, onPasswordChange, onSubmit } = this

    return (
      <Fragment>
        <div className="text-center">
          <img src={UserImage} alt="User SignIn Image" />
          <h3 className="mt-5">{this.props.title}</h3>
        </div>

        <form
          ref={this.form}
          onSubmit={onSubmit}
          className={wasValidated ? 'was-validated' : 'needs-validation'}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={onUsernameChange}
              value={username}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={onPasswordChange}
              value={password}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">{this.props.submitText}</button>
        </form>
      </Fragment>
    )
  }
}