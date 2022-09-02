import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    let errText;
    let iconClassName;
    const exceptions = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];
    const usersInput = this.state.password;
    if (usersInput.length === 0) {
      iconClassName = 'fa-xmark';
      errText = 'A passowrd is required';
    } else if (usersInput.length < 8) {
      iconClassName = 'fa-xmark';
      errText = 'Your password is too short';
    } else if (!exceptions.some(character => usersInput.includes(character))) {
      iconClassName = 'fa-xmark';
      errText = 'Please include a special character';
      // a special character
    } else if (usersInput === usersInput.toLowerCase()) {
      iconClassName = 'fa-xmark';
      errText = 'Please include a capital letter';
    } else {
      iconClassName = 'fa-check';
      errText = '';
    }

    return (
      <div>
      <div className='container'>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="password">Password:</label>
              <br></br>
              <input onChange={this.handleChange}
              id="password" type="text"/>
          </form>
        </div>
        <div>
          <div className='mark'>
            <i className={`fa-sharp fa-solid ${iconClassName}`}></i>
          </div>
        </div>
      </div>
      <div>
        <p>{errText}</p>
      </div>
      </div>
    );
  }
}
