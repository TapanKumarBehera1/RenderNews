import axios from 'axios'
import './components/App.css'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useEffect, useState, useRef } from "react"
import Loader from "./components/Loader/Loader"
import Pagination from "./components/Main/Pagination"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"

const App = () => {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(false);
  let getInputValue = useRef();
  let [postsPerPage, setPostsPerPage] = useState(10);
  let [currentPage, setCurrentPage] = useState(1);


  let apiKey1 = '86e5c45a94msh94724c01540037cp1c7192jsn1ec770079faa'
  let apiKey2 = '7003f3f67emshe444a9ba0deeb3ap1ee675jsnc28da805f179'


  async function fetchData(query) {
    setData([]);
    setLoader(true);

    const options = {
      method: 'POST',
      url: 'https://google-api31.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey1 || apiKey2,
        'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
      },
      data: {
        text: query,
        region: 'wt-wt',
        max_results: 100
      }
    };

    try {
      const response = await axios.request(options);
      setData(response.data.news);
      setLoader(false);
    } catch (error) {
      setLoader(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData('india');
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const slicePosts = data.slice(firstPostIndex, lastPostIndex);

  const dataLength = data.length;
  let totalRenderPage = Math.ceil(dataLength / postsPerPage);

  return (
    <>
      <Header data={data} getInputValue={getInputValue} fetchData={fetchData} />
      <Main data={slicePosts} setData={setData} getInputValue={getInputValue} />
      {loader && <Loader />}
      <ErrorMessage data={data} loader={loader} />
      {data.length > 0 && <Pagination totalRenderPage={totalRenderPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
      <Footer />
    </>
  )
}

export default App