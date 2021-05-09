import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import {Card, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const ListOfUSers=()=>{
 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);
  return (
  
      <Card  style={{color:'black', width: '15rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" />
  <Card.Body>
    <Card.Title>users</Card.Title>
    <Card>
    {loading ? <p>...loading </p> : users.map((user) => 
    <ul>
        <li>UserName: {user.username}</li>
       
        <li>Name : {user.name}</li>
        <li>Email: {user.email}</li>
    </ul>
     )}
    </Card>
    <Button variant="primary">home</Button>
  </Card.Body>
</Card>
      
   
  );
}
export default ListOfUSers
