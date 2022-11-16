import React from 'react';
import Header from './Header';
import './home.css'
// import Card from 'react-bootstrap/Card';

import ImgCarousel from './ImgCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  Home = () => {

  return (
      <div>
        <Header />
        <br/>

        <ImgCarousel />

        <div className='container py-5'>
            <div className='row'>
                <div class="col-lg-6">
                    <h2>What We Offer</h2>
                    <p class=" text-muted mb-0">Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.</p>
                    <br/>
                    <p class=" text-muted mb-0" >Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.</p>
                    
                    <div>
                        <ul class=" fa-ul text-muted mb-0">
                            <li><FontAwesomeIcon icon="fa-solid fa-check" /> Software Development more modular</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Assembly Line development means a standardized Quality driven software</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Repeatable software activities lead to higher quality at lower cost</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Software can be bought as a modular unit exactly like buying a Modular Kitchen</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Like Cloud Storage on a monthly basis, software can be bought on a subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Identifiable, repeatable development activities can be bundled into a Monthly Subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Increased estimation accuracy, and no budget overruns</li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 d-none d-lg-block">
                    <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/>
                </div>

            </div>
            {/*  */}
            <br/>
            {/*  */}
            <div className='row'>

                <div class="col-lg-6 d-none d-lg-block">
                    <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/>
                </div>

                <div class="col-lg-6">

                    <h2>What You See is What You Get</h2>
                    <p class=" text-muted mb-0">Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.</p>
                    <br/>
                    <p class=" text-muted mb-0" >Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.</p>
                    
                    <div>
                        <ul class=" fa-ul text-muted mb-0">
                            <li><FontAwesomeIcon icon="fa-solid fa-check" /> Software Development more modular</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Assembly Line development means a standardized Quality driven software</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Repeatable software activities lead to higher quality at lower cost</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Software can be bought as a modular unit exactly like buying a Modular Kitchen</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Like Cloud Storage on a monthly basis, software can be bought on a subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Identifiable, repeatable development activities can be bundled into a Monthly Subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Increased estimation accuracy, and no budget overruns</li>

                        </ul>
                    </div>
                </div>


            <div className='row'>
                <div class="col-lg-6">
                    <h2>What We Offer</h2>
                    <p class=" text-muted mb-0">Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.</p>
                    <br/>
                    <p class=" text-muted mb-0" >Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.</p>
                    
                    <div>
                        <ul class=" fa-ul text-muted mb-0">
                            <li><FontAwesomeIcon icon="fa-solid fa-check" /> Software Development more modular</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Assembly Line development means a standardized Quality driven software</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Repeatable software activities lead to higher quality at lower cost</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Software can be bought as a modular unit exactly like buying a Modular Kitchen</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Like Cloud Storage on a monthly basis, software can be bought on a subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Identifiable, repeatable development activities can be bundled into a Monthly Subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Increased estimation accuracy, and no budget overruns</li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 d-none d-lg-block">
                    <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/>
                </div>

            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4 text-center">
                        <div class="col-12">
                            <h2 class="display-4 font-weight-light">Our team</h2>
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

            </div>

            <div className='row'>
                <div class="col-lg-6">
                    <h2>What We Offer</h2>
                    <p class=" text-muted mb-0">Softory Labs was born in an idea that we can offer Units of software in a factory, bringing Operational Excellence to software development and support just the same as we have brought automation and standardization in other industries.</p>
                    <br/>
                    <p class=" text-muted mb-0" >Just as you buy a modular home, with a modular kitchen, so also you can buy standardized high quality units of agile software development and project management.</p>
                    
                    <div>
                        <ul class=" fa-ul text-muted mb-0">
                            <li><FontAwesomeIcon icon="fa-solid fa-check" /> Software Development more modular</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Assembly Line development means a standardized Quality driven software</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Repeatable software activities lead to higher quality at lower cost</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Software can be bought as a modular unit exactly like buying a Modular Kitchen</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Like Cloud Storage on a monthly basis, software can be bought on a subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Identifiable, repeatable development activities can be bundled into a Monthly Subscription</li>
                            <br/>
                            <li><FontAwesomeIcon icon="check-square" /> Increased estimation accuracy, and no budget overruns</li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 d-none d-lg-block">
                    <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/>
                </div>

            </div>

        </div>
    </div>

  );
}

export default Home;