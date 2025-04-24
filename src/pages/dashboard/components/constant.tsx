import { DailyThresholdItem, SourceItem } from "@/types/dashboard";
import contactWithContaminatedSurfaces from "/images/contact_with_contaminated_surfaces.png";
import fecalOral from "/images/fecal_oral.png";
import humanToHuman from "/images/human_to_human.png";

export const sources: SourceItem[] = [
	{
		image: humanToHuman,
		title: "HUMAN TO HUMAN",
		percentage: 75.13,
	},
	{
		image: contactWithContaminatedSurfaces,
		title: "SURFACES CONTACT",
		percentage: 61.56,
	},
	{
		image: fecalOral,
		title: "FECAL-ORAL",
		percentage: 9.43,
	},
];

export const dailyThreshold: DailyThresholdItem[] = [
	{
		numerator: 12,
		description:
			"Cities with a daily increase of over 10000 COVID-19 infections",
	},
	{
		numerator: 10,
		description: "Cities with a daily death toll exceeding 500 due to COVID-19",
	},
	{
		numerator: 35,
		description:
			"City with a daily recovery count exceeding 2000 from COVID-19",
	},
];
