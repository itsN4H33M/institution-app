import { academicYear, schools, classes, mediums, gender, bloodGroups } from "../dropdownDatas"
import { useEffect, useState } from "react"

type Student = {
    academicYear: string,
    appnDate: Date,
    class: number,
    medium: string,
    school: string,
    admnDate: Date,
    fname: string,
    houseName: string,
    fatherName: string,
    motherName: string,
    dob: Date,
    lname: string,
    address: string,
    fatherOccun: string,
    motherOccun: string,
    gender: string,
    mobile: number,
    fatherMobile: number,
    motherMobile: number,
    bloodGroup: string,
    comments: string
}

function Application() {

    const [details, setDetails] = useState<Student>({} as Student)

    const handleClear = () => {

    }

    const handleSubmit = () => {
        
    }

    useEffect(() => {
        console.log(details);
    }, [details])

    return (
        <>
            <div className="card shadow m-4 py-1" style={{ backgroundColor: '#c2c2b4' }}>
                <h3 className="ps-3 py-2 fw-semibold border-bottom">Application for Admission</h3>
                {/* Application for Admission */}
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center py-2">
                        <h5 className="mb-4 text-primary fw-semibold">Institution name</h5>
                        {/* Academic year dropdown*/}
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            <label className="form-label">{academicYear.label}</label>
                            <select className="form-select w-50" value={details.academicYear} onChange={(e) => { setDetails({ ...details, academicYear: e.target.value }) }}>
                                <option disabled selected hidden>Select Academic year</option>
                                {
                                    academicYear.options.map((option, index) => (
                                        <option value={option} key={index} >{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* School */}
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            <label className="form-label">{schools.label}</label>
                            <select className="form-select w-50" value={details.school} onChange={(e) => { setDetails({ ...details, school: e.target.value }) }}>
                                <option disabled selected hidden>Select School</option>
                                {
                                    schools.options.map((option, index) => (
                                        <option value={option} key={index} >{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center py-2">
                        <h5 className="mb-4 text-primary fw-semibold">Branch</h5>
                        {/* Application Date */}
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            <label className="form-label">Application Date</label>
                            <input className="form-control w-50" type="date" value={details.appnDate ? new Date(details.appnDate).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, appnDate: new Date(e.target.value) }) }} />
                        </div>
                        {/* Admission Date */}
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            <label className="form-label">Admission Date</label>
                            <input className="form-control w-50" type="date" value={details.admnDate ? new Date(details.admnDate).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, admnDate: new Date(e.target.value) }) }} />
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-end py-2">
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            {/* class */}
                            <label className="form-label">{classes.label}</label>
                            <select className="form-select w-50" value={details.class} onChange={(e) => { setDetails({ ...details, class: parseInt(e.target.value) }) }}>
                                <option disabled selected hidden>Select Class</option>
                                {
                                    classes.options.map((option, index) => (
                                        <option value={option} key={index} >{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            {/* medium */}
                            <label className="form-label">{mediums.label}</label>
                            <select className="form-select w-50" value={details.medium} onChange={(e) => { setDetails({ ...details, medium: e.target.value }) }}>
                                <option disabled selected hidden>Select Medium</option>
                                {
                                    mediums.options.map((option, index) => (
                                        <option value={option} key={index} >{option}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div >
            {/* Applicants details */}
            <div className="card shadow m-4 py-1" style={{ backgroundColor: '#c2c2b4' }
            }>
                <h3 className="ps-3 py-2 fw-semibold border-bottom">Applicant's Details</h3>
                <div className="d-flex justify-content-center align-items-center py-1">
                    <input className="form-control w-50" type="text" placeholder="Search for user" />
                    <i className="btn fa-solid fa-magnifying-glass fa-lg px-2 py-3" style={{ marginLeft: '-40px' }}></i>
                </div>
                <div className="row my-2">
                    <div className="col d-flex flex-column align-items-center py-2">
                        {/* first name */}
                        <label className="form-label">First Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fname} onChange={(e) => { setDetails({ ...details, fname: e.target.value }) }} />
                        {/* House Name */}
                        <label className="form-label">House Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.houseName} onChange={(e) => { setDetails({ ...details, houseName: e.target.value }) }} />
                        {/* Father Name */}
                        <label className="form-label">Father Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fatherName} onChange={(e) => { setDetails({ ...details, fatherName: e.target.value }) }} />
                        {/* Mother Name */}
                        <label className="form-label">Mother Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.motherName} onChange={(e) => { setDetails({ ...details, motherName: e.target.value }) }} />
                        {/* Date of Birth */}
                        <label className="form-label">Date of Birth:</label>
                        <input className="form-control w-50 mb-4" type="date" value={details.dob ? new Date(details.dob).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, dob: new Date(e.target.value) }) }} />
                    </div>
                    <div className="col d-flex flex-column align-items-center py-2">
                        {/* Last name */}
                        <label className="form-label">Last Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.lname} onChange={(e) => { setDetails({ ...details, lname: e.target.value }) }} />
                        {/* Address */}
                        <label className="form-label">Address:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.address} onChange={(e) => { setDetails({ ...details, address: e.target.value }) }} />
                        {/* Father Occupation */}
                        <label className="form-label">Father Occupation:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fatherOccun} onChange={(e) => { setDetails({ ...details, fatherOccun: e.target.value }) }} />
                        {/* Mother Occupation */}
                        <label className="form-label">Mother Occupation:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.motherOccun} onChange={(e) => { setDetails({ ...details, motherOccun: e.target.value }) }} />
                        {/* Gender */}
                        <label className="form-label">{gender.label}</label>
                        <select className="form-select w-50">
                            <option disabled selected hidden>Select Gender</option>
                            {
                                gender.options.map((option, index) => (
                                    <option value={option} key={index} >{option}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col d-flex flex-column align-items-center py-2">
                        {/* mobile */}
                        <label className="form-label">Mobile:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.mobile}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, mobile: newValue })
                            }} />
                        {/* father mobile */}
                        <label className="form-label">Father Mobile:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fatherMobile}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, fatherMobile: newValue })
                            }} />
                        {/* mother mobile */}
                        <label className="form-label">Mother Mobile:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.motherMobile}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, motherMobile: newValue })
                            }} />
                        {/* blood group */}
                        <label className="form-label">{bloodGroups.label}</label>
                        <select className="form-select w-50" value={details.bloodGroup} onChange={(e) => { setDetails({ ...details, bloodGroup: e.target.value }) }}>
                            <option disabled selected hidden>Select Bloodgroup</option>
                            {
                                bloodGroups.options.map((option, index) => (
                                    <option value={option} key={index} >{option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-5 ms-4">
                    <label className="form-label">Comments:</label>
                    <textarea className="form-control w-75" placeholder="Enter comments here...." rows={3}></textarea>
                </div>
                <div className="d-flex justify-content-center gap-5 mb-2">
                    <button className="btn btn-danger" onClick={handleClear}>Reset</button>
                    <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
            </div >
        </>
    )
}

export default Application