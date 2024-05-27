import ProjectHeader from "../ProjectHeader";


export default function ADC() {
    return (
        <div className='content-content'>
            
            <ProjectHeader 
            title="Assisted Draft Client"
            substring="Web App / 2022"
            tools={
                [
                    "springboot",
                    "mysql",
                ]
            }
            />
            
            <h3>Summary</h3>
            Assisted Draft Client is a web service created for my Software Engineering class in 2022. 
            It was designed to allow users to create lobbies and simulate a pick/ban draft for the game Valorant.
            The purpose of this project was to work in a group with other classmates using agile development methods and create a finished product.
            ADC was created using Springboot to serve the API and ThymeLeaf to serve the html.
            MySQL was used to host the database and javascript was used to visualize and animate the UI.
            <br />
            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><img src="./images/ADC1.png" /></div>
                <div className='image-div pad-20px w1'><img src="./images/ADC2.png" /></div>
                <div className='image-div pad-20px w1'><img src="./images/ADC3.png" /></div>
                <div className='image-div pad-20px w1'><img src="./images/ADC4.png" /></div>
            </div>


            <br />
        </div>
    )
}
