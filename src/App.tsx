import './App.css'
import Project from './projects/Project'
import VRCamping from './projects/VRCamping'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiamiRoll from './projects/MiamiRoll';
import DrawingBoard from './projects/DrawingBoard';
import ADC from './projects/ADC';
import SidePortal from './SidePortal';
import TopPortal from './TopPortal';
import Resume from './about/Resume';
import CV from './about/CV';


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

                            <Route path="/resume" element={<Resume />} />
                            <Route path="/cv" element={<CV />} />
                        </Routes>

                    </div>

                </div >
            </Router>

        </>
    )
}

export default App
