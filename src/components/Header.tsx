type HeaderProp= {
    children: string
}
function Header(props: HeaderProp){
    return (  
        <div>
          <h3>{props.children}</h3>
        </div>
    )
}
 
export default Header;