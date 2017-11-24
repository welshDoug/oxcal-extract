ocd = new Array(); 
calib = new Array(); 
model = new Object();
require('./Hhill2.js');

console.log("OCD Length: " + ocd.length);
/*console.log("OCD[14].length: " + ocd[14].posterior.prob.length);
console.log("OCD[14].start: " + ocd[14].posterior.start);
console.log("OCD[14].end: " + (ocd[14].posterior.start+length));
console.log("OCD[14].mean: " + ocd[14].posterior.mean);
console.log("OCD[14].median: " + ocd[14].posterior.median);*/

var means = {}
for (let i in ocd) {
 if (ocd[i].posterior && ocd[i].posterior.mean) {
 means[ocd[i].name] = ocd[i].posterior.mean;
 }
} 

console.log(means);

//TODO convert to CSV

//TODO write csv file