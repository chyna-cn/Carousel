import React from "react";
import ImageList from "./ImageList";
import './Changer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

class Changer extends React.Component {
    state = {Current: ImageList[0]};

    render() {
        const Next = () => {
            this.setState({Current = 0 ? ImageList.length - 1 : Current + 1 })
        }
        const Prev = () => {
            this.setState({Current = 0 ? ImageList.length - 1 : Current - 1 })
        }
        return (
            <div className='box'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={Prev}/>
                <img src={this.state.Current} alt='pic'/>
                <FontAwesomeIcon icon={faArrowRight} onClick={Next}/>
            </div>
        )
    }
}

export default Changer