const ErrorMsg = ({ errorMsg }) => {
    return (
        <>
             <div className='error_msg_container'>
                <h1 style={{ height: 450, color: "blue", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30 }}>{errorMsg}</h1>
            </div>
        </>
    )
}

export default ErrorMsg

