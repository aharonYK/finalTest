import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';

const Main = () => {

    
    const [Message, setMessage] = useState([]);
    const [userId, setUserId] = useState(1);
    const[posts,setPosts]=useState([])

    const handleSavePosts = async () => {
        try {
          const response = await fetch('http://localhost:4000/all');
          setMessage('Posts saved successfully');
        } catch (error) {
          setMessage('Failed to save posts');
        }
      };

      const handleClick = () => {
        setUserId(userId);
      };

      const handleWantedPosts = async () => {
        try {
            console.log(userId);
          const response = await fetch(`http://localhost:4000/${userId}`);
          console.log(response);
          const data = await response.json();
           setPosts(data);
           
        } catch (error) {
          setMessage('Failed to save posts');
        }
      };

      useEffect(() => {
        handleWantedPosts();
      
   }, []);

   

    return ( 
    <div>

       <button on onClick={handleSavePosts}>ADD TO MONGO</button>
       <p></p>
       <input type="number" onChange={e => setUserId(e.target.value)} />
      <button onClick={handleClick}>Set State</button>

<table>
{posts.map(name => 
        <tr key={name.id}><td>{name.title}</td><td>{name.body}</td></tr>)}
    
</table>

    </div> 
    );
}
 
export default Main;