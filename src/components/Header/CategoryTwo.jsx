import { useState } from "react"

let categoriesTwo = ["cricket", "business", "tech"]
const CategoryTwo = ({ categoryFnc }) => {


    let [categoryDataTwo, setCategoryDataTwo] = useState(categoriesTwo)

    let [arrayTwoCategory, setArrayTwoCategory] = useState("")

    function categoryTwoClick(category) {
        setArrayTwoCategory(category)
        categoryFnc(category)
    }

    return (
        <>
            {categoryDataTwo && categoryDataTwo.map((category, index) => {
                let searchOptions = category[0].toUpperCase() + category.slice(1)

                return (
                        <div key={index} id={arrayTwoCategory === category ? "categoryColorAdded" : category} onClick={() => categoryTwoClick(category)}>{searchOptions}</div >
                )
            })}
        </>
    )
}

export default CategoryTwo






// const CategoryTwo = ({ categoryFnc }) => {
//     return (
//         <>
//             <div id="cricket" onClick={() => categoryFnc("cricket")}>Cricket</div>
//             <div id="business" onClick={() => categoryFnc("business")}>Business</div>
//             <div id="tech" onClick={() => categoryFnc("tech")}>Tech</div>
//         </>
//     )
// }

// export default CategoryTwo