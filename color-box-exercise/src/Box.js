import React, { Component } from "react";
import "./Box.css"
import {choice} from "./helper"

class Box extends Component{

    static defaultProps = {
        allColor: ["purple","magenta","yellow","pink","red","green","black"]
    }
    constructor(props) {
        super(props);
        this.state = { color:choice(this.props.allColor)};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor
        do {
            newColor = choice(this.props.allColor);
        } while (newColor === this.state.color);
        this.setState({color:newColor})
    }

    handleClick() {
    this.pickColor()
}
    render() {
        return (
            <div class="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}></div>
            
        )
    }
}

export default Box