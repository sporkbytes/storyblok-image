import { transform } from './index';

const testImageUrl =
	'https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg';
const testImageWithFaceUrl =
	'https://a.storyblok.com/f/39898/2250x1500/c15735a73c/demo-image-human.jpeg';

describe('Base Functionality', () => {
	it('should change domains and focus on the center of the image when transforming with no options', () => {
		expect(transform(testImageUrl)).toMatchSnapshot();
	});
});

describe('Custom focal point', () => {
	it('should focus on the bottom of the image when focalPointY is above 50', () => {
		expect(
			transform(testImageWithFaceUrl, {
				focalPointY: 80,
				height: 130,
				width: 600,
			})
		).toMatchSnapshot();
	});

	it('should focus on the top of the image when focalPointY is below 50', () => {
		expect(
			transform(testImageWithFaceUrl, {
				focalPointY: 20,
				height: 130,
				width: 600,
			})
		).toMatchSnapshot();
	});
});

describe('Facial detection and smart cropping', () => {
	it('should focus on a face when the smartCrop option is set to true', () => {
		expect(
			transform(testImageWithFaceUrl, {
				height: 130,
				smartCrop: true,
				width: 600,
			})
		).toMatchSnapshot();
	});
});

describe('Resizing', () => {
	it('should resize the image when given height and width options', () => {
		expect(
			transform(testImageUrl, { height: 500, width: 500 })
		).toMatchSnapshot();
	});

	it('should resize proportional to width when given a width option and no height', () => {
		expect(transform(testImageUrl, { width: 200 })).toMatchSnapshot();
	});

	it('should resize proportional to height when given a height option and no width', () => {
		expect(transform(testImageUrl, { height: 200 })).toMatchSnapshot();
	});
});
