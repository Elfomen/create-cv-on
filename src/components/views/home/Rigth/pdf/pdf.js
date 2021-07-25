import React, { useRef } from 'react'
import './pdf.css'
import { useSelector , useDispatch } from 'react-redux'
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js'
import { Button } from '@progress/kendo-react-buttons'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf'
import Line from '../../../../Line/Line'
import SHORT_LINE from '../../../../Line_Short/Ls'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useReactToPrint } from 'react-to-print'
import { setEducationPosition } from '../../../../redux/actions/education'
import { setEmploymentPosition } from '../../../../redux/actions/employment'

class Pdf extends React.Component {

    render() {
        return (
            <div className="pdf" id="pdf">
                <div className="pdf_left">
                    <img src="https://pixy.org/src/17/thumbs350/173316.jpg" />

                </div>
                <div className="pdf_right">
                    {this.props.profile.blocks && this.props.profile.blocks[0].text && <div className="profile_view">
                        <h1>Profile</h1>
                        <Line />
                        <div className="profile_body" dangerouslySetInnerHTML={{ __html: draftToHtml(this.props.profile) }}></div>
                    </div>}

                    <br></br>
                    {this.props.education.length && this.props.education[0].description && this.props.education[0].description.blocks[0].text &&
                        <div className="big_title">
                            <h1>Education</h1>
                            <Line />
                        </div>
                    }

                    {this.props.education.length && this.props.education[0].description && this.props.education[0].description.blocks[0].text && this.props.education.map((educat , i) => (
                        <div className="education_view hover_pdf" onClick={() => this.props.changePos(i)}>

                            <div className="title_school_city">
                                <p className="education_title">{educat.title}</p>
                                <p className="education_title">{educat.school} - {educat.city}</p>
                            </div>

                            <p className="education_dates">{educat.start_date} - {educat.end_date}</p>
                            <p className="educ_desc">Description</p>
                            <div className="education_body" dangerouslySetInnerHTML={{ __html: draftToHtml(educat.description) }}></div>
                            <SHORT_LINE />
                        </div>

                    ))
                    }

                    <br></br>

                    {this.props.employment.length && (this.props.employment[0].position || this.props.employment[0].description.blocks[0].text) &&
                        <div className="big_title">
                            <h1>Employment</h1>
                            <Line />
                        </div>
                    }
                    {this.props.employment.length && (this.props.employment[0].position || this.props.employment[0].description.blocks[0].text) && this.props.employment.map((emp , i) => (
                        <div className="hover_pdf" onClick={() => this.props.changeEmpPos(i)}>
                            <div>
                                <p className="education_title">{emp.position} - {emp.employer}</p>
                                <p className="education_title">{emp.city}</p>
                            </div>
                            <p className="education_dates">{emp.start_date} - {emp.end_date}</p>
                            <p className="educ_desc">Description</p>
                            <div className="education_body" dangerouslySetInnerHTML={{ __html: draftToHtml(emp.description) }}></div>
                            <SHORT_LINE />
                        </div>

                    ))}
                </div>
            </div>

        )
    }

}

const Print = () => {
    const dispatch = useDispatch()
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    const profiles = useSelector(state => state.profile);

    var { profile, profile_error } = profiles

    const educations = useSelector(state => state.educations)

    const { education } = educations

    const employments = useSelector(state => state.employments)
    const { employment } = employments

    const setEducsPos = (id) => {
        dispatch(setEducationPosition(id))
    }
    const setEmploymentPos = (id) => {
        dispatch(setEmploymentPosition(id))
    }
    return (
        <div className="global">
            <Pdf ref={componentRef} profile={profile} education={education}
                employment={employment} changePos={(id) => setEducsPos(id)}
                changeEmpPos={setEmploymentPos}/>

            <div className="btn-export" onClick={handlePrint}>
                <PictureAsPdfIcon />
                <p>Export PDF</p>
            </div>
        </div>

    )
}

export default Print
