function canConstruct(ransomNote: string, magazine: string): boolean {
 const map = new Map()

 for(const char of ransomNote) {
    map.set(char, (map.get(char) ?? 0) +1)
 }   

 for(const char of magazine) {
    if(map.has(char)) {
        map.set(char, map.get(char) -1)
    }
 }

    return ![...map.values()].some((value) => value > 0)
};