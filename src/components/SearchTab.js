import React,{useState} from 'react'
import './CSS/SearchTab.css'

const SearchTab = ({SearchElement}) => {
    // here i create this useSate to change the state of input field 
    const [searchSong,setSearchSong]=useState("")
    
    return (
        // here the structure of Search bar is define
        <div className="search_tag">
            <input type="text" placeholder="Search your song" 
            onChange={(event=>{setSearchSong(event.target.value)})} 
            value={searchSong}/>
            {/* here the function is declare and it will define in SongList.js */}
            <button onClick={()=>SearchElement(searchSong)}>Search</button>
        </div>
        
    )
}

export default SearchTab
