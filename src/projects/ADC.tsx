import ProjectHeader from "../ProjectHeader";


export default function ADC() {
    return (
        <div className='content-content'>
            
            <ProjectHeader 
            title="Assisted Draft Client"
            substring="Web App / 2022"
            tools={
                [
                    "spring",
                    "sql",
                ]
            }
            />
            
            <h3>Summary</h3>
            Assisted Draft Client is a web service created for my Software Engineering class in 2022.

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
