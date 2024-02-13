import React from "react";
import atlassian from 'C:/Users/user.USER/source/repos/gpt-3/src/components/assets/atlassian.png';
import google from 'C:/Users/user.USER/source/repos/gpt-3/src/components/assets/google.png';
import shopify from 'C:/Users/user.USER/source/repos/gpt-3/src/components/assets/google.png';
import slack from 'C:/Users/user.USER/source/repos/gpt-3/src/components/assets/slack.png';
import droppbox from 'C:/Users/user.USER/source/repos/gpt-3/src/components/assets/dropbox.png';
import './brand.css';
const Brand=() => {
    return(
        <div className="gpt3_brand">
            <div>
              <img src={atlassian} alt='atlassian'/>
            </div>
            <div>
               <img src={google} alt='atlassian'/>
            </div>
            <div>
               <img src={shopify} alt='atlassian'/>
            </div>
            <div>
               <img src={slack} alt='atlassian'/>
            </div>
            <div>
               <img src={droppbox} alt='atlassian'/>
            </div>
        </div>
        
    )
}
export default Brand;