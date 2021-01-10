 
function translatePigLatin(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const arrStr = str.split('')
    let indexToSplit = 0;
    let isFirstVowelFound = false;
    let isFirstLetterVowel = false;
    let firstCluster = '';


    for(let i = 0; i < arrStr.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(arrStr[i] == vowels[j] && !isFirstVowelFound){
                indexToSplit = i;
                isFirstVowelFound = true;
                if(i == 0)
                    isFirstLetterVowel = true;
            }
        }
    }

    if(isFirstVowelFound && !isFirstLetterVowel){
        firstCluster = arrStr.splice(0, indexToSplit)
        let newArr = arrStr.concat(firstCluster)
        str = newArr.join('');
        
    }

    if(isFirstLetterVowel)
        str += "way"
    else
        str += "ay" 

    return(str)
}

console.log(translatePigLatin("rhythm"))