import Gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: Gulp,
  plugins: plugins,
};

import { copy } from "./gulp/tasks/copy-to-dist.js";
import { resetDist } from "./gulp/tasks/reset-dist.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { sprite } from "./gulp/tasks/svg-sprites.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
  Gulp.watch(path.watch.allSrc, resetDist);
  Gulp.watch(path.watch.html, html);
  Gulp.watch(path.watch.scss, scss);
  Gulp.watch(path.watch.js, js);
  Gulp.watch(path.watch.images, images);
  Gulp.watch(path.watch.svgicons, sprite);
}

export { sprite };

const fonts = Gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = Gulp.series(
  fonts,
  Gulp.parallel(copy, html, scss, js, images, sprite)
);

const dev = Gulp.series(resetDist, mainTasks, Gulp.parallel(watcher, server));
const build = Gulp.series(resetDist, mainTasks);
const deployZip = Gulp.series(resetDist, mainTasks, zip);
const deployFtp = Gulp.series(resetDist, mainTasks, ftp);

export { dev };
export { build };
export { deployZip };
export { deployFtp };

Gulp.task("default", dev);
