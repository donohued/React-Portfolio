import ProjectHeader from "../ProjectHeader";


export default function DrawingBoard() {
    return (
        <div className='content-content'>
            
            <ProjectHeader 
            title="The Drawing Board"
            substring="Video Game / 2020"
            tools={
                [
                    "unity",
                ]
            }
            />
            
            <h3>Summary</h3>
            My first ever game jam. :)

            <br />
            <br />

            <div className='image-row'>
                <div className='image-div pad-20px w1'><a href="https://seriouslynix.itch.io/the-drawing-board"><img src="./images/hRWqCK.png" /></a></div>
            </div>


            <br />
        </div>
    )
}
