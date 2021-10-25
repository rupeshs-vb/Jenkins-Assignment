import React,{useState} from 'react'

const LikeButton = ({songInfo}) => {

    /* here i created this useState for fetching the no of likes and the change 
     the no of likes while clciking to the respective logo*/
    const [likeInc,setLikeInc]=useState(songInfo.like)
    
    /* here i created this useState to tell the state of likes it
    will tell wether the button is clicked or not 
    if it will click then its state become false and not further increasing while
    click the button */
    const [likeStatus,setLikeStatus]=useState(true)

    // this useState is created for changing the color of the logo while clicking the button
    const[thumbsUp,setThumbsUp]=useState(<i className="fas fa-heart" ></i>)
    
    // here the function is created 
    const LikeInc=()=>{

        // it check wether the state is true or not if it is true then it will change the state to false while clicking the button
        if(likeStatus===true){
            setLikeInc(likeInc+1) //it increase the no of like while clicking the button if state is true
            setLikeStatus(false) //here the state is changing to the false
            setThumbsUp(<i className="fas fa-heart" style={{color:"red"}}></i>) //here the color of logo is changed
        }
        else{
            setLikeInc(likeInc-1)// it will decreasr the no of like when the like logo is clicked
            setLikeStatus(true)//here the state is changing to the true
            setThumbsUp(<i className="fas fa-heart" ></i>) //it will change the logo to its initial state
        }
    }
    return (
        <> 
        
            <h2>{likeInc}</h2>
            <h2 onClick={LikeInc}>{thumbsUp}</h2>
        </>
    )
}

export default LikeButton
