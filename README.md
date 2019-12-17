# Storyblok Image

## Purpose

This package provides helpers for utilizing [Storyblok's Image Service](https://www.storyblok.com/docs/image-service) with a simple interface and a handful of options you can pass to it.

## Install

`npm i @sporkbytes/storyblok-image` or `yarn add @sporkbytes/storyblok-image`

## Usage

We currently have a single `transform` function that is exported for use. It takes two parameters:

-   `originalUrl` - the original URL of the image from Storyblok. This should contain `a.storyblok.com`.
-   `options` - an optional object describing the transformations to be made.
    -   `focalPointX` - a number between 0 and 100 representing where in the image's width the crop should focus. This will work in tandem with `focalPointY` and only has an effect if you set `width`. If this is not defined, the center of the image's width is the focal point when cropping.
    -   `focalPointY` - a number between 0 and 100 representing where in the image's height the crop should focus. This will work in tandem with `focalPointX` and only has an effect if you set `height`. If this is not defined, the center of the image's height is the focal point when cropping.
    -   `height` - the number of pixels to crop the image's height.
    -   `smartCrop` - a boolean that determines whether cropping should attempt to keep human faces in-frame. This only has an effect when either `height` or `width` is set. It is recommended that you only use this if you don't manually set `focalPointX` or `focalPointY`.
    -   `width` - the number of pixels to crop the image's width.

Check [the tests file](./src/index.spec.js) for some detailed examples.

## Supported Environments

We export in CommonJS, UMD, and ES module formats based on [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib), so this should be usable in any environment. If you have issues in your environment, please let us know.

## Acknowledgements

The original function code was written by [@DumitruMitaru](https://github.com/DumitruMitaru). The original commit for this repository was committed by [@ajmueller](https://github.com/ajmueller), who was responsible for open-sourcing the library.

## To Do

-   [ ] [Fit-in](https://www.storyblok.com/docs/image-service#fit-in)
-   [ ] [Changing the format](https://www.storyblok.com/docs/image-service#changing-the-format)
-   [ ] [Quality optimization](https://www.storyblok.com/docs/image-service#quality-optimization)

## License

[MIT](./LICENSE)
