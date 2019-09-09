import React, {Component} from 'react';
import {connect} from 'react-redux';

import {formatDollars2} from '../utils/helper';
import axios from 'axios';
import style from '../styles/header/NavGroup.module.scss';

class Slug extends Component {
  constructor(props){
    super(props);
    this.state = {totalValue: 0};
  }

  async calcTotalVal(){
    let val = 0;
    if(this.props.user) {
      for(const coin of this.props.user.wallet.currencies){
        if(coin.id === 'USD'){
          val += coin.amount;
        }
        else {
          let total = 0;
          let count = 0;
          const prices = await axios.get(`https://api.nomics.com/v1/markets/prices?key=${process.env.REACT_APP_NOMICS_KEY}&currency=${coin.id}`);
          await prices.data.forEach(result => {
            if(result.quote === "USD"){
              total += parseFloat(result.price);
              count++;
            }
          });
          val += coin.amount * (total/count);
        }
      }
      console.log(val);
    }
    return val;
  }

  async updateTotal(){
    const total = await this.calcTotalVal();
    if(this.state.totalValue !== total){
      this.setState({totalValue: total});
    }
  }

  componentDidMount(){
    this.updateTotal();
  }

  componentDidUpdate(){
      this.updateTotal();
  }

  renderSlug(){
    switch(this.props.user){
      case null:
        return;
      case false:
        return (
          <li><a style={{textDecoration: "none", color: "white"}} className={style.button} href='/auth/google'><i className="fab fa-google"></i> Continue with Google</a></li>
        );
      default:
        return (
          <li className={style.button}>${formatDollars2(this.state.totalValue)}</li>
        );
    }
  }

  render(){
    return (<>{this.renderSlug()}</>);
  }
}

function mapStateToProps(state){
  return {user: state.user};
}

export default connect(mapStateToProps)(Slug);
