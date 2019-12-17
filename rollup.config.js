import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
		{
			file: pkg.browser,
			format: 'umd',
			name: 'storyblokImage',
		},
	],
	plugins: [babel(), cleanup()],
};
