import ProjectHeader from "../ProjectHeader";


export default function VRCamping() {
    return (
        <div className='content-content'>
            
            <ProjectHeader 
            title="VR Camping"
            substring="Video Game / 2016"
            tools={
                [
                    "unity",
                ]
            }
            />
            
            <h3>Summary</h3>
            After graduating highschool I found myself with a lot of free time. 
            I took a semester off before going to college, and I took advantage of that time by deepening my knowledge of OOP as well as learning what made a good VR user experience.
            

            <br />
            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><img src="./images/queueup.PNG" /></div>
            </div>


            <br />
        </div>
    )
}
