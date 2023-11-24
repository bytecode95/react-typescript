import { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard"
import { PropsType } from "../../types/types";


export default function PostList(){

    const [data, setData] = useState<PropsType[]>([]);


    useEffect (()=>{
        getData();
    },[])

    const getData = async() =>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
            const result = await response.json();
            setData(result)

        } catch (error) {
            console.log("Error getting data");
        }  
    }


    return(
        <>
            <h1 style={{textAlign:'center'}}>Post List</h1>
            {
                data.map((post)=>(
                    <PostCard key={post.id} {...post} /> 
                ))
            }
        
        </>
    )
}