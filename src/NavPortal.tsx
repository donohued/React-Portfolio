import { useNavigate } from "react-router-dom";

type NavPortalProps = {
    extra?: CallableFunction;
}
export default function NavPortal({ extra }: NavPortalProps) {
    const navigate = useNavigate();

    function changePage(page: string) {
        if (extra) {
            extra(false)
        }
        navigate(page)
    }

    return (
        <>
            School Projects
            <ol>
                <li><a onClick={() => changePage("/queueup")}>QueueUp</a></li>
                <li><a onClick={() => changePage("/adc")}>Assisted Draft Client</a></li>
            </ol>

            Game Jams
            <ol>
                <li><a onClick={() => changePage("/miamiroll")}>Miami Roll</a></li>
                <li><a onClick={() => changePage("/thedrawingboard")}>The DRAWing Board</a></li>
            </ol>
            
            Personal Projects
            <ol>
                <li><a onClick={() => changePage("/vrcamping")}>VR Camping Sim</a></li>
            </ol>

            <hr />

            About
            <ol>
                <li><a onClick={() => changePage("/resume")}>Resume</a></li>
            </ol>

            <hr />

            Socials
            <ol>
                <li><a className="external" target="_blank" href='https://donohued.github.io/'>Blog</a></li>
                <li><a className="external" target="_blank" href='https://twitter.com/SeriouslyNIX'>Twitter</a></li>
                <li><a className="external" target="_blank" href='https://github.com/donohued'>Github</a></li>
            </ol>
        </>
    )
}
