var ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/CodingLeonardo/codingleonardo.github.io.git",
    user: {
      name: "Leonardo Rivero",
      email: "codingleonardo@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
