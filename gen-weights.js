let main1 = new Array();
main1[0] = [134,135];
main1[1] = [0,1,2,3,4,5];

let main2 = new Array();
main2[0] = [6];
main2[1] = [7,8,9,10];
main2[2] = [11,12,13];
main2[3] = [14,15];
main2[4] = [16,17];

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
                console.log(phase[j] + "\t" + phase[k] + "\t1"); 
            }
            
            //Now output weight with others in sequence
            for (let l = 0; l < sequenceArray.length; l++) {
                if (l == i) {
                    continue;
                }
                let phase2 = sequenceArray[l];
                for (let m = 0; m < phase2.length; m++) {
                    console.log(phase[j] + "\t" + phase2[m] + "\t" + 1/(Math.abs(i-l)+1)); 
                }
            }
        }
    }
}

generateWeights(main1);
generateWeights(main2);