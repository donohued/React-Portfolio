import ProjectHeader from "../ProjectHeader";


export default function MiamiRoll() {
    return (
        <div className='content-content'>

            <ProjectHeader 
            title="Miami Roll"
            substring="Video Game / 2022"
            tools={
                [
                    "unity",
                ]
            }
            />
            
            <h3>Summary</h3>
            A game made for the 2022 GMTK Game Jam. 
            The game was originally designed and developed in less than 48 hours using Unity Game Engine.
            I developed multiple systems for the game, including a dialogue system, battle system, and inventory system. 
            Along with this I also developed an event queue system that allowed easy development of game events, cutscenes, and battle setups.

            <br />
            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><a href="https://seriouslynix.itch.io/miami-roll"><img src="./images/PYvqgn.png" /></a></div>
                <div className='image-div pad-20px w1'><a href="https://img.itch.zone/aW1hZ2UvMTYyNDkzNS85NTY4NDcwLnBuZw==/original/KapEFi.png"><img src="./images/KapEFi.png" /></a></div>
                <div className='image-div pad-20px w1'><a href="https://img.itch.zone/aW1hZ2UvMTYyNDkzNS85NTY4NTQwLnBuZw==/original/%2FTZNOA.png"><img src="./images/TZNOA.png" /></a></div>
            </div>


            <br />
        </div>
    )
}
