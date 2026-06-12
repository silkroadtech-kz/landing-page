import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const jakarta = loadJakarta();
const inter = loadInter();

// Plus Jakarta Sans has no Cyrillic — Inter covers it (same fallback the site uses).
export const font = `${jakarta.fontFamily}, ${inter.fontFamily}, sans-serif`;

export const colors = {
	bg: "#010205",
	card: "#121212",
	cardSoft: "#1a1a1a",
	green: "#9ac763",
	greenBright: "#99cf63",
	gray: "#878c91",
	white: "#fafafa",
	stroke: "rgba(255,255,255,0.15)",
};

export const FPS = 30;

/** Scene durations in frames */
export const DUR = {
	intro: 90,
	step: 180,
	outro: 150,
};

export const TOTAL = DUR.intro + DUR.step * 3 + DUR.outro;
