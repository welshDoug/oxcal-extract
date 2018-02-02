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
 if (ocd[i].posterior && ocd[i].posterior.mean && ocd[i].posterior.mean < -1000) {
 means[ocd[i].name] = ocd[i].posterior.mean;
 }
} 

var medians = {}
for (let i in ocd) {
 if (ocd[i].posterior && ocd[i].posterior.median && ocd[i].posterior.median < -1000) {
 medians[ocd[i].name] = ocd[i].posterior.median;
 }
} 

console.log(means);
console.log(medians);


//TODO convert to CSV

//TODO write csv file
