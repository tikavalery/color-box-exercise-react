import React, { Component } from "react";
import "./BoxContainer.css"
import Box from "./Box"

class BoxContainer extends Component{
    static defaultProps = {
        // numBox: 18,
        numBoxArray :Array.from({length:18})
    }
    generateBox() {
        
    }


    render() {
        console.log(this.props.numBoxArray);
        return (
            <div className="boxcontainer">
                {this.props.numBoxArray.map(n=><Box/>)}
            
            </div>
        )
    }
}

export default BoxContainer;