import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar-NotSignedIn'
import './Opportunities.css'
import '../../App.css';
import MessageForm from './MessageForm';


const Opportunities = () => {
    const onSubmitMessage = (message: string) => console.log(message);

    return (
        <div className='background'>
            <div className='opportunitiesStyle'>
                Opportunities
            </div>

            <div className='blog'>
                <div className='blogBox'>
                    
                    <div className='bubbleSpacing'>
                        <div className="bubble left">New research opportunity: seeking sophomore Computer Science students for a research assistant position for Fall 2023. </div>
                    </div>

                    <div className='bubbleSpacing'>
                        <div className="bubble left">Students, looking for a summer 2023 internship? Submit your resume to me here! </div>
                    </div>

                    <div className='bubbleSpacing'>
                        <div className="bubble left">Looking for new TA's for COP3502 for Summer C 2023 and Fall 2023. Reach out to me at this email if interested: professor@ufl.edu </div>
                    </div>
                    <div className='bubbleSpacing'>
                        <div className="bubble left">Last WiCSE GBM of the semester!! We will be meeting at TUR007 from 6:30-8:00pm on April 12! See you there! </div>
                    </div>
                    <div className='bubbleSpacing'>
                        <div className="bubble left">Tutoring opportunity for students who have taken MAC2313. If interested, reach out to me at tutoring@ufl.edu. </div>
                    </div>
                    <div className='bubbleSpacing'>
                        <div className="bubble left">New research opportunity: seeking sophomore Computer Science students for a research assistant position this summer, 2023. </div>
                    </div>
                    <div className='bubbleSpacing'>
                        <div className="bubble left">New research opportunity: seeking sophomore Computer Science students for a research assistant position this summer, 2023. </div>
                    </div>

                    <div className='gap'></div>

                    <MessageForm onSubmit ={onSubmitMessage} />

                </div>
            </div>
            <div className='gap'></div>
            <div className='gap'></div>
        </div> 
    )
}

export default Opportunities