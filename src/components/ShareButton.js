import { useState, useEffect } from "react";
import { fileOpen } from "../services/utils";
import { FaShareAlt } from "react-icons/fa";

function ShareFeature(props) {
    const [file, setFile] = useState();

    useEffect(() => {
        async function share() {
            if (file) {
                console.log('aaa')
                const data = {
                    files: [file],
                    title: 'קובץ מצורף',
                    text: 'קובץ',
                };
              
                try {
                    if (!window.navigator.canShare(data)) {
                        throw new Error('Cannot share.');
                    }
                    
                    await window.navigator.share(data);
                } catch (err) {
                    console.error(err);
                }
            }
        }

        share();
    }, [file]);

    const onShare = () => {
        fileOpen((file) => {
            setFile(file);
        });
    }

    return (
        <a type="button" className="btn btn-secondary" title="שתף"
            onClick={onShare}
        >
            <FaShareAlt />
        </a>
    )
}

export default ShareFeature;