
type GreetProps={
     name : string
     messageCount : number
     isLoggedin: boolean
    
}

function Greet( props: GreetProps){
    return(
        <div> 
            <h3>
                {props.isLoggedin
                ?`Goodmorning ${props.name}! You have {props.messageCount} unread emails` 
                : `Welcome Guest`}
            </h3>
        </div>
    )
}
export default Greet;