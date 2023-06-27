import ProjectHeader from '../ProjectHeader';

export default function Project() {
    return (
        <div className='content-content'>

            <ProjectHeader 
            title="QueueUp"
            substring="Web App / 2023"
            tools={
                [
                    "react",
                    "mysql",
                ]
            }
            />

            <h3>Summary</h3>
            For my Senior Capstone, I and two others worked together to develop a ready for production web service known as QueueUp.
            QueueUp allows players of the game League of Legends to find team-mates that can fill the gap in their strategies.
            We do this by using the Riot API to cache their previous match data to determine their skill and play style.
            With this information we match players together that have a similar level of skill and a different style of play.

            <br />
            <br />

            I worked primarily on the front end development of the web app, creating reusable components and using react hooks to make the user experience feels smooth and responsive.
            I also worked with the main backend developer to organize the data structures for communication between the web app and the backend API.

            <br />
            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><img src="./images/queueup.PNG" /></div>
            </div>


            <br />
        </div>
    )
}
