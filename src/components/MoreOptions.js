import React from 'react'
import './CSS/MoreOption.css'
const MoreOptions = ({songsid,DeleteElement}) => {
    return (
        <> 
            {/* here the drop menu is created */}
            <div className="Drop_menu">
                <button className="main_button"><i className="fas fa-caret-down"></i></button>
                <div className="Drop_menu_list">
                    <button className="list" onClick={()=>DeleteElement(songsid)}>Delete</button>
                </div>
            </div>          
        </>
    )
}

export default MoreOptions
