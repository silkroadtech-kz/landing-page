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

export const Outro: React.FC<{ copy: Copy; duration: number }> = ({
	copy,
	duration,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const fade = useSceneFade(duration);

	const countP = spring({
		frame,
		fps,
		config: { damping: 30, stiffness: 40 },
		durationInFrames: 45,
	});
	const value = Math.round(interpolate(countP, [0, 1], [0, copy.statValue]));

	const labelIn = spring({ frame: frame - 18, fps, config: { damping: 200 } });
	const brandIn = spring({ frame: frame - 60, fps, config: { damping: 200 } });

	return (
		<AbsoluteFill style={{ fontFamily: font, opacity: fade }}>
			<Backdrop glow={0.22} />
			<AbsoluteFill
				style={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					gap: 16,
				}}
			>
				<div
					style={{
						fontSize: 240,
						fontWeight: 700,
						letterSpacing: -7,
						lineHeight: 1,
						color: colors.white,
					}}
				>
					{value}
					<span style={{ color: colors.greenBright }}>{copy.statSuffix}</span>
				</div>
				<div
					style={{
						fontSize: 44,
						fontWeight: 500,
						color: colors.gray,
						opacity: labelIn,
						transform: `translateY(${(1 - labelIn) * 20}px)`,
					}}
				>
					{copy.statLabel}
				</div>

				{/* The CTA pill is intentionally NOT rendered into the video —
				    the page overlays a real clickable button (#howVideoCta) in this
				    spot during the outro. Keep an equal-height spacer so the
				    brand line below stays in position. */}
				<div style={{ marginTop: 60, height: 103 }} />

				<div
					style={{
						marginTop: 40,
						fontSize: 26,
						fontWeight: 600,
						letterSpacing: 8,
						color: "rgba(255,255,255,0.45)",
						opacity: brandIn,
					}}
				>
					{copy.brand.toUpperCase()}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
