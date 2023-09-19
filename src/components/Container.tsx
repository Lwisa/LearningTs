type ContainerProps={
    styles:React.CSSProperties
}

function Container(props: ContainerProps){
   return(
    // styling props.... or something
    <div style={props.styles}>

      Something

    </div>
   )
}
export default Container;