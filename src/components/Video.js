import React, { useRef, useState } from "react";

export const Video = () => {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	const handleVideoPress = () => {
		//If video is playing stop it, otherwise play it
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				className="video__player"
				loop
				ref={videoRef}
				src="https://www.youtube.com/watch?v=X06NF29iJig"
			></video>
			{/* VideoFooter
      VideoSidebar */}
		</div>
	);
};
