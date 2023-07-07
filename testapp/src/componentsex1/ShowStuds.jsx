ShowStuds(props) {
      
    let students = props.studs.map(el => {
        <div className={el.gender == "m" ? "bg-blue-400 flex flex-col justify-start rounded-xl p-4": "bg-pink-400 flex flex-col rounded-xl p-4"} key={el.fullname}><span>Fullname: {el.fullname}</span><span>Average: {el.avg}</span></div>
    })

 
    return(
        <>
        {}
        </>)
}
export default ShowStuds