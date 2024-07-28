import React, { Component } from 'react'


export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,published}=this.props;
    return (
      <div className="my-3"><div className="card" >
      <img src={imageUrl?imageUrl:"https://cdn.abcotvs.com/dip/images/15097350_072524-wls-ballys-buyout-10vo-vid.jpg?w=1600"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">{new Date(published).toGMTString()}</small></p>
        <a rel="noreferel" href={newsUrl} target=" blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem