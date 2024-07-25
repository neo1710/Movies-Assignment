import './Slider.css'
import video from "../Media/videoplayback.mp4"

export const Slider=()=>{

    return <div className="slider">

        <p>Explore everything about your favorite movies.</p>
        <div className="video">
        <video className='video-background' autoPlay loop muted>
    <source src={video} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
  <p><img style={{width:"100%"}}
   src="https://www.freepnglogos.com/uploads/marvel-logo-png/new-marvel-studios-logo-debuted-marvelstudios-3.png" alt="" /></p>
        </div>
    </div>
}