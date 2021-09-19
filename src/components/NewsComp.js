import React, {useState, useEffect} from 'react'

import NewsItemComp from './NewsItemComp'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComp = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        document.title=props.category + " - Newsroom";
        updateNewsData();
        // eslint-disable-next-line
    }, [])

    const updateNewsData = async ()=> {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(jsonData.articles);
        setTotalResults(jsonData.totalResults);
        setLoading(false);
    };

    const fetchMoreData = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(articles.concat(jsonData.articles));
        setTotalResults(jsonData.totalResults);
      };

    return (   
        <>
            <h1 className="text-center">NewsRoom - Latest {props.category} Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4"  key={element.url}>
                                <NewsItemComp title={element.title} description={element.description} imageUrl={element.urlToImage} 
                                newsUrl={element.url} author={element.author} datePubished={element.publishedAt}/>          
                            </div>
                        })}
                    </div>  
                </div>
            </InfiniteScroll>
        </>
    )
}

NewsComp.defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general"
  }

NewsComp.propType = {
    country: PropTypes.string,
    package: PropTypes.array,
    category:PropTypes.string
}

export default NewsComp
