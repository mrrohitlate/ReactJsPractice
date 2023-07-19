function Props(Props){
    return(
        <div style={{backgroundColor:'skyblue'}}>
        <p>hello {Props.name}</p>
        <b>hello hii email is {Props.email}</b>
        <p>hello I'm from {Props.address}</p>
            <p>hello I'm from {Props.other.Number}</p>

        </div>
    )
}

export default Props;