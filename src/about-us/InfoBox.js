import React from 'react'
import {css, jsx} from '@emotion/core'

/** @jsx jsx */
const InfoBox = ({icon,title,animation}) => {
   return(
       <div className="col-md-6 col-sm-12">
           <div data-aos='fade-right' className="plan-box">
               <div className="box-inner">
                   <img src={icon} className={'box-icon '} alt="plan"/>
                   <h4>{title}</h4>

                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi facilis nihil
                   optio
                   provident, saepe. Alias aperiam atque distinctio, itaque natus necessitatibus qui
                   suscipit
                   velit? Eius mollitia nulla quam quos.
               </div>
           </div>
       </div>
   )
};
export default InfoBox;
