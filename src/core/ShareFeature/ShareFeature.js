import { useState } from "react";
import { fileOpen } from "../../services/utils";
import { FaShareAlt } from "react-icons/fa";

function ShareFeature(props) {
    const [file, setFile] = useState();

    const onChoose = () => {
        fileOpen((file) => {
            setFile(file);
        });
    }

    const onShare = async () => {
        const data = {
            files: [file],
            title: 'Image',
            text: 'image',
          };
      
          try {
            if (!navigator.canShare(data)) {
                throw new Error('Cannot share.');
            }
            await navigator.share(data);
         } catch (err) {
           console.error(err);
         }
    }

    const renderFileDetails = () => {
        if (file) {
            const gileSizeKb = (file.size / 1000).toFixed(2);

            return (
                <div className="mt-4 d-flex justify-content-center">
                    <div>
                        <p className="text-end"><label className="fw-bold">שם:</label>&emsp;{file.name}</p>
                        <p className="text-end"><label className="fw-bold">גודל:</label>&emsp;{gileSizeKb} בתים</p>
                        <p className="text-end"><label className="fw-bold">סוג:</label>&emsp;{file.type}</p>
                    </div>
                </div>
            )
        }

        return null;
    }

    const renderShareButtons = () => {
        if (file) {
            return (
                <div className="mt-4">
                    <a type="button" className="btn btn-secondary" title="שתף"
                        onClick={onShare}
                    >
                        <FaShareAlt />
                    </a>
                </div>
            )
        }

        return null;
    }
    
    return (
        <div className="text-center">
            <h1>שיתוף קבצים</h1>
            <button className="btn btn-primary mt-4" onClick={onChoose}>בחר קובץ</button>
           {renderFileDetails()}
           {renderShareButtons()}
        </div>
    )
}

export default ShareFeature;