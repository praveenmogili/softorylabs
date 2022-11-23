import data from './role_details.json'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const JobDetails = () => {

    const { id } = useParams()
    const role_data = JSON.parse(JSON.stringify(data))

    return(
        <>
            <div>
                <h4 className='text-left py-3 px-5'>{role_data[id]['role']}</h4>

                <div className='text-muted py-3 px-5'>
                    <span>{role_data[id]["intro"]}</span>
                </div>

                <div className='text-muted py-3 px-5'>
                    <span>{role_data[id]["summary"]}</span>
                </div>

                <h5 className='text-left py-3 px-5'>Job Responsibilities</h5>
                <div className='text-muted px-5'>
                    <ul>
                        {role_data[id]["responsibilities"].map(data => <li>{data}</li>)}
                    </ul>
                </div>
                <h5 className='text-left py-3 px-5'>Job Requirements</h5>
                <div className='text-muted px-5'>
                    <ul>
                        {role_data[id]["requirements"].map(data => <li>{data}</li>)}
                    </ul>
                </div>
                <h5 className='text-left py-3 px-5'>Benefits and Perks</h5>
                <div className='text-muted px-5 pb-3'>
                    <ul>
                        <li><strong>World-class:</strong>Office located opposite Oracle in Hitech City, with standard facilities.</li>
                        <li><strong>Flexibility:</strong>Work from home most of the time. Work from office when required, (during training, and around twice a week for team meetings). Overlap with the US for 4 hours. 40-hour weeks and overtime.</li>
                        <li><strong>Lean structure:</strong>Finance, HR, Administration is outsourced, and sales is in the US.</li>
                        <li><strong>Local Culture:</strong>Indian Holidays (Holi, Eid, Dussehra, Diwali). Standard leaves in line with local industry.</li>
                        <li><strong>Security:</strong>Best-in-class medical insurance for your family .</li>
                        <li><strong>Learning:</strong>Cutting-edge technologies and mentoring by our leaders in the US</li>
                        <li><strong>Growth:</strong>Technology stream to a Cloud Architect, or in Management stream to Client Projects Lead.</li>
                    </ul>
                </div>

                <div>
                    <Button variant='success' className='mx-5 mb-5'>Apply</Button>
                </div>
            </div>
        </>
    )
}

export default JobDetails;