import React from 'react'
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
)

const mapStateToProps = state => state

export default connect(
  mapStateToProps
)(Home)
