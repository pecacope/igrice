import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/Games';
import './dashboard.scss';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange (e) {
    e.preventDefault();
    const {term} = this.state;
    this.props.fetchGameData(term);
    console.log('Ovo se ispisuje', term);
  }

  render () {
    return (
      <form className='container' onSubmit={this.onInputChange}>
        <input onChange={event => this.setState({term: event.target.value})} />
        <button className='btn btn-default pull-right' type='submit'>Pošalji</button>
        <div />
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {
    successMessage: state.successReducer.successMessage,
    errorMessage: state.errorReducer.errorMessage
  };
}

export default connect(mapStateToProps, actions)(Dashboard);
