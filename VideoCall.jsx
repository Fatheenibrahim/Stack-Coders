import React from "react"
import "../Components/VideoCall.css"
import p4 from '../image/p4.png'

function VideoCall(){
    return(
        <div class="MasterMain">
            <div class="VideoMain">
                <br></br><br></br>
                <h1 class="VideoCallHeading">Video Call</h1>
            </div>
            <div class="dummyImage">
                <img class="videoimg" src={p4} />
            </div>
            <div class="callControlImage">
                <img src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-vector-illustration-of-a-flat-design-video-call-icon-with-thin-lines-representing-a-technology-concept-vector-png-image_47182212.jpg" />
            </div>
        </div>
    )
}

export default VideoCall;