import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import{updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../reducer'
import {connect} from 'react-redux'



class Wizard extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: 0,
    //     }
    // }
    // handleName(value){
    //     this.setState({name: value})
    // }
    // handleAddress(value){
    //     this.setState({address: value})
    // }
    // handleCity(value){
    //     this.setState({city: value})
    // }
    // handleState(value){
    //     this.setState({state: value})
    // }
    // handleZipcode(value){
    //     this.setState({zipcode: value})
    // }
    render(){
        return <div>
            <div>Wizard</div>
            <div><Link to='/'><button>Cancel</button></Link></div>
            <form>
                <div>Name: <input onChange={(ele) => this.props.dispatch(updateName(ele.target.value))} type='text'/></div>
                <div>Address: <input onChange={(ele) => this.props.dispatch(updateAddress(ele.target.value))} type='text'/></div>
                <div>City: <input onChange={(ele) => this.props.dispatch(updateCity(ele.target.value))} type='text'/></div>
                <div>State: <input onChange={(ele) => this.props.dispatch(updateState(ele.target.value))} type='text'/></div>
                <div>Zipcode: <input onChange={(ele) => this.props.dispatch(updateZipcode(ele.target.value))} type='text'/></div>
            </form>
                </div>
    }
}
export default connect()(Wizard)