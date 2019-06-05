let substringCounter = (string, substring) => {
    let subLength = substring.length,
      strLength = string.length,
      counter = 0;

    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < subLength; j++) {
            if (string[i] !== substring[j]) break;
            else if (j === subLength - 1 && substring[j] === string[i]) {
                counter++;
                i -= j;
                break;
            }
            i++;
        }
    }

    return counter;
}

substringCounter('something ing in smthing', 'ing')