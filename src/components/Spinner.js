import React, { Component } from 'react';
import loadingImage from "../data/loading.gif";

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loadingImage} alt="loading"/>
            </div>
        )
    }
}

export default Spinner
