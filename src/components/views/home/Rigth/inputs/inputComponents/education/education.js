import React, { useState, useEffect } from 'react'
import "./education.css"
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SchoolIcon from '@material-ui/icons/School';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { IconButton } from '@material-ui/core'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';

import { useDispatch, useSelector } from 'react-redux'

import { add_education, add_new_education , deleteEducation } from '../../../../../../redux/actions/education'


function Education() {


    const [editorState, setEditorState] = useState({
        editorState: EditorState.createEmpty()
    })

    const [changed, setChanged] = useState(false)



    const dispatch = useDispatch()

    const onEditorStateChange = (editorState) => {
        setEditorState({ editorState })
    }

    const [educ, setEduc] = useState({
        title: "",
        start_date: "",
        end_date: "",
        school: "",
        city: "",
        description: convertToRaw(editorState.editorState.getCurrentContent()),
    })


    const educations = useSelector(state => state.educations)

    const { education , position_changed } = educations

    useEffect(() => {
        try {
            setEditorState({ editorState: EditorState.createWithContent(convertFromRaw(education[education.length - 1].description)) })

            setEduc({
                title: education[education.length-1].title,
                start_date: education[education.length-1].start_date,
                end_date: education[education.length-1].end_date,
                school: education[education.length-1].school,
                city: education[education.length-1].city
            })

        } catch (error) {

        }

    }, [position_changed])

    useEffect(() => {
        dispatch(add_education({
            title: educ.title,
            start_date: educ.start_date,
            end_date: educ.end_date,
            school: educ.school,
            city: educ.city,
            description: convertToRaw(editorState.editorState.getCurrentContent()),
        }))
    }, [changed, editorState, educ])

    const addEducation = () => {
        dispatch(add_new_education({
            title: "",
            start_date: "",
            end_date: "",
            school: "",
            city: "",
            description: convertToRaw(EditorState.createEmpty().getCurrentContent())
        }))

        setEditorState({
            editorState: EditorState.createEmpty()
        })

        setEduc({
            title: "",
            start_date: "",
            end_date: "",
            school: "",
            city: "",
        })
    }

    const deleteEduc = () => {
        dispatch(deleteEducation())
    }

    return (
        <div className="education">
            <div>
                <IconButton>
                    <CastForEducationIcon />
                </IconButton>
                <input placeholder="Education title" value={educ.title} onChange={(e) => setEduc({
                    ...educ,
                    title: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <SchoolIcon />
                </IconButton>
                <input placeholder="School" value={educ.school} onChange={
                    (e) => setEduc({
                        ...educ,
                        school: e.target.value
                    })
                } />
            </div>
            <div>
                <IconButton>
                    <LocationCityIcon />
                </IconButton>
                <input placeholder="City" value={educ.city} onChange={(e) => setEduc({
                    ...educ,
                    city: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <DateRangeIcon />
                </IconButton>
                <input type="date" value={educ.start_date} onChange={e => setEduc({
                    ...educ,
                    start_date: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <EventAvailableIcon />
                </IconButton>
                <input type="date" value={educ.end_date} onChange={e => setEduc({
                    ...educ,
                    end_date: e.target.value
                })} />
            </div>
            <h3>Education description</h3>
            <div className="education_description">
                <Editor
                    editorState={editorState.editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>

            <div className="edu_but">
                <div className="new_education">
                    <button onClick={addEducation}>Add new education</button>
                </div>
                <div className="remove_education">
                    <button onClick={deleteEduc}>Remove this education</button>
                </div>
            </div>



        </div>
    )
}

export default Education
