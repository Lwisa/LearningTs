type StatusProps={
  status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps){
    let message
    if (props.status==='loading'){
        message='Loading...'
    }
     else if (props.status==='success'){
        message='Data fetched successfully'
    }
    else if (props.status==='error'){
        message='Error fetching data'
    }
 return (
    <div> 
     <h4> Status - {message}</h4>
    
    </div>
 )
}
export default Status;