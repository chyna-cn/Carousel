import React from "react";
import ImageList from "./ImageList";
import './Changer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

class Changer extends React.Component {
    state = {Current: 0 };

    render() {
        const Next = () => {
            const newCurrent=this.state.Current=== ImageList.length-1 ? 0 :this.state.Current+1;
            this.setState({ Current:newCurrent })
        }
        const Prev = () => {
            const newCurrent=this.state.Current=== 0 ? ImageList.length-1:this.state.Current-1;
            this.setState({ Current:newCurrent })
        }
        return (
            <div className='box'>
                <FontAwesomeIcon icon={faArrowLeft} size = '6x' onClick={Prev}/>
                <img src={ImageList[this.state.Current]} alt='pic'/>
                <FontAwesomeIcon icon={faArrowRight} size = '6x' onClick={Next}/>
            </div>
        )
    }
}

export default Changer