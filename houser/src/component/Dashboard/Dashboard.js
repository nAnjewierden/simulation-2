import React,{Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            aPassedthing: 'match!'
        }
    }
    render(){
        //let housesToDisplay = this.state.houses.map(<h2>House</h2>)
        return <div>Dashboard<House/><Link to={`/wizard/${3}`}><button>Add New Property</button></Link>
        <h2>{this.props.name}</h2>
        <h2>{this.props.address}</h2>
        <h2>{this.props.city}</h2>
        <h2>{this.props.state}</h2>
        <h2>{this.props.zipcode}</h2>
        </div>
    }
}
function mapStateToProps(state){
    console.log(state)
    return({
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
    })
}
export default connect(mapStateToProps)(Dashboard)