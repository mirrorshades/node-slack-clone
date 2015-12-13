import React, { Component, PropTypes } from 'react';
import moment from 'moment'

export default class Message extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    icon: PropTypes.string
  }

  static defaultProps = {
    icon: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=Lau&w=75&h=75'
  }

  render() {
    return (
      <div className='message'>
        <a href="/" className="icon" style={{backgroundImage: 'url('+this.props.icon+')'}}></a>
        <div className="content">
          <div className="username">{this.props.username}</div>
          <div className="time">{moment(this.props.time).format('h:mm A')}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }

}
