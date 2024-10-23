import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-11/12 mx-auto py-5">
            <h3>blogs length : {blogs.length}</h3>
        </div>
    );
};

export default Blogs;