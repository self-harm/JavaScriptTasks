/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.*/

/*Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, ,
consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel
must be printed in the same order as it appeared in .

Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .*/

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
