import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Movies extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <div className="container h-75 d-flex justify-content-center align-items-center flex-column">
                    <h1>counter : {this.props.counter}</h1>
                    <button onClick={this.props.increment} className="btn btn-success">increment</button>
                </div>
            </div>
        )
    }
}


function deellybtbatelstatellprops(state){
    return {counter:state.counter}
}

function deellybtbatelactionllprops(dispatch){
    return {
        increment:()=>{
            return dispatch({type:"increment"})
        }
    }
}

export default connect(deellybtbatelstatellprops , deellybtbatelactionllprops)(Movies)