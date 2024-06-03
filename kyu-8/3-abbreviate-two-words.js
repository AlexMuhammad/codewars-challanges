function abbrevName(name){

    // code away
  const splitWord = name.split(" ");
    // const firstWord = splitWord[0].charAt(0).toUpperCase();
    // const secondWord = splitWord[1].charAt(0).toUpperCase();
    const result = `${splitWord[0][0].toUpperCase()}.${splitWord[1][0].toUpperCase()}`;
    return result;
}

console.log(abbrevName("ahh tes"))