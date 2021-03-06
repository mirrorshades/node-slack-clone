import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AuthPage from './AuthPage'
import ChatroomPage from './ChatroomPage'

import * as Actions from '../actions/actions'

class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app">
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    messages: state.messages,
    channels: state.channels,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
