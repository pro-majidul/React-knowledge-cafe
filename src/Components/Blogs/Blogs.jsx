import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handelBookmarks ,handelReadingTime}) => {
    const [blogs , setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
           {
            blogs.map(blog => <Blog
                 key={blog.id} 
                 blog={blog}
                 handelBookmarks={handelBookmarks}
                 handelReadingTime={handelReadingTime}
                 ></Blog>)
           }
        </div>
    );
};
Blogs.propTypes ={
    handelBookmarks:PropTypes.func.isRequired,
    handelReadingTime:PropTypes.func.isRequired
}
export default Blogs;