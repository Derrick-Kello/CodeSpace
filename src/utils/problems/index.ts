import { Problem } from "../types/problem";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {}; // Export an empty object since problems will be fetched from Firestore
