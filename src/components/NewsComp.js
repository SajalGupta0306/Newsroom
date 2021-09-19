import React, { Component } from 'react'
import NewsItemComp from './NewsItemComp'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class NewsComp extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 15,
        category: "general"
      }

    static propType = {
        country: PropTypes.string,
        package: PropTypes.array,
        category:PropTypes.string
    }

    constructor(){
        super();
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
    }

    updateNewsData = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            articles: jsonData.articles,
            totalResults: jsonData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            articles: this.state.articles.concat(jsonData.articles),
            totalResults: jsonData.totalResults
        })
      };

    // in-built method: called after render() method
    async componentDidMount(){
        this.updateNewsData();
    }

    // handlePrevClick = async () => {
    //    this.setState({
    //        page: this.state.page - 1
    //    });
    //    this.updateNewsData();
    // }

    // handleNextClick= async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     });
    //     this.updateNewsData();
    // }
    
    /* usage of infinite scroll in the appliaation*/
    render() {
        document.title=this.props.category + " - Newsroom";
        return (   
            <>
            {/* // < className="container my-3"> */}
                <h1 className="text-center">NewsRoom - Latest {this.props.category} Headlines</h1>
                {this.state.loading && <Spinner/> }
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                >
                <div className="container">
                    <div className="row">
                    {this.state.articles.map((element) => {
                            return <div className="col-md-4"  key={element.url}>
                            <NewsItemComp title={element.title} description={element.description} imageUrl={element.urlToImage} 
                            newsUrl={element.url} author={element.author} datePubished={element.publishedAt}/>          
                        </div>
                    })}
                    </div>  
                </div>
        </InfiniteScroll>
                {/* <div className="container my-3 d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/18)} id="nextBtn" type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
            {/* </div> */}
            </>
        )
    }
}

export default NewsComp
