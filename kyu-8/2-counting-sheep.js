{/**
    - Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    - For example,
    - [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
    The correct answer would be 17.
    Hint: Don't forget to check for bad values like null/undefined
*/}

function countSheeps(sheep) {
    //Way-1
    // return sheep.filter(Boolean).length

    // Way-2
    // let result = 0;
    // sheep.forEach(item => {
    //     if(item){
    //         result++
    //     }
    // });
    // return result;

    //Way-3
    // for(const item of sheep){
    //     if(item){
    //         result++
    //     }
    // }
    // return result
}

console.log(countSheeps([true, true,true,false,false]))