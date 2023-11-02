import React from 'react'
import "../styles/menu.css"
import {MenuList} from "../helpers/MenuList"
import MenuItem from '../components/MenuItem'

export default function Menu() {

    return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((item,key) => {
                return(
                <MenuItem 
                key = {key}
                image = {item.image}
                name = {item.name}
                price = {item.price}
                />
                )
            })}
        </div>
    </div>
  )
}
