import { useState } from 'react'
import '../App.css'

let categories = ["sports", "finance", "politics", "technology", "bollywood", "entertainment", "trending"]
const Category = ({ categoryFnc }) => {
    
    let [categoryData, setCategoryData] = useState(categories)

        let [arrayCategory, setArrayCategory] = useState("")

        function categoryClick(category) {
            setArrayCategory(category)
            categoryFnc(category)
        }

    return (
        <>
            {categoryData && categoryData.map((category, index) => {
                let searchOptions = category[0].toUpperCase() + category.slice(1)

                return (
                        <div key={index} id={arrayCategory === category ? "categoryColorAdded" : category} onClick={() => categoryClick(category)}>{searchOptions}</div >
                )
            })}
        </>
    )
}

export default Category

//==================================================================//
//==================================================================//
{/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, marginBottom: 15,backgroundColor:"whitesmoke" }}>
{pages &&
  <>
    {pages[0] !== currentPage && <div onClick={() => setCurrentPage(currentPage - 1)}><ArrowBackIosOutlinedIcon></ArrowBackIosOutlinedIcon></div>}
    {pages.map((page, index) => {
      return (
        <>
          <div id={currentPage === page ? 'activePage' : ''} className={"pageBtns"} key={index} onClick={() => setCurrentPage(page)}>{page}</div>
        </>
      )
    })
    }
    {pages.length !== currentPage && <div onClick={() => setCurrentPage(currentPage + 1)}><ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon></div>}
  </> */}
//==================================================================//
//==================================================================//
// import { useState } from 'react'
// import '../App.css'

// const Category = ({ categoryFnc }) => {
//     let categories = ["politics", "technology", "bollywood", "entertainment", "trending"]



//     return (
//         <>
//             <div id="sports" onClick={() => categoryFnc("sports")}>Sports </div >
//             <div id="finance"  onClick={() => categoryFnc("finance")}>Finance </div >
//             <div id="politics" onClick={() => categoryFnc("politics")}> Politics</div >
//             <div id="technology"  onClick={() => categoryFnc("technology")}>Technology </div >
//             <div id="bollywood"  onClick={() => categoryFnc("bollywood")}>Bollywood </div >
//             <div id="entertainment" onClick={() => categoryFnc("entertainment")}> Entertainment</div >
//             <div id="trending"  onClick={() => categoryFnc("trending")}>Trending </div >
//         </>
//     )
// }

// export default Category