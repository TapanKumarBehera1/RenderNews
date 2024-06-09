import './Pagination.css'

const Pagination = ({ totalRenderPage, setCurrentPage, currentPage }) => {
    let pages = [];
    for (let i = 1; i <= totalRenderPage; i++) {
        pages.push(i)
    }

    return (
        <>
            <div id='btns-container'>
                {pages[0] !== currentPage && <span onClick={() => setCurrentPage(currentPage - 1)}><i className="fa-solid fa-angles-left"></i></span>}

                <div id='btns-box'>
                    {pages && pages.map((page, index) => {
                        return (
                            <button id={currentPage === page ? 'active' : ''} className="btns" key={index} onClick={() => setCurrentPage(page)} >{page}</button>
                        )
                    })}
                </div >
                {pages.length !== currentPage && <span onClick={() => setCurrentPage(currentPage + 1)}><i className="fa-solid fa-angles-right"></i></span>}
            </div>
        </>
    )
}

export default Pagination
// {pages[0] !== currentPage && <button onClick={() => setCurrentPage(currentPage - 1)}>Prev </button>}
// {pages.length !== currentPage && <button onClick={() => setCurrentPage(currentPage + 1)}> Next </button>}