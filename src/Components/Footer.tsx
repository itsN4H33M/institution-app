
function Footer() {
  return (
    <>
      <div className='row py-5 text-white' style={{ backgroundColor: '#232b2b' }}>
        <div className='col mx-2'>
          <h3 className='ms-5'>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel hic soluta, harum mollitia exercitationem esse eveniet dolores delectus laudantium quibusdam sequi, animi unde, quam non labore alias ex excepturi saepe.</p>
        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <h3 className="p-1">Follow Us</h3>
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-instagram me-3 fs-3"></i>
            <i className="fa-brands fa-facebook me-3 fs-3"></i>
            <i className="fa-brands fa-twitter me-3 fs-3"></i>
            <i className="fa-brands fa-youtube fs-3"></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center text-secondary align-items-center" style={{ backgroundColor: '#0e1111' }}>
        <p>&copy; Trace Institutes. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer