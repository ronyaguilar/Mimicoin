import React, {Component} from 'react';
import {connect} from 'react-redux';

import axios from 'axios';
import style from '../styles/NavGroup.module.scss';
window.axios = axios;


class Slug extends Component {
  constructor(props){
    super(props);
    this.state = {totalValue: 0};
  }

  componentDidUpdate(){
    let val = 0;
    if(this.props.user){
      this.props.user.wallet.currencies
        .forEach(async (coin) => {
          if(coin.id === 'USD'){
            val += coin.amount;
          } else {
            let total = 0;
            let count = 0;

            const prices = await axios.get(`https://api.nomics.com/v1/markets/prices?key=e316afa1075c427a9a44512bbd7f2c3b&currency=${coin.id}`).data;
            prices.forEach(result => {
              if(result.quote === "USD"){
                total += result.price;
                count++;
              }
            });
            val += coin.amount * (total/count);
          }
        });
    }
    if(this.state.totalValue !== val)
      this.setState({totalValue: val});
  }

  renderSlug(){
    switch(this.props.user){
      case null:
        return;
      case false:
        return (
          <li><a className={style.button} href='/auth/google'><i className="fab fa-google"></i> Continue with Google</a></li>
        );
      default:
        return (
          <li className={style.button}>${this.state.totalValue}</li>
        );
    }
  }

  render(){
    return (<div>{this.renderSlug()}</div>);
  }
}

function mapStateToProps(state){
  console.log(state.user)
  return {user: state.user};
}

export default connect(mapStateToProps)(Slug);
