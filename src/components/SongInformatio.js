import React from 'react'
import './CSS/SongsInfo.css'

const SongInformatio = ({songInfo}) => {
    return (
        // here the structure of song title and subtitle is created and it will fetch the data from songInfo after mapping
        <div className="Main_div">
            <div className="songs_bio">
            <div className="Song_title">
                {songInfo.title} 
            </div>
            <div className="Song_subtitle">
                {songInfo.subtitle}
            </div>
            </div>
        </div>
    )
}

export default SongInformatio
