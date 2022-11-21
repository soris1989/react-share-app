import { useState } from "react";
import { fileOpen } from "../../services/utils";

function ShareFeature(props) {
    const [file, setFile] = useState();

    const onFileChoose = () => {
        fileOpen((file) => {
            setFile(file);
        });
    }

    const renderFileDetails = () => {
        if (file) {
            return (
                <>
                    <p>Name: {file.name}</p>
                    <p>Size: {file.size} bytes</p>
                    <p>Type: {file.type} bytes</p>
                    <p>Last modified: {file.lastModifiedDate} bytes</p>
                </>
            )
        }

        return null;
    }
    
    return (
        <div>
            <h1>Share App</h1>
            <button onClick={onFileChoose}>Choose a file</button>
           {renderFileDetails()}
        </div>
    )
}

export default ShareFeature;