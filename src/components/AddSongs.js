import React,{useState} from 'react'
import './CSS/Addsongs.css'

// here Addsongs funnction is mader here props is passed as addSong
const AddSongs = (addsong) => {
    
    //here i create useState for input song name 
    const [songName,setSongName]=useState("")

    // here i created useState for input subtitle
    const [songSubtitle,setSongSubtitle]=useState("")
    
    // this function call on the click of submit button
    const AddSongs=()=>{

        // it wether the songName and Subtitle name field is empty or not if it is emty then it call alert
        if(!songName || !songSubtitle){
            alert("Please Enter Your Song Name Subtitle")
        }else{
            // here the vale of value songName,songSubtitle is passed to the addSong function which is declared in
            // which is declared in SongList.js file
            addsong.addSong(songName,songSubtitle);
            setSongName("") // it make input field empty after click submit button
            setSongSubtitle("") // it make input field empty after click submit button
        }
    }
    return (
        <>  
            {/* here the structure or schema of input field is create */}
            <div className="main_div">
            <div className="Add_Songs">
                <i className="fas fa-plus"></i>
            </div>
            <div className="Adding_song">
            <div className="Song_name">
                <label >Enter Song Name: </label><br/>
                <input type="text" 
                className="Enter_song"
                value={songName}
                onChange={(event)=>{setSongName(event.target.value)}}
                /><br/>
            </div>
            <div className="New_Song_subtitle">
                <label >Enter Subtitle: </label><br/>
                <input type="text" 
                className="Song_subtitle_div"
                value={songSubtitle}
                onChange={(event)=>(setSongSubtitle(event.target.value))}
                /><br/>
            </div>
            <div className="submit">
                <button onClick={AddSongs}>Submit</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default AddSongs
