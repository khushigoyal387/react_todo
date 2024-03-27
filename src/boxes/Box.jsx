import { useState } from "react";
import "./boxes.css"


function Box(props) {
    const [ContentShow, setContentShow] = useState(true)

    function toggleContent() {
        setContentShow(false)
        console.log(ContentShow)

    }
    function ShowContent(e){
        e.preventDefault()
        setContentShow(!ContentShow)
    }
        return (
            <div className="box">
                <h1 onClick={toggleContent}>Box {props.number}</h1>
                <div className={ContentShow ? "content show" : "content"}>
                    <img src="https://placehold.co/250x150" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi minus pariatur ullam deserunt cum dolores est exercitationem quaerat nisi sunt eum illo nesciunt assumenda, fugiat placeat cupiditate nemo odio?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque animi at incidunt illo reiciendis optio laborum iure officiis exercitationem. Rerum, voluptatem in minima sapiente magni eligendi ipsam voluptatibus doloremque a?
                    </p>
                </div>

                <a href="">
                    <button onClick={ShowContent} className={ContentShow ? "button show" : "button"}>Show</button>
                    
                </a>
            </div>
        )
    
}

export default Box ;                   