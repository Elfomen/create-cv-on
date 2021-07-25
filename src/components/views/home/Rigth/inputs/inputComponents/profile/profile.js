import React , { useState , useEffect } from 'react'
import './profile.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState , convertToRaw , convertFromRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import { useDispatch , useSelector } from 'react-redux'
import {addProfile} from '../../../../../../redux/actions/profile'

function Profile() {

    const dispatch = useDispatch()
    const [changed , setChanged] = useState(false)

    const [editorState , setEditorState] = useState({
        editorState : EditorState.createEmpty()
    })

    const prof = useSelector(state => state.profile)

    const { profile } = prof
    
    const onEditorStateChange = (editorState) => {
        setEditorState({editorState})
        setChanged(!changed)
    }

    // When page loads
    useEffect(() => {
        try {
            setEditorState({editorState : EditorState.createWithContent(convertFromRaw(profile))})
            dispatch(addProfile(convertToRaw(editorState.editorState.getCurrentContent())))
        } catch (error) {
            
        }
        
    } , [])

    // When there is a changed on those dependency arrays
    useEffect(() => {
        dispatch(addProfile(convertToRaw(editorState.editorState.getCurrentContent())))
    } , [changed , editorState])

//    console.log(convertToRaw(editorState.editorState.getCurrentContent()))
    //dispatch()


    return (
        <div className="profile">
            <h1>Enter profile description</h1>
            <Editor
                editorState={editorState.editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}

export default Profile
