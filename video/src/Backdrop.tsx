import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { colors } from "./theme";

const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>`;

/**
 * Shared scene background: deep black, a slowly drifting green glow,
 * and a film-grain noise overlay matching the site's `.noise` texture.
 */
export const Backdrop: React.FC<{ glow?: number }> = ({ glow = 0.16 }) => {
	const frame = useCurrentFrame();
	const { width, height } = useVideoConfig();

	const driftX = Math.sin(frame / 90) * width * 0.06;
	const driftY = Math.cos(frame / 120) * height * 0.05;

	return (
		<AbsoluteFill style={{ backgroundColor: colors.bg }}>
			<div
				style={{
					position: "absolute",
					width: width * 0.9,
					height: width * 0.9,
					left: width * 0.4 + driftX,
					top: -width * 0.25 + driftY,
					borderRadius: "50%",
					background: `radial-gradient(circle, ${colors.green} 0%, transparent 60%)`,
					opacity: glow,
					filter: "blur(80px)",
				}}
			/>
			<AbsoluteFill
				style={{
					backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")`,
					opacity: 0.06,
				}}
			/>
		</AbsoluteFill>
	);
};

/** Fade a whole scene in/out over its first and last `len` frames. */
export const useSceneFade = (durationInFrames: number, len = 12) => {
	const frame = useCurrentFrame();
	const fadeIn = Math.min(1, frame / len);
	const fadeOut = Math.min(1, (durationInFrames - frame) / len);
	return Math.max(0, Math.min(fadeIn, fadeOut));
};
