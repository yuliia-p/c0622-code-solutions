import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuView: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    !this.state.menuView ? this.setState({ menuView: true }) : this.setState({ menuView: false });
  }

  render() {
    const menuClassName = this.state.menuView ? 'on' : 'off';
    return (
      <div className='container'>
        <div className='icon-div'>
          <i onClick={this.handleClick}
            className="hover margin-left menu-button fa-solid fa-bars"></i>
        </div>
        <div onClick={this.handleClick}
        className={`menu ${menuClassName}`}>
          <div onClick={this.handleClick}
          className="menu-content hover">
            <h3>Menu</h3>
            <ul>
              <li onClick={this.handleClick}
              className='hover'>About</li>
              <li onClick={this.handleClick}
              className='hover'>Get Started</li>
              <li onClick={this.handleClick}
              className='hover'>Sign In</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
