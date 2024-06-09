import '../App.css'
const DataDisplay = ({ article, date }) => {
  return (
    <>
      <div className="card-container">
        <div id="card-img-container">
          <img src={article.image} alt="image" className="news-img" />
        </div>
        <div>
          <h3 className="title-heading news-title" onClick={() => window.open(article.url, '_blank')}>{article.title}</h3>
          <p className="date-data news-source"><span id="publish-owner">{article.source}</span> | {date}</p>
          <p className="news-desc news-desc">{article.body}</p>
        </div>
        <a href="#" id="read-more" onClick={() => window.open(article.url, '_blank')}> Read more...</a>
      </div>
    </>
  )
}

export default DataDisplay