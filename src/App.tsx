import './App.css'
import Project from './projects/Project'
import VRCamping from './projects/VRCamping'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiamiRoll from './projects/MiamiRoll';
import DrawingBoard from './projects/DrawingBoard';
import NavPortal from './NavPortal';
import ADC from './projects/ADC';


function App() {

    return (
        <>
            <Router>

                <div className='portal-top'>
                    <div className='top-content'>
                        <div className='dropdown-button'>
                            V
                        </div>
                        <div className='top-nav'>
                                <NavPortal />
                        </div>
                    </div>
                    
                </div>

                <div className='flex-wrapper'>
                    <div className='portal-side'>

                        <div className='portal-content'>

                            <div className='fixed-sidebar'>
                                <h2>David Donohue</h2>
                                <hr />

                                Software developer.
                                <hr />

                                <NavPortal />

                            </div>
                        </div>

                    </div>



                    <div className='content-side'>

                        <Routes>
                            <Route path="/*" element={<Project />} />
                            <Route path="/queueup" element={<Project />} />
                            <Route path="/adc" element={<ADC />} />
                            <Route path="/vrcamping" element={<VRCamping />} />
                            <Route path="/miamiroll" element={<MiamiRoll />} />
                            <Route path="/thedrawingboard" element={<DrawingBoard />} />
                        </Routes>

                    </div>

                </div >
            </Router>

        </>
    )
}

export default App
