import React  from 'react'

const NewsItem=(props)=>{

      let {title, description, ImageUrl, newsUrl, author, date} =props;

    return (
      <div className='my-3'>
        <div className="card">
          <img src={ImageUrl?ImageUrl:"https://images.moneycontrol.com/static-mcnews/2023/03/stocks_market-stock_stock-770x433.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>      
      </div>
    )
  
} 

export default NewsItem; 
