import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AssetList} from './AssetList';
import style from '../styles/UserAssets.module.scss';

const DefaultWidget = (props) => {
  return(
    <div className={style.container}>
      <div className={style.title}>
        <h2>{props.title}</h2>
        <div className={style.label}>
          {props.headers.map(el => <p>{el}</p>)}
        </div>
      </div>
      <AssetList/>
    </div>);
}

const UserWidget = (props) => {
  return(
    <div className={style.container}>
      <div className={style.title}>
        <h2>{props.title}</h2>
        <div className={style.label}>
          {props.headers.map(el => <p>{el}</p>)}
        </div>
      </div>
      <AssetList coins={props.user.wallet.currencies} />
      <div></div>
      <h2 className={style.title}>My Watchlist: </h2>
      {/*this.renderWatchList()*/}
    </div>
  );
}

class SideWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'My Coins:',
      headers: ['Name', 'QTY', 'Value', 'Profit']
    };
  }

  renderWidget(){
    switch(this.props.user){
      case null: return;
      case false: break;
        //this.setState({title: 'Top Movers: ', headers: ['Name', 'Price', 'Volume', 'Change']});
       // return <DefaultWidget {...this.state}/>;
      default:
        return <UserWidget {...this.props} {...this.state}/>;
    }
  }
  render(){
    return (<>{this.renderWidget()}</>);
  }
}

function mapStateToProps(state){
  return {user: state.user};
}
export default connect(mapStateToProps)(SideWidget);
