import React from 'react'
import logo from '../../../../images/logo.png';
function TopHeader() {
    return (
        <div className='container '>
            <div className="row my-3 d-flex justify-content-center">
                <div className="col-lg-4 d-flex justify-content-md-start justify-content-center mb-3 mb-md-0">
                    <img src={logo} alt="" />
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center ">
                    <div className="d-none d-md-block">
                        <div className="main-box d-flex align-items-center">
                            <div className="iconbox me-3">
                                <i class="fas fa-phone-alt fs-1"></i>
                            </div>
                            <div className="text-box">
                                <h6 className='fw-bold m-0'>+0 123-456-7890</h6>
                                <small className='m-0 top-header-text'>We are open (09am - 10pm)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center ">
                    <div className="d-none d-md-block">
                        <div className="main-box d-flex align-items-center">
                            <div className="iconbox me-3">
                                <i class="fas fa-envelope-open-text fs-1"></i>
                            </div>
                            <div className="text-box">
                                <h6 className='fw-bold m-0'>info@domain.com</h6>
                                <small className='m-0 top-header-text'>You can mail us</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-3 d-flex justify-content-center">
                    <div className="main-box d-flex align-items-center">
                        <div className="iconbox me-3">
                            <i class="fas fa-search fs-2"></i>
                        </div>
                        <div className="text-box">
                            <input placeholder='Search...' className="form-control" type="text" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TopHeader