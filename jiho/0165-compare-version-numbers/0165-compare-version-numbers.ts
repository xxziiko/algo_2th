function compareVersion(version1: string, version2: string): number {
    const maxLen = Math.max(version1.length, version2.length)
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    for(let i = 0; i < maxLen; i++) {
        const number1 = Number(v1[i]??0)
        const number2 = Number(v2[i]??0)

        if(number1 > number2) return 1
        if(number2 > number1) return -1
    }



    return 0
};