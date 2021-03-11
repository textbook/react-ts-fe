import { FC } from "react";

import "./App.scss";
import reactLogo from "./logo.svg";

const App: FC = () => (
	<>
		<div className="welcome" data-testid="welcome-message">Hello world</div>
		<img src={reactLogo} alt="React Logo" />
	</>
);

export default App;
