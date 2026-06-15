function backspaceCompare(s: string, t: string): boolean {
    const stackOfS = []
    const stackOfT = []

    for(const char of s) {
        if(char === '#') stackOfS.pop()
        else stackOfS.push(char)
    }

    for(const char of t) {
        if(char === '#') stackOfT.pop()
        else stackOfT.push(char)
    }



    return stackOfT.join('') === stackOfS.join('')
};