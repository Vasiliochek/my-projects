import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    fullBuild: `${buildFolder}/files`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css`,
    js: `${buildFolder}/js`,
    images: `${buildFolder}/images`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    allFiles: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*`,
    svg: `${srcFolder}/images/**/*.svg`,
    fonts: `${srcFolder}/fonts/`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    allSrc: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    svgicons: `${srcFolder}/svgicons/**/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
