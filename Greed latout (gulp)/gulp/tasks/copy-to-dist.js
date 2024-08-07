export const copy = () => {
  return app.gulp
    .src(app.path.src.allFiles)
    .pipe(app.gulp.dest(app.path.build.fullBuild));
};
