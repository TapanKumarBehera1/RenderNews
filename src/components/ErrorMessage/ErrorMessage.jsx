import '../App.css'
const ErrorMessage = ({ data, loader }) => {

    return (
        <>
            <div className='error_msg_container'>
                {(data.length === 0 && !loader) && <h2 id='array-zero'>There is no post in this keyword</h2>}
            </div>
        </>
    )
}

export default ErrorMessage