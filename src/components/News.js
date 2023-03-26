import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  
  static defaultProps ={
    country :"in",
    pageSize:6,
    category: "general"
    
  }
static propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number ,
  category:PropTypes.string
}

 capitalizeFirstLetter = (string)=>{
   return string.charAt(0).toUpperCase() + string.slice(1);
}


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  
document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    
    
  }

async updateNews(){
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b994fa03b13a4d578a290a7e979b65a9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading:false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
}



  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    console.log("next");
    this.setState({page:this.state.page +1})
    this.updateNews()

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b994fa03b13a4d578a290a7e979b65a9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({loading:false})

    //   this.setState({
    //     articles: parsedData.articles,
    //     page: this.state.page + 1
    //   })
    // }
  }




  handlePrevClick = async () => {
    this.setState({page:this.state.page - 1})
   this.updateNews()
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b994fa03b13a4d578a290a7e979b65a9&page=${this.state.pageSize - 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1
    // })
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsMonkey - Top Headlines {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 44) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                ImageUrl={element.urlToImage} newsUrl={element.url}
                author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}>&larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
