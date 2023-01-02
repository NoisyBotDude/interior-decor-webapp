import React from 'react'

function Contactpage() {
    return (
        <div className='d-flex flex-column align-items-center  w-100 p-5' style={{ fontFamily: "verdana", backgroundImage: "linear-gradient(to right, #fbf8f9, #f2d8eb, #dabde8, #afa7ec, #6098ef)", height: "90vh" }} >
            <div className='d-flex flex-column align-items-center justify-content-between w-100 pt-4 mb-5'>
                <h1>About Us</h1>
                <p>We are team decor ..we are here for you so that you can find best interior designers around me</p>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-between w-100 mt-5'>
                <h1>Contact Us</h1>
                <p>Email Id : jitumonidecor@gmail.com</p>
            </div>
        </div>
    )
}

export default Contactpage