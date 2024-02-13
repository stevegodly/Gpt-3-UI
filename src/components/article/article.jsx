import React from "react";
import './article.css';
const Article=({img,txt}) => {
    return(
        <div className="gpt3_article">
           <div className="gpt3_article-img">
            <img src={img} alt="img"/>
           </div>
           <div className="gpt3_article-text">
            <h3>{txt}</h3>
           </div>
        </div>
    )
}
export default Article;