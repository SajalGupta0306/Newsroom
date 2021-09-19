import React from 'react'
import newsImage from "../data/blank_news.jpeg"

const NewsItemComp = (props) => {
    let {title, description, imageUrl, newsUrl, author, datePubished} = props;
    return (
        <div className="card" style={{marginBottom: "5px", border: "solid"}}>
            <img src={(imageUrl == null) ? newsImage: imageUrl} className="card-img-top" alt="Not Available"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-muted">Author: {!author ? "Unknown" : author}</small>
                    <br></br>
                    <small className="text-muted">Published At: {new Date(datePubished).toDateString()}</small>
                </p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>         
    )
}

export default NewsItemComp
