import React from 'react'
import {css, jsx} from '@emotion/core'

/** @jsx jsx */
const InfoBox = ({icon,title,text}) => {
   return(
       <div className="col-md-6 col-sm-12">
           <div data-aos='fade-right' className="plan-box" style={{"height":"100%"}}>
               <div className="box-inner">
                   <img src={icon} className={'box-icon '} alt="plan"/>
                   <h4>{title}</h4>
                   {text}
               </div>
           </div>
       </div>
   )
};
export default InfoBox;
