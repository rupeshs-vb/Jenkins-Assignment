import React from 'react'
import LikeButton from './LikeButton'
import SongInformatio from './SongInformatio'
import MoreOptions from './MoreOptions'
import './CSS/SongsInfo.css'

const SongsInfo = ({songsData,DeleteElement}) => {
    return (
        <>  
            {   
            // here the songsData is map into new array that is songInfo
                songsData.map((songInfo)=>{
                    return(   
                        <div key={songInfo.id}> 
                            <div className="Song_menu">      
                                <div className="Song_information">    
                                    <SongInformatio songInfo={songInfo}/>
                                </div>
                                <div className="likebutton">
                                    <LikeButton songInfo={songInfo} />          
                                    <div className="audio_container">
                                        {/* here audio tag is defined with no media */}
                                        <div className="audio_tag">
                                            <audio controls />
                                        </div>
                                    
                                        <div className="Drop_menu">
                                            <MoreOptions songsid={songInfo} DeleteElement={DeleteElement}/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <hr/>
                        </div>
                        
                    );
                })
            }
            
        </>
    )
}

export default SongsInfo
