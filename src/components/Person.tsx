type PersonProps={
    name:{
        first:string
        last: string
    }
}

function Person( props: PersonProps){
    return(
        <div>
        <h3> I am {props.name.first} {props.name.last} </h3>
        </div>
    )
}
export default Person;