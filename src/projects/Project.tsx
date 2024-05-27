import ProjectHeader from '../ProjectHeader';

export default function Project() {
    return (
        <div className='content-content'>

            <ProjectHeader 
            title="PROJECT NAME"
            substring="Web App / 2023"
            tools={
                [
                    "react",
                    "mysql",
                ]
            }
            />

            <h3>Summary</h3>
            Summary to be written.

            <br />

            Visit it here: <a href='https://queueup.app'>https://queueup.app</a>

            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><img src="./images/queueup.PNG" /></div>
            </div>


            <br />
        </div>
    )
}
