module.exports.argv = require("yargs")
  .options({
    adress: {
      alias: "a",
      desc: "City adress",
      demand: true,
    },
  })
  .help().argv;
