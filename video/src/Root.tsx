import React from "react";
import { Composition } from "remotion";
import { HowWeWork } from "./HowWeWork";
import { CardLoop } from "./CardLoop";
import { FPS, TOTAL } from "./theme";

export const Root: React.FC = () => {
	return (
		<>
			<Composition
				id="HowWeWorkRU"
				component={HowWeWork}
				durationInFrames={TOTAL}
				fps={FPS}
				width={1920}
				height={1080}
				defaultProps={{ lang: "ru" as const }}
			/>
			<Composition
				id="HowWeWorkEN"
				component={HowWeWork}
				durationInFrames={TOTAL}
				fps={FPS}
				width={1920}
				height={1080}
				defaultProps={{ lang: "en" as const }}
			/>
			<Composition
				id="CardLoop"
				component={CardLoop}
				durationInFrames={165}
				fps={FPS}
				width={1636}
				height={764}
				defaultProps={{ lang: "ru" as const }}
			/>
		</>
	);
};
