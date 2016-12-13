var path = require("path");
var util = require("util");
var assert = require("assert");
var source = "sitemap.xml";
var htmlSnapshots = require('html-snapshots');

if (process.argv.length >= 3) {
	source = process.argv[2];
}

var result = htmlSnapshots.run({
	input: "sitemap",
	source: source,
	outputDir: "./snapshots",
	outputDirClean: true,
	useJQuery: true,
	timeout: 20000
}, function(err, completed) {

	console.log("completed snapshots:");
	console.log(util.inspect(completed));
	// throw if there was an error
	assert.ifError(err);
});
