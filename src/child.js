import "./data-table.css";
function Child(props){
    
    return( 
    <div>
        <table>
        <tr>
          <th>id</th>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP_address</th>
          <th>image</th>
        </tr>
          {props.tabledata.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item. email}</td>
                <td>{item.gender}</td>
                <td>{item. ip_address}</td>
                <img src={item.image}></img>
            </tr>
          ))}
        </table>
    </div>
      )
      
}
export default Child;