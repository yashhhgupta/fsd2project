import {useState,useEffect} from 'react';
const UserDetails = ()=>{
    const [user, setUsers] = useState([]);

    useEffect(() => {
        const fetchitems = () => {
          fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((data) => {
              setUsers(data.users);
              console.log(data.users);
            })
            .catch((err) => {
              console.log(err);
            });
          // const data = response.json();
        };
        fetchitems();
      }, []);
    return(
        <div>
            <h1>User Details</h1>
            
        </div>
    )
}
export default UserDetails;