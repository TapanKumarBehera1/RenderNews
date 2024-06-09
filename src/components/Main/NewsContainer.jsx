import DisplayNewsData from "./DisplayNewsData";

const NewsContainer = ({ data, getInputValue }) => {
    return (
        <>
            <div className="cards-container">
                {data && data.map((article, index) => {
                    if(getInputValue.length>0){
                        getInputValue.current.value = '';
                    }
                    if (!article.image) {
                        return;
                    }

                    const date = new Date(article.date).toLocaleString("en-US", {
                        timeZone: "Asia/jakarta"
                    });

                    return (
                        <DisplayNewsData key={index} article={article} date={date} />
                    )
                })
                }
            </div>
        </>
    )
}

export default NewsContainer
{/* <DataFetch /> */ }
{/* <h3 class="title-heading news-title" onclick="readMoreFnc('${article.url}')">{article.title}</h3> */ }
{/* <a href="#" id="read-more" onclick="readMoreFnc('${article.url}')"> Read more...</a> */ }