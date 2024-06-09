import SearchBar from './SearchBar'
import Category from './Category'
import CategoryTwo from './CategoryTwo'
import '../App.css'
import Weblogo from '../images/logo.png'
import MenuLogo from '../images/menuicon.png'
import MenuCloseLogo from '../images/closeicon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ data, getInputValue, fetchData }) => {

    function categoryFnc(data) {
        fetchData(data);
    }


    let [toggleMenu, setToggleMenu] = useState(true)
    function toggleOpenCloseMenuFnc() {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav>
                <div className="container">

                    <Link onClick={() => window.location.reload()}>
                        <img src={Weblogo} alt="logo" id="web-logo" />
                    </Link>


                    <div className="category">
                        {toggleMenu &&
                            <Category categoryFnc={categoryFnc} />
                        }
                    </div>

                    {!toggleMenu &&
                        <div id="categoryTwo">
                            <div id="categoryTwo-box">
                                <div>
                                    <CategoryTwo categoryFnc={categoryFnc} />
                                </div>
                            </div>
                        </div>
                    }

                    {toggleMenu &&
                        <div className="search-container">
                            <SearchBar data={data} getInputValue={getInputValue} fetchData={fetchData} />
                        </div>
                    }

                    <div id='menutoggleicons' onClick={toggleOpenCloseMenuFnc}>
                        {!toggleMenu ?
                            <img src={MenuCloseLogo} alt="close" width="24px" height="24px" />
                            :
                            <img src={MenuLogo} alt="" width="24" height="28" style={{ marginLeft: 5 }} />
                        }
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header


//============================================================///
//============================================================///
//============================================================///
// import SearchBar from './SearchBar'
// import Category from './Category'
// import CategoryTwo from './CategoryTwo'
// import '../App.css'
// import Weblogo from '../images/logo.png'
// import MenuLogo from '../images/menuicon.png'
// import MenuCloseLogo from '../images/closeicon.png'
// // import { useState } from 'react'

// const Header = ({ data, getInputValue, fetchData }) => {

//     // let [color, setColor] = useState(false);

//     function categoryFnc(data) {
//         fetchData(data);
//     }

//     function menuOpenFnc() {
//         let accessSearchConatiner = document.querySelector(".search-container");
//         accessSearchConatiner.style.display = "none";
//         let accessCategory = document.querySelector(".category");
//         accessCategory.style.display = "none";
//         let accessMenuButton = document.querySelector("#menu");
//         accessMenuButton.style.display = "none";
//         let accessCategoryTwo = document.querySelector("#categoryTwo");
//         accessCategoryTwo.style.display = "inline";
//     }
//     function menuCloseFnc() {
//         let accessSearchConatiner = document.querySelector(".search-container");
//         accessSearchConatiner.style.display = "inline";
//         let accessCategory = document.querySelector(".category");
//         accessCategory.style.display = "inline";
//         let accessMenuButton = document.querySelector("#menu");
//         accessMenuButton.style.display = "inline";
//         let accessCategoryTwo = document.querySelector("#categoryTwo");
//         accessCategoryTwo.style.display = "none";
//     }



//     return (
//         <>
//             <nav>
//                 <div className="container">
//                     <a href="" onClick={() => window.location.reload()}>
//                         <img src={Weblogo} alt="logo" id="web-logo" />
//                     </a>

//                     <div className="category">
//                         <Category categoryFnc={categoryFnc} />
//                     </div>


//                     <div id="categoryTwo">
//                         <div id="categoryTwo-box">
//                             <div>
//                                 <CategoryTwo categoryFnc={categoryFnc} />
//                             </div>
//                             <div id="closeIcon" className="closetab" onClick={menuCloseFnc}>
//                                 <img src={MenuCloseLogo} alt="close" width="24px" height="24px" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="search-container">
//                         <SearchBar data={data} getInputValue={getInputValue} fetchData={fetchData} />
//                     </div>

//                     <div id="menu" onClick={menuOpenFnc}>
//                         <img src={MenuLogo} alt="" width="24" height="28" />
//                     </div>

//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header