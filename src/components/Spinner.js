import React from 'react';
import loadingImage from "../data/loading.gif";

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={loadingImage} alt="loading"/>
        </div>
    )
}

export default Spinner
