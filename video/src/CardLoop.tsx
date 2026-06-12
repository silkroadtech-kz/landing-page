import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { Backdrop } from "./Backdrop";
import { colors, font } from "./theme";
import { copy, type Lang } from "./strings";

const SLIDE = 55; // frames per step slide

/**
 * Short seamless loop for the in-card background (818x382 aspect):
 * the three step titles cycle with their numbers and a progress bar.
 */
export const CardLoop: React.FC<{ lang: Lang }> = ({ lang }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const steps = copy[lang].steps;

	const idx = Math.floor(frame / SLIDE) % steps.length;
	const local = frame % SLIDE;
	const step = steps[idx];

	const inP = spring({ frame: local, fps, config: { damping: 16, stiffness: 110 } });
	const outP = interpolate(local, [SLIDE - 10, SLIDE], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const op = inP * (1 - outP);

	return (
		<AbsoluteFill style={{ fontFamily: font }}>
			<Backdrop glow={0.14} />
			<AbsoluteFill
				style={{
					flexDirection: "row",
					alignItems: "center",
					padding: "0 90px",
					gap: 50,
				}}
			>
				<span
					style={{
						fontSize: 230,
						fontWeight: 700,
						letterSpacing: -7,
						lineHeight: 1,
						color: "rgba(255,255,255,0.92)",
						opacity: op,
						transform: `translateY(${(1 - inP) * 50}px)`,
					}}
				>
					{step.num}
				</span>
				<div style={{ opacity: op, transform: `translateY(${(1 - inP) * 30}px)` }}>
					<div style={{ fontSize: 26, fontWeight: 600, color: colors.green, letterSpacing: 6 }}>
						STEP
					</div>
					<div
						style={{
							fontSize: 64,
							fontWeight: 700,
							letterSpacing: -1.5,
							color: colors.white,
							marginTop: 10,
						}}
					>
						{step.title}
					</div>
				</div>
			</AbsoluteFill>
			{/* progress bar */}
			<div
				style={{
					position: "absolute",
					left: 90,
					right: 90,
					bottom: 50,
					height: 6,
					borderRadius: 3,
					background: "rgba(255,255,255,0.12)",
				}}
			>
				<div
					style={{
						width: `${((idx + local / SLIDE) / steps.length) * 100}%`,
						height: "100%",
						borderRadius: 3,
						background: colors.green,
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};
