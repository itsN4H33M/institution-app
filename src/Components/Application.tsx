import { registerAPI } from "../Services/allAPI"
import { adm_year, schools, classes, mediums, Gender, bloodGroups } from "../dropdownDatas"
import { useEffect, useState } from "react"

export type Student = {
    user_id: number | undefined,
    institute_id: number | undefined,
    branch_id: number | undefined,
    adm_year: number | undefined,
    adm_type: string | undefined,
    application_date: Date | undefined,
    class: number | undefined,
    medium: string | undefined,
    school: string | undefined,
    admission_date: Date | undefined,
    firstname: string | undefined,
    houseName: string | undefined,
    fatherName: string | undefined,
    motheName: string | undefined,
    dateOfBirth: Date | undefined,
    lastname: string | undefined,
    Address: string | undefined,
    fOccupation: string | undefined,
    mOccupation: string | undefined,
    Gender: string | undefined,
    phone_number: number | undefined,
    fmobile: number | undefined,
    mmobile: number | undefined,
    blooddGroup: number | undefined,
    comments: string | undefined,
}

function Application() {

    const [details, setDetails] = useState<Student>({
        user_id: 10,
        institute_id: 1,
        branch_id: 2,
        adm_year: undefined,
        adm_type: 'nj',
        application_date: undefined,
        class: undefined,
        medium: undefined,
        school: undefined,
        admission_date: undefined,
        firstname: undefined,
        houseName: undefined,
        fatherName: undefined,
        motheName: undefined,
        dateOfBirth: undefined,
        lastname: undefined,
        Address: undefined,
        fOccupation: undefined,
        mOccupation: undefined,
        Gender: undefined,
        phone_number: undefined,
        fmobile: undefined,
        mmobile: undefined,
        blooddGroup: undefined,
        comments: undefined,
    })

    const handleClear = () => {

    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try {
            const result = await registerAPI(details)
            console.log(result);
        } catch (error) {
            console.log(error);

        }
    };

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
                            <label className="form-label">{adm_year.label}</label>
                            <select className="form-select w-50" value={details.adm_year} onChange={(e) => { setDetails({ ...details, adm_year: parseInt(e.target.value) }) }}>
                                <option disabled selected hidden>Select Academic year</option>
                                {
                                    adm_year.options.map((option, index) => (
                                        <option value={index + 1} key={index} >{option}</option>
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
                            <input className="form-control w-50" type="date" value={details.application_date ? new Date(details.application_date).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, application_date: new Date(e.target.value) }) }} />
                        </div>
                        {/* Admission Date */}
                        <div className="w-100 d-flex flex-column align-items-center mb-4">
                            <label className="form-label">Admission Date</label>
                            <input className="form-control w-50" type="date" value={details.admission_date ? new Date(details.admission_date).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, admission_date: new Date(e.target.value) }) }} />
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
                        <input className="form-control w-50 mb-4" type="text" value={details.firstname} onChange={(e) => { setDetails({ ...details, firstname: e.target.value }) }} />
                        {/* House Name */}
                        <label className="form-label">House Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.houseName} onChange={(e) => { setDetails({ ...details, houseName: e.target.value }) }} />
                        {/* Father Name */}
                        <label className="form-label">Father Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fatherName} onChange={(e) => { setDetails({ ...details, fatherName: e.target.value }) }} />
                        {/* Mother Name */}
                        <label className="form-label">Mother Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.motheName} onChange={(e) => { setDetails({ ...details, motheName: e.target.value }) }} />
                        {/* Date of Birth */}
                        <label className="form-label">Date of Birth:</label>
                        <input className="form-control w-50 mb-4" type="date" value={details.dateOfBirth ? new Date(details.dateOfBirth).toISOString().split('T')[0] : ''} onChange={(e) => { setDetails({ ...details, dateOfBirth: new Date(e.target.value) }) }} />
                    </div>
                    <div className="col d-flex flex-column align-items-center py-2">
                        {/* Last name */}
                        <label className="form-label">Last Name:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.lastname} onChange={(e) => { setDetails({ ...details, lastname: e.target.value }) }} />
                        {/* Address */}
                        <label className="form-label">Address:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.Address} onChange={(e) => { setDetails({ ...details, Address: e.target.value }) }} />
                        {/* Father Occupation */}
                        <label className="form-label">Father Occupation:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fOccupation} onChange={(e) => { setDetails({ ...details, fOccupation: e.target.value }) }} />
                        {/* Mother Occupation */}
                        <label className="form-label">Mother Occupation:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.mOccupation} onChange={(e) => { setDetails({ ...details, mOccupation: e.target.value }) }} />
                        {/* Gender */}
                        <label className="form-label">{Gender.label}</label>
                        <select className="form-select w-50" value={details.Gender} onChange={(e) => { setDetails({ ...details, Gender: e.target.value }) }}>
                            <option disabled selected hidden>Select Gender</option>
                            {
                                Gender.options.map((option, index) => (
                                    <option value={option} key={index} >{option}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col d-flex flex-column align-items-center py-2">
                        {/* phone_number */}
                        <label className="form-label">phone_number:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.phone_number}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, phone_number: newValue })
                            }} />
                        {/* father mobile */}
                        <label className="form-label">Father Mobile:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.fmobile}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, fmobile: newValue })
                            }} />
                        {/* mother mobile */}
                        <label className="form-label">Mother Mobile:</label>
                        <input className="form-control w-50 mb-4" type="text" value={details.mmobile}
                            onChange={(e) => {
                                const newValue = Number.isInteger(+(e.target.value)) ? +(e.target.value) : 0
                                setDetails({ ...details, mmobile: newValue })
                            }} />
                        {/* blood group */}
                        <label className="form-label">{bloodGroups.label}</label>
                        <select className="form-select w-50" value={details.blooddGroup} onChange={(e) => { setDetails({ ...details, blooddGroup: parseInt(e.target.value) }) }}>
                            <option disabled selected hidden>Select blooddGroup</option>
                            {
                                bloodGroups.options.map((option, index) => (
                                    <option value={index + 1} key={index} >{option}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-5 ms-4">
                    <label className="form-label">Comments:</label>
                    <textarea className="form-control w-75" placeholder="Enter comments here...." rows={3} value={details.comments} onChange={(e) => { setDetails({ ...details, comments: e.target.value }) }}></textarea>
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