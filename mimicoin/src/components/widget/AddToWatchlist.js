import React, {Component} from 'react';
import axios from 'axios';
import style from '../styles/widget/AddToWatchlist.module.scss';
import {addToWatchlist} from '../../actions';

class AddToWatchlist extends Component{
  constructor(props){
    super(props);
    this.state = {isAdded: false};
  }

  handleAddButton = () => {
    this.setState({isAdded: true});
  }

  handleRemoveButton = () => {
    this.setState({isAdded: false});
  }

  renderButton(){
    if(this.state.isAdded){
      return (<div className={style.watchlistButton}>
              <a className={`${style.remove} ${style.button}`} onClick={this.handleRemoveButton}>- Watchlist</a>
              </div>);
    }
    return (<div className={style.watchlistButton}>
            <a className={`${style.add} ${style.button}`} onClick={this.handleAddButton}>+ Watchlist</a>
            </div>);
  }

  render(){
    return this.renderButton();
  }
}

export default AddToWatchlist;
