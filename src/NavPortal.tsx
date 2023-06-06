import { useNavigate} from "react-router-dom";

export default function NavPortal() {
        const navigate = useNavigate();

  return (
    <>
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
    </>
  )
}
