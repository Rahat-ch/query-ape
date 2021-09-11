const Form = ({ value, handleSubmit, setToken }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Enter Ape Token Number to Validate Ownership</h1>
            <input type="number" value={value} onChange={(e) => setToken(e.target.value)} />
            <input type="submit" value= "validate"/>
        </form>
    )
}

export default Form