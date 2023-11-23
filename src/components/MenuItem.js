import React from 'react'
import "../styles/menuitem.css"

function MenuItem({image,title, price}) {
  return (
   
     <article>
     <div className="article-wrapper">
       <figure>
         <img src={image} alt="logo" />
       </figure>
       <div className="article-body">
         <h2>{title}</h2>
         <p>{price} $</p>
       </div>
     </div>
   </article>
  )
}

export default MenuItem
