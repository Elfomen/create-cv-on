import React, { useState, useEffect } from 'react'
import './emp.css'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import RoomIcon from '@material-ui/icons/Room';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import { IconButton } from '@material-ui/core'
import { add_employment, add_new_employment , deleteemployment } from '../../../../../../redux/actions/employment'
import { useDispatch, useSelector } from 'react-redux';
function EMPLOYMENT() {


    const [editorState, setEditorState] = useState({
        editorState: EditorState.createEmpty()
    })

    const onEditorStateChange = (editorState) => {
        setEditorState({ editorState })
    }

    const dispatch = useDispatch()


    const [emp, setEmp] = useState({
        position: "",
        employer: "",
        city: "",
        start_date: "",
        end_date: "",
        description: convertToRaw(editorState.editorState.getCurrentContent())
    })

    const employments = useSelector(state => state.employments)

    const { employment } = employments

    useEffect(() => {
        try {
            setEditorState({ editorState: EditorState.createWithContent(convertFromRaw(employment[employment.length - 1].description)) })

            setEmp({
                position: employment[employment.length - 1].position,
                employer: employment[employment.length - 1].employer,
                city: employment[employment.length - 1].city,
                start_date: employment[employment.length - 1].start_date,
                end_date: employment[employment.length - 1].end_date,
            })

        } catch (error) {

        }

    }, [employment.length&&employment[employment.length - 1].position])

    useEffect(() => {
        dispatch(add_employment({
            position: emp.position,
            employer: emp.employer,
            city: emp.city,
            start_date: emp.start_date,
            end_date: emp.end_date,
            description: convertToRaw(editorState.editorState.getCurrentContent())
        }))
    }, [editorState, emp])

    const addEmployment = () => {
        dispatch(add_new_employment({
            position: "",
            employer: "",
            city: "",
            start_date: "",
            end_date: "",
            description: convertToRaw(EditorState.createEmpty().getCurrentContent())
        }))

        setEditorState({
            editorState: EditorState.createEmpty()
        })

        setEmp({
            position: "",
            employer: "",
            city: "",
            start_date: "",
            end_date: "",
        })
    }

    const deleteEmp = () => {
        dispatch(deleteemployment())
    }




    return (
        <div className="employment">
            <h1>Employment Details</h1>

            <div>
                <IconButton>
                    <AssignmentIndIcon />
                </IconButton>
                <input placeholder="Position" value={emp.position} onChange={(e) => setEmp({
                    ...emp,
                    position: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <AssignmentIndIcon />
                </IconButton>
                <input placeholder="Employer" value={emp.employer} onChange={e => setEmp({
                    ...emp,
                    employer: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <RoomIcon />
                </IconButton>
                <input placeholder="City" value={emp.city} onChange={e => setEmp({
                    ...emp,
                    city: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <DateRangeIcon />
                </IconButton>
                <input type="date" value={emp.start_date} onChange={e => setEmp({
                    ...emp,
                    start_date: e.target.value
                })} />
            </div>
            <div>
                <IconButton>
                    <EventAvailableIcon />
                </IconButton>
                <input type="date" value={emp.end_date} onChange={e => setEmp({
                    ...emp,
                    end_date: e.target.value
                })} />
            </div>
            <h3>Enter Employment description</h3>

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
                    <button onClick={addEmployment}>Add new employment</button>
                </div>
                <div className="remove_education">
                    <button onClick={deleteEmp}>Remove {emp.position?emp.position : 'this employment'}</button>
                </div>
            </div>

        </div>
    )
}

export default EMPLOYMENT