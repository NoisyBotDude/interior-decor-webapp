import React from 'react'
import './login.css'

function login() {
    return (
        <div >
            <div className="card border-0 " >
                <div className="row d-flex" style={{ height: "90vh", fontFamily: "verdana", backgroundImage: "linear-gradient(to right, #fbf8f9, #f2d8eb, #dabde8, #afa7ec, #6098ef)" }}>


                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card  px-4 py-5 mt-5 me-5" style={{ border: "1px sloid black", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="row px-3">
                                <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                <input type="password" name="password" placeholder="Enter password" />
                            </div>
                            <div className="row px-3 mt-3 mb-4">

                                <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                            </div>
                            <div className="row mb-3 px-3">
                                <button type="submit" className="btn btn-primary text-center">Login</button>
                            </div>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default login