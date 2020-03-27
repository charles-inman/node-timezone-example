
export default ({icon, onClick}) => {

    return (
        <button className='circle-button' onClick={onClick}>
            <i className={"fas " + icon}></i>
        </button>
    )
}