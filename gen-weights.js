//Go through each main array
//For each sub array

//For a 1D array
//For each element create a weight to every other, value 1
// Could map to an object e.g.
/*
{ 
    id : 134,
    1 : [135],
    0.5 : [0,1,2,3,4,5]
}
*/
//Then traverse list of objects, and print
/*
134 135 1
134 0   0.5
134 1   0.5
134 2   0.5
…
*/

function generateWeights(sequenceArray) {
    for (let i = 0; i < sequenceArray.length; i++) {
        let phase = sequenceArray[i];
        for (let j = 0; j < phase.length; j++) {
            //For each date, output weight with every other in phase
            for (let k = 0; k < phase.length; k++) {
                if (k == j) {
                    continue;
                }
                process.stdout.write(phase[j] + "\t" + phase[k] + "\t1\r\n"); 
            }
            
            //Now output weight with others in sequence
            for (let l = 0; l < sequenceArray.length; l++) {
                if (l == i) {
                    continue;
                }
                let phase2 = sequenceArray[l];
                for (let m = 0; m < phase2.length; m++) {
                    process.stdout.write(phase[j] + "\t" + phase2[m] + "\t" + 1/(Math.abs(i-l)+1) + "\r\n"); 
                }
            }
        }
    }
}

let main5_7_9_p1 = new Array();
main5_7_9_p1[0] = [134,135];
main5_7_9_p1[1] = [0,1,2,3,4,5];

let main5_7_9_p2 = new Array();
main5_7_9_p2[0] = [6];
main5_7_9_p2[1] = [7,8,9,10];
main5_7_9_p2[2] = [11,12,13];
main5_7_9_p2[3] = [14,15];
main5_7_9_p2[4] = [16,17];

let main16_19_p2 = new Array();
main16_19_p2[0] = [18,19,21];
main16_19_p2[1] = [20,22];
main16_19_p2[2] = [23,24,25,26,27,28];
main16_19_p2[3] = [29,30,31,32,33,34];
main16_19_p2[4] = [35,36,37];

let main_isolated = new Array();
main_isolated[0] = [38,42,40,41,39,43];

let cross_dykes = new Array();
cross_dykes[0] = [44,46,47,48,49,45];

let long_barrow = new Array();
long_barrow[0] = [58,59];
long_barrow[1] = [60];
long_barrow[2] = [141];
long_barrow[3] = [61];
long_barrow[4] = [62,63,64,65,66];

let inner_south_cd = new Array();
inner_south_cd[0] = [52,53,54];
inner_south_cd[1] = [142];
inner_south_cd[2] = [55,56,51];

let stepleton_enclosure = new Array();
stepleton_enclosure[0] = [67,68];
stepleton_enclosure[1] = [69,70,71,72,73,140];
stepleton_enclosure[2] = [137,138,139,74,75];

let stepleton_discrete = new Array();
stepleton_discrete[0] = [77,78,79,80,81,82,83,84,85,86]

let middle_outwork = new Array();
middle_outwork[0] = [87];
middle_outwork[1] = [88,89];
middle_outwork[2] = [90,91];
middle_outwork[3] = [92,93,94];

let inner_outwork = new Array();
inner_outwork[0] = [95,96];
inner_outwork[1] = [97];
inner_outwork[2] = [98];
inner_outwork[3] = [99,100,101,102];
inner_outwork[4] = [103,104,105,106,107];
inner_outwork[5] = [108,109];
inner_outwork[6] = [114,113,110,112,111];

let discrete_features = new Array();
discrete_features[0] = [115,116,136];

let shroton_spur = new Array();
shroton_spur[0] = [120,118,119,125,121,122,123];
shroton_spur[1] = [124,126,127,128,129];

let outer_hanford = new Array();
outer_hanford[0] = [130,131,132,133];

generateWeights(main5_7_9_p1);
generateWeights(main5_7_9_p2);
generateWeights(main16_19_p2);
generateWeights(main_isolated);
generateWeights(cross_dykes);
generateWeights(long_barrow);
generateWeights(inner_south_cd);
generateWeights(stepleton_enclosure);
generateWeights(stepleton_discrete);
generateWeights(middle_outwork);
generateWeights(inner_outwork);
generateWeights(discrete_features);
generateWeights(shroton_spur);
generateWeights(outer_hanford);