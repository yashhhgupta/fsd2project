import {useState,useEffect} from 'react';
import Navb from "../UI/Navb";
import Footer from "../UI/Footer";
import React from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const UserDetails = ()=>{
    const [user, setUsers] = useState([]);
    const [update,setUpdate] = useState(false);
    let k  = 1;
    useEffect(() => {
        const fetchitems = () => {
             fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => {
              setUsers(data.users);
              console.log(data.users)
            })
            .catch((err) => {
              console.log(err);
            });
          // const data = response.json();
        };
        fetchitems();
      }, [update]);
      const buttonHandler = async (id) => {
        const res = await fetch(`http://localhost:3001/deleteUser/` + id, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            // alert("User Deleted");
          })
          .catch((err) => {
            console.log(err);
          });
        setUpdate(!update);
      }
    return(
        <>
            <Navb />
            
                <Container>
            <Table striped bordered hover style={{marginTop:"3em"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Username</th>
          <th>phone</th>
          <th>address</th> 
          <th>Courses</th>
           
        </tr>
      </thead>
      <tbody>
        {
            
            user.length > 0 ? user.map((user)=>{
                return(
                    <tr>
                    <td>{k++}</td>
                    <th>{user.email}</th>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                        
                      {
                         user.mycourses.length > 0 ? user.mycourses.map((x, i) => {
                            return(
                                 <p key={i}>{x.title}</p>
                            )
                         }) : null
                      }
                    </td>
                    <td>
                    <Button variant="outline-danger" onClick={()=>buttonHandler(user._id)}>Delete</Button>
                    </td>
                  </tr>
                )
                
            })
            : null
        }
      </tbody>
    </Table>
    </Container>
            <Footer />
        </>

    )
}
export default UserDetails;