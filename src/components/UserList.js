import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser({ name, website, company }) {
    return (
      <div key={name} style={styles.card} className="card card-block">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{company.name}</p>
        <a href={website} className="btn btn-primary">Website</a>
      </div>
    )
  }
  
  render() {
    return (
      <div style={styles.container}>
        {this.props.users.map(this.renderUser)}
      </div>  
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  card: {
    width: '30%',
    minWidth: '300px'
  }
}

export default connect(({ users }) => {
  return {
    users
  } 
}, actions)(UserList)
