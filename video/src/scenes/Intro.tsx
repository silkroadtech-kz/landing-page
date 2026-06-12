import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { Backdrop, useSceneFade } from "../Backdrop";
import { colors, font } from "../theme";
import type { Copy } from "../strings";

export const Intro: React.FC<{ copy: Copy; duration: number }> = ({
	copy,
	duration,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const fade = useSceneFade(duration);

	const eyebrowIn = spring({ frame, fps, config: { damping: 200 } });
	const words = copy.title.split(" ");

	const lineW = interpolate(
		spring({ frame: frame - 28, fps, config: { damping: 18 } }),
		[0, 1],
		[0, 220],
	);

	const subIn = spring({ frame: frame - 38, fps, config: { damping: 200 } });

	return (
		<AbsoluteFill style={{ fontFamily: font, opacity: fade }}>
			<Backdrop />
			<AbsoluteFill
				style={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: 36,
				}}
			>
				<div
					style={{
						color: colors.gray,
						fontSize: 28,
						fontWeight: 600,
						letterSpacing: 14,
						opacity: eyebrowIn,
						transform: `translateY(${(1 - eyebrowIn) * 20}px)`,
					}}
				>
					{copy.eyebrow}
				</div>

				<h1
					style={{
						margin: 0,
						color: colors.white,
						fontSize: 120,
						fontWeight: 700,
						letterSpacing: -3.5,
						lineHeight: 1.15,
						textAlign: "center",
						maxWidth: 1400,
					}}
				>
					{words.map((word, i) => {
						const s = spring({
							frame: frame - 12 - i * 5,
							fps,
							config: { damping: 16, stiffness: 120 },
						});
						return (
							<span
								key={i}
								style={{
									display: "inline-block",
									marginRight: 28,
									opacity: s,
									transform: `translateY(${(1 - s) * 60}px)`,
								}}
							>
								{word}
							</span>
						);
					})}
				</h1>

				<div
					style={{
						width: lineW,
						height: 8,
						borderRadius: 4,
						background: colors.green,
					}}
				/>

				<div
					style={{
						color: colors.gray,
						fontSize: 34,
						fontWeight: 500,
						opacity: subIn,
						transform: `translateY(${(1 - subIn) * 20}px)`,
					}}
				>
					{copy.subtitle}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
