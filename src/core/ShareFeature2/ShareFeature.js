import ShareButton from "../../components/ShareButton";

function ShareFeature(props) {
    return (
        <div className="text-center">
            <h1>שיתוף קבצים</h1>
            <div className="mt-4">
                <ShareButton />
            </div>
        </div>
    )
}

export default ShareFeature;