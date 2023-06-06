
import './App.css'
import Project from './Project'
import VRCamping from './VRCamping'
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiamiRoll from './MiamiRoll';
import DrawingBoard from './DrawingBoard';
import NavPortal from './NavPortal';


function App() {

    return (
        <>
        <Router>
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
