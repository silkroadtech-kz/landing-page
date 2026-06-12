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
import type { StepCopy } from "../strings";

/* ────────────────────────── visuals ────────────────────────── */

const Check: React.FC<{ at: number }> = ({ at }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const s = spring({ frame: frame - at, fps, config: { damping: 12 } });
	return (
		<div
			style={{
				width: 44,
				height: 44,
				borderRadius: "50%",
				background: colors.green,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				transform: `scale(${s})`,
				flexShrink: 0,
			}}
		>
			<svg width="22" height="22" viewBox="0 0 24 24">
				<path
					d="M4 12.5l5 5L20 6.5"
					stroke="#010205"
					strokeWidth="3.5"
					fill="none"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
};

/** Step 1 — audit: wireframe rows revealed by a scanning beam, then checked off. */
const AuditVisual: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rows = [0, 1, 2, 3];
	const scanY = interpolate(frame, [12, 75], [0, 100], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div style={{ position: "relative", width: "100%", height: "100%", padding: 50 }}>
			<div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
				{rows.map((i) => {
					const s = spring({
						frame: frame - 10 - i * 8,
						fps,
						config: { damping: 200 },
					});
					return (
						<div
							key={i}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 24,
								opacity: s,
								transform: `translateX(${(1 - s) * -30}px)`,
							}}
						>
							<Check at={26 + i * 12} />
							<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
								<div
									style={{
										height: 18,
										width: `${72 - i * 9}%`,
										borderRadius: 9,
										background: "rgba(255,255,255,0.28)",
									}}
								/>
								<div
									style={{
										height: 12,
										width: `${46 - i * 5}%`,
										borderRadius: 6,
										background: "rgba(255,255,255,0.12)",
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{/* scanning beam */}
			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: `${scanY}%`,
					height: 4,
					background: `linear-gradient(90deg, transparent, ${colors.green}, transparent)`,
					boxShadow: `0 0 30px 6px ${colors.green}55`,
					opacity: scanY > 0 && scanY < 100 ? 1 : 0,
				}}
			/>
		</div>
	);
};

/** Step 2 — MVP: browser-window mockup whose UI blocks assemble one by one. */
const MvpVisual: React.FC<{ tag: string }> = ({ tag }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const pop = (at: number) =>
		spring({ frame: frame - at, fps, config: { damping: 14, stiffness: 130 } });

	const win = pop(8);
	const blocks: { at: number; style: React.CSSProperties }[] = [
		{ at: 18, style: { top: 70, left: 28, width: 130, bottom: 28 } }, // sidebar
		{ at: 26, style: { top: 70, left: 180, right: 28, height: 90 } }, // hero
		{ at: 34, style: { top: 180, left: 180, width: 150, height: 110 } },
		{ at: 40, style: { top: 180, left: 352, width: 150, height: 110 } },
		{ at: 46, style: { top: 180, left: 524, width: 150, height: 110 } },
		{ at: 53, style: { top: 310, left: 180, right: 28, height: 70 } },
	];

	const tagIn = pop(66);

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					position: "relative",
					width: 710,
					height: 420,
					borderRadius: 20,
					background: "#0a0a0a",
					border: `1.5px solid ${colors.stroke}`,
					transform: `scale(${win})`,
					opacity: win,
				}}
			>
				{/* title bar */}
				<div style={{ display: "flex", gap: 10, padding: 22 }}>
					{["#ff5f57", "#febc2e", "#28c840"].map((c) => (
						<div key={c} style={{ width: 14, height: 14, borderRadius: 7, background: c }} />
					))}
				</div>
				{blocks.map((b, i) => {
					const s = pop(b.at);
					return (
						<div
							key={i}
							style={{
								position: "absolute",
								borderRadius: 12,
								background:
									i === 1 ? `${colors.green}33` : "rgba(255,255,255,0.09)",
								border: i === 1 ? `1.5px solid ${colors.green}88` : "none",
								opacity: s,
								transform: `scale(${0.7 + s * 0.3})`,
								...b.style,
							}}
						/>
					);
				})}
				{/* iteration tag */}
				<div
					style={{
						position: "absolute",
						right: -30,
						top: -26,
						padding: "12px 26px",
						borderRadius: 999,
						background: colors.green,
						color: "#010205",
						fontSize: 22,
						fontWeight: 700,
						transform: `scale(${tagIn}) rotate(4deg)`,
					}}
				>
					{tag}
				</div>
			</div>
		</div>
	);
};

/** Step 3 — scaling: bar chart growing with a rising arrow. */
const ScaleVisual: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const heights = [90, 150, 130, 210, 280, 360];

	const arrowP = interpolate(frame, [32, 80], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "flex-end",
				justifyContent: "center",
				gap: 26,
				padding: "60px 70px",
			}}
		>
			{heights.map((h, i) => {
				const s = spring({
					frame: frame - 8 - i * 5,
					fps,
					config: { damping: 16, stiffness: 90 },
				});
				const last = i === heights.length - 1;
				return (
					<div
						key={i}
						style={{
							width: 78,
							height: h * s,
							borderRadius: 14,
							background: last
								? colors.green
								: `rgba(255,255,255,${0.1 + i * 0.04})`,
						}}
					/>
				);
			})}
			<svg
				style={{ position: "absolute", inset: 0 }}
				viewBox="0 0 700 480"
				fill="none"
			>
				<path
					d="M80 380 C 250 360, 380 300, 600 110"
					stroke={colors.greenBright}
					strokeWidth="7"
					strokeLinecap="round"
					strokeDasharray={700}
					strokeDashoffset={700 * (1 - arrowP)}
				/>
				{arrowP > 0.97 && (
					<path
						d="M600 110 l-34 2 m34 -2 l-10 32"
						stroke={colors.greenBright}
						strokeWidth="7"
						strokeLinecap="round"
					/>
				)}
			</svg>
		</div>
	);
};

/* ────────────────────────── scene ────────────────────────── */

export const StepScene: React.FC<{
	step: StepCopy;
	index: number;
	duration: number;
}> = ({ step, index, duration }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const fade = useSceneFade(duration);

	const numIn = spring({ frame, fps, config: { damping: 16, stiffness: 100 } });
	const titleIn = spring({ frame: frame - 10, fps, config: { damping: 200 } });
	const descIn = spring({ frame: frame - 20, fps, config: { damping: 200 } });
	const cardIn = spring({
		frame: frame - 14,
		fps,
		config: { damping: 18, stiffness: 90 },
	});

	const visual =
		index === 0 ? (
			<AuditVisual />
		) : index === 1 ? (
			<MvpVisual tag={step.tag} />
		) : (
			<ScaleVisual />
		);

	return (
		<AbsoluteFill style={{ fontFamily: font, opacity: fade }}>
			<Backdrop glow={0.1} />
			<AbsoluteFill
				style={{
					flexDirection: "row",
					alignItems: "center",
					padding: "0 110px",
					gap: 80,
				}}
			>
				{/* text column */}
				<div style={{ width: 640, flexShrink: 0 }}>
					<div
						style={{
							display: "flex",
							alignItems: "baseline",
							gap: 18,
							opacity: numIn,
							transform: `translateY(${(1 - numIn) * 40}px)`,
						}}
					>
						<span
							style={{
								fontSize: 170,
								fontWeight: 700,
								letterSpacing: -5,
								lineHeight: 1,
								color: colors.white,
							}}
						>
							{step.num}
						</span>
						<span style={{ fontSize: 42, color: colors.green, fontWeight: 600 }}>
							step
						</span>
					</div>
					<h2
						style={{
							margin: "36px 0 0",
							fontSize: 64,
							fontWeight: 700,
							letterSpacing: -2,
							lineHeight: 1.2,
							color: colors.white,
							opacity: titleIn,
							transform: `translateY(${(1 - titleIn) * 24}px)`,
						}}
					>
						{step.title}
					</h2>
					<p
						style={{
							margin: "28px 0 0",
							fontSize: 30,
							lineHeight: 1.7,
							color: colors.gray,
							opacity: descIn,
							transform: `translateY(${(1 - descIn) * 24}px)`,
						}}
					>
						{step.desc}
					</p>
					{/* progress dots */}
					<div style={{ display: "flex", gap: 12, marginTop: 48, opacity: descIn }}>
						{[0, 1, 2].map((i) => (
							<div
								key={i}
								style={{
									width: i === index ? 46 : 14,
									height: 14,
									borderRadius: 7,
									background: i === index ? colors.green : "rgba(255,255,255,0.18)",
								}}
							/>
						))}
					</div>
				</div>

				{/* visual card */}
				<div
					style={{
						flex: 1,
						height: 560,
						borderRadius: 30,
						background: colors.card,
						border: `1.5px solid rgba(255,255,255,0.07)`,
						overflow: "hidden",
						opacity: cardIn,
						transform: `translateY(${(1 - cardIn) * 60}px) scale(${0.92 + cardIn * 0.08})`,
					}}
				>
					{visual}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
