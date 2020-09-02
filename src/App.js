import React from "react";
import axios from "./axios";
import "./App.css";
import { Video } from "./components/Video";

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await Axios.get("/v2/posts");
			setVideos(response.data);
			return req;
		}

		fetchPosts();
	}, []);

	return (
		<div className="app">
			<div className="app__videos">
				{videos.map(({ url, channel, description, song, title }) => {
					<Video url={url} channel={channel} />;
				})}
			</div>
		</div>
	);
}

export default App;
