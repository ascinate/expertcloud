import React, {useState, useRef, useMemo, Jodit} from 'react';
import JoditEditor from "jodit-react";



const MailEditor = ({setValue, config }) => {
	const editor = useRef('#editor', {
        autofocus: false,
        height: "200",
        toolbarAdaptive: false
      });
    
   
	return (
            <JoditEditor ref={editor} onChange={(content) => setValue(content)} config={config} tabIndex={1}/>
        );
}

export default MailEditor;
