import {useState,useEffect} from 'react';
import Navb from "../UI/Navb";
import Footer from "../UI/Footer";
import React from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const UserDetails = ()=>{
    const [user, setUsers] = useState([]);
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
      }, []);
    return(
        <>
            <Navb />
            
                <Container>
            <Table striped bordered hover>
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
                    <td>{user.email}</td>
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
                    <Button variant="outline-danger">Delete</Button>
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