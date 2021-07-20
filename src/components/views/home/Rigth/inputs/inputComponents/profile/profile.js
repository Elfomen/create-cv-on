import React , { useState , useEffect } from 'react'
import './profile.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState , convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html';


function Profile() {

    const [editorState , setEditorState] = useState({
        editorState : EditorState.createEmpty()
    })
    
    const onEditorStateChange = (editorState) => {
        setEditorState({editorState})
    }

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
