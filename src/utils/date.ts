export const formatDate = (dateString: string): string => {
	const [day, month] = dateString.split("/");
	return `${day}/${month}`;
};
