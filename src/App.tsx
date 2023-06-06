
import './App.css'
import Project from './Project'
import VRCamping from './VRCamping'
import { useNavigate, BrowserRouter as Routes, Route } from "react-router-dom";
import MiamiRoll from './MiamiRoll';
import DrawingBoard from './DrawingBoard';


function App() {
    const navigate = useNavigate();

    return (
        <>
                <div className='flex-wrapper'>
                    <div className='portal-side'>

                        <div className='portal-content'>

                            <div className='fixed-sidebar'>
                                <h2>David Donohue</h2>
                                <hr />

                                Software developer.
                                <hr />

                                Projects
                                <ol>
                                    <li><a onClick={() => navigate("/queueup")}>QueueUp</a></li>
                                    <li><a onClick={() => navigate("/vrcamping")}>VR Camping Sim</a></li>
                                    <li><a onClick={() => navigate("/adc")}>ADC</a></li>
                                    <li><a onClick={() => navigate("/miamiroll")}>Miami Roll</a></li>
                                    <li><a onClick={() => navigate("/thedrawingboard")}>The DRAWing Board</a></li>
                                </ol>

                                <hr />

                                Socials
                                <ol>
                                    <li><a href='https://twitter.com/SeriouslyNIX'>Twitter</a></li>
                                    <li><a href='https://github.com/donohued'>Github</a></li>
                                </ol>
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
        </>
    )
}

export default App
