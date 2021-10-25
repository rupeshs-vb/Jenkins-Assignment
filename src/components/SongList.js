import React,{useState} from 'react'
import SongsInfo from './SongsInfo'
import SongsData from './SongsData'
import AddSongs from './AddSongs'
import HeadingTag from './HeadingTag'
import SearchTab from './SearchTab'

const SongList = () => {
    // This function is made for adding the songs into the existing Data
    const addSong=(songtitle,songsubtitle)=>{
        // here i created the schema or structure of new song 
        const newSong={
            id:songsData[songsData.length-1].id+1,
            like:0,
            title:songtitle,
            subtitle:songsubtitle,
            media:" "
        }
        // here the vale of new songs with respected filed added to the existing data that
        // is songsData by the the help of setSongsData
        setSongsData([...songsData,newSong])
    }
    // this function is used for deleting the element which is clicket through more options
    const DeleteElement=(id)=>{//here the id is passed to the DeleteElement funtion 

        /*here a refId is created and which is used for filtering the data and it will
          now it will return all the value except the value of that particular id which is
          passed through DataElement id */  
        setSongsData(songsData.filter((refId)=>{
            return refId!==id;
        }))
    }

    // this function is used for Searching the songs 
    const SearchElement=(SearchedSong)=>{
        
        /* this if condition wether the Search bar id empty or not befroe
        if it is empty then it will throw alert if not the else condition runs
        */
        if(SearchedSong===""){
            alert("Please Enter Song Name")
        }else{
            // this filter the songs accordint the Searched songs
            setSongsData(songsData.filter((SearchSongName)=>{
                return (Object.values(SearchSongName).join(" ").toLowerCase()
                .includes(SearchedSong.toLowerCase()))
            }))
        }
        
    }
    const [songsData,setSongsData ] = useState(SongsData)
    
    // it will check wehter the data is empty or not if it is empty then it will throw alert 
    if(!songsData.length){
        alert("Data not found")
    }
    return (
        <>  
            {/* here Heading component is called */}
            <HeadingTag/> 

            {/* here SearchTab componet is called */}
            <SearchTab SearchElement={SearchElement}/><hr/>

            {/* here SongsInfo component is called and values and functions is passed */}
            <div className="Song_container">
            <SongsInfo songsData={songsData} DeleteElement={DeleteElement}/>
            </div>
            {/* here AddSongs component is called */}
            <AddSongs addSong={addSong}/>
        </>
    )
}

export default SongList
 