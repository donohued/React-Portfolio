import { useState } from "react";
import NavPortal from "./NavPortal";
import AnimateHeight from 'react-animate-height';

export default function TopPortal() {

    const [view, setView] = useState(false)
    

    return (
        <div className='portal-top'>
            <div className='top-content'>
                <div className='dropdown-button-container'>
                    <img className='dropdown-button' src='./images/icons/menu-left-lined.svg'
                        onClick={() => { setView(!view) }}
                    ></img>
                </div>
                <div className='top-nav'>

                    <AnimateHeight
                        duration={500}
                        delay={100}
                        height={view ? 'auto' : 0}
                    >
                        <NavPortal extra={setView}/>
                    </AnimateHeight>

                </div>
            </div>

        </div>
    )
}
