import ReactPlayer from "react-player";

type VideoComponentProps = {
    url: string,
}
const VideoComponent = ({url}: VideoComponentProps) => {
    return (
        <div
            className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--captions-enabled plyr--playing plyr--hide-controls">
            <div className="videoWrapper">
                <ReactPlayer
                    url={url}
                    playing={true}
                    controls={true}
                    style={{width: "100%"}}
                />
            </div>
        </div>
    )
}
export default VideoComponent;