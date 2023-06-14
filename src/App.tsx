import './App.css'
import Project from './projects/Project'
import VRCamping from './projects/VRCamping'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiamiRoll from './projects/MiamiRoll';
import DrawingBoard from './projects/DrawingBoard';
import ADC from './projects/ADC';
import SidePortal from './SidePortal';
import TopPortal from './TopPortal';


function App() {

    return (
        <>
            <Router>

                <TopPortal />

                <div className='flex-wrapper'>

                    <SidePortal />

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
