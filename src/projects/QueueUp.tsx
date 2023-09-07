import ProjectHeader from '../ProjectHeader';

export default function QueueUp() {
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
            
            <p>
                For my Senior Capstone I worked with two classmates to design and develop a webapp titled QueueUp. 
                We wanted to make something using available API's for competitive games, and Riot Games had one available for their game League of Legends that we decided to use. 
                QueueUp allows users to sign up and sync their League of Legends account with our service. 
                We cache their competitive statistics and use that data to match them with others users that will pair well with their skill level and play style.
            </p>
    

            <p>
                On the project I worked on developing the frontend experience using ReactJS with Typescript, along with the deployment and hosting of the app. 
                To deploy and host QueueUp I rented a debian server from Linode and installed NGINX. 
                QueueUp's frontend and API are both hosted using the NGINX server, and GitHub Workflows are used to help automate the process.
            </p>


            You can visit it here! <a href='https://queueup.app'>https://queueup.app</a>

            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><img src="./images/queueup.PNG" /></div>
            </div>


            <br />
        </div>
    )
}
