import React from "react";
import {
	AbsoluteFill,
	Audio,
	interpolate,
	Series,
	staticFile,
} from "remotion";
import { copy, type Lang } from "./strings";
import { DUR, TOTAL } from "./theme";
import { Intro } from "./scenes/Intro";
import { StepScene } from "./scenes/StepScene";
import { Outro } from "./scenes/Outro";

export const HowWeWork: React.FC<{ lang: Lang }> = ({ lang }) => {
	const c = copy[lang];
	return (
		<AbsoluteFill style={{ backgroundColor: "#010205" }}>
			<Audio
				src={staticFile("music.mp3")}
				volume={(f) =>
					interpolate(f, [0, 30, TOTAL - 50, TOTAL - 5], [0, 0.7, 0.7, 0], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					})
				}
			/>
			<Series>
				<Series.Sequence durationInFrames={DUR.intro}>
					<Intro copy={c} duration={DUR.intro} />
				</Series.Sequence>
				{c.steps.map((step, i) => (
					<Series.Sequence key={step.num} durationInFrames={DUR.step}>
						<StepScene step={step} index={i} duration={DUR.step} />
					</Series.Sequence>
				))}
				<Series.Sequence durationInFrames={DUR.outro}>
					<Outro copy={c} duration={DUR.outro} />
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};
