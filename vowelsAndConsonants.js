/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.*/

function vowelsAndConsonants(s) {
    //I believe there is a better way to illustrate a regex
    const vowelRegex = s.match(/[aeiou]/ig);
    const consonantRegex = s.match(/[bcdfgjklmnpqrstvwxz]/ig);

    //write only vowels into console
    for(let i=0; i<vowelRegex.length; i++){
        console.log(vowelRegex[i]);
    }

    //write only consonants into console
    for(let i=0; i<consonantRegex.length; i++){
        console.log(consonantRegex[i]);
        }
    }


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

vowelsAndConsonants('dlearnjavascriptloopsinhackerrankweekofcode');