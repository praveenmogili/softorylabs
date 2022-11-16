import Header from "./Header";

const AboutUs = () => {
    return (
        <>
            <Header />

            <div class="bg-light">
            <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                    <div class="col-lg-6">
                            <p class="lead text-muted mb-0">World Class Talent with Science / Engineering Graduates</p>
                            <br/>
                            <p class="lead text-muted mb-0">Time Zone Alignment with the US</p>
                            <br/>
                            <p class="lead text-muted mb-0">Communication in English </p>
                            <br/>
                            <p class="lead text-muted mb-0">Experienced with US Companies / Work Culture</p>
                            <br/>
                            <p class="lead text-muted mb-0">Delivery on Deadlines</p>
                            <br/>
                            <p class="lead text-muted mb-0">Flexibility (On Demand Hours)</p>
                            <br/>
                            <p class="lead text-muted mb-0">Quick Start Up (from next working day of choosing Team)</p>
                            <br/>
                            <p class="lead text-muted mb-0">Program Management with Agile Methodologies</p>
                            <br/>
                            <p class="lead text-muted mb-0">Seamless Scrum Meetings across business owners, scrum master, leads and engineers</p>
                            <br/>
                            <p class="lead text-muted mb-0">Standard Jira with KanBan boards and Gantt charts used across teams to track 
                            project progress</p>
                            <br/>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/></div>
                </div>
            </div>
            </div>

            <div class="bg-white py-5">
            <div class="container py-5">
                <div class="row align-items-center mb-5">
                <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                    <h2 class="font-weight-light">Been There Done That!</h2>
                    <br/>
                    <p class="font-italic text-muted mb-4">Graduates in Science or Engineering</p>
                    <p class="font-italic text-muted mb-4">Worked with at least two US clients</p>
                    <p class="font-italic text-muted mb-4">At least 3 years of proven experience</p>
                    <p class="font-italic text-muted mb-4">Multiple Skills</p>
                    <ul>
                        <li class="font-italic text-muted mb-4">AWS/Azure</li>
                        <li class="font-italic text-muted mb-4">Ansible/Terraform</li>
                        <li class="font-italic text-muted mb-4">Python Coding</li>
                        <li class="font-italic text-muted mb-4">Linux Administration </li>
                    </ul>

                </div>
                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                </div>
            </div>
            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-5">
                            <h2 class="display-4 font-weight-light">Our team</h2>
                            <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="row text-center">
                    {/* <!-- Team item--> */}
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    {/* <!-- Team item--> */}
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    {/* <!-- Team item--> */}
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    {/* <!-- Team item--> */}
                    <div class="col-xl-3 col-sm-6 mb-5">
                        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                        <h5 class="mb-0">Raju</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                        </div>
                    </div>
                    {/* <!-- End--> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;