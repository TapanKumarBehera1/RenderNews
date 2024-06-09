import NewsContainer from "./NewsContainer"

const Main = ({ data, setData, getInputValue }) => {
  return (
    <>
      <main>

        <NewsContainer data={data} setData={setData} getInputValue={getInputValue} />

      </main>
    </>
  )
}

export default Main