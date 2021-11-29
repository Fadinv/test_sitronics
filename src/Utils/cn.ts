export const cn = (...classes: (string | undefined | boolean | null)[]) => {
	let result = '';
	(classes || []).forEach(className => {
		if (typeof className === 'string') {
			if (result) result += ' ';
			result += className;
		}
	});

	return result;
};