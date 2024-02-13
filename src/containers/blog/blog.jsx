import React from "react";
import './blog.css';
import {blog1,
    blog2,
    blog3,
    blog4,
    blog5} from "C:/Users/user.USER/source/repos/gpt-3/src/containers/blog/import.js";
import Article from "C:/Users/user.USER/source/repos/gpt-3/src/components/article/article.jsx";
const Blog = () => {
    return(
        <div className="gpt3__blog section__padding">
           <div className="gpt3__blog-container1">
            <Article img={blog1}txt="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
           </div>
           <div className="gpt3__blog-container2">
               <Article img={blog2} txt="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
               <Article img={blog3} txt="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
           </div>
           <div className="gpt3__blog-container3">
               <Article img={blog4} txt="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
               <Article img={blog5} txt="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
           </div>
        </div>
    )
}
export default Blog;