import { useState } from 'react'
import './App.css'
import Project from './Project'

function App() {

    return (
        <>
            <div className='flex-wrapper'>
                <div className='portal-side'>

                    <div className='portal-content'>

                        <div className='fixed-sidebar'>
                            <h2>David Donohue</h2>
                            <hr />

                            Software developer.
                            <hr />

                            Projects
                            <ol>
                                <li><a href=''>QueueUp</a></li>
                                <li><a href=''>VR Camping Sim</a></li>
                                <li><a href=''>ADC</a></li>
                                <li><a href=''>Miami Roll</a></li>
                                <li><a href=''>CardGuard</a></li>
                            </ol>

                            <hr />

                            Socials
                            <ol>
                                <li><a href='https://twitter.com/SeriouslyNIX'>Twitter</a></li>
                                <li><a href='https://github.com/donohued'>Github</a></li>
                            </ol>
                        </div>


                    </div>

                </div>
                <div className='content-side'>

                    <Project />

                </div>

            </div>

        </>
    )
}

export default App
