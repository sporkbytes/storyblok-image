const FOCAL_SQUARE_LENGTH = 100;

function boundCoordinate(value, upperBound) {
	value = Math.max(0, value);
	value = Math.min(value, upperBound);

	return Math.ceil(value);
}

function transform(
	originalUrl,
	{ focalPointX, focalPointY, height, smartCrop, width } = {}
) {
	const getFocalPoint = focalPoint =>
		typeof focalPoint !== 'number' || isNaN(focalPoint) ? 50 : focalPoint;

	focalPointX = getFocalPoint(focalPointX);
	focalPointY = getFocalPoint(focalPointY);
	width = width || 0;
	height = height || 0;

	if (typeof originalUrl !== 'string') {
		return originalUrl;
	}

	const imageService = 'https://img2.storyblok.com/';
	const path = originalUrl.replace(/(https?:)?\/\/a.storyblok.com/i, '');
	const [originalWidth, originalHeight] = path
		? path.split('/')[3].split('x')
		: [0, 0];

	let option = `${width}x${height}`;

	if (smartCrop) {
		option += '/smart';
	} else {
		const top = boundCoordinate(
			(focalPointY / 100) * originalHeight - FOCAL_SQUARE_LENGTH / 2,
			originalHeight
		);
		const left = boundCoordinate(
			(focalPointX / 100) * originalWidth - FOCAL_SQUARE_LENGTH / 2,
			originalWidth
		);
		const bottom = boundCoordinate(
			top + FOCAL_SQUARE_LENGTH,
			originalHeight
		);
		const right = boundCoordinate(
			left + FOCAL_SQUARE_LENGTH,
			originalWidth
		);

		option += `/filters:focal(${left}x${top}:${right}x${bottom})`;
	}

	return `${imageService}${option}${path}`;
}

export { transform };
