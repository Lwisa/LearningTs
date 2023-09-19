type InputProps={
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

function Input(props:InputProps){
    return(
        <div>   
            <input type="text" value={props.value} onChange={props.handleChange}/>

        </div>
    )
}
export default Input;