function groupAnagrams(strs: string[]): string[][] {
    // 목표: 애나그램끼리 그룹핑
    // 완전탐색 필요. 현재의 요소와 모든 요소를 비교해봐야 한다. 

    const result = new Map()

    for(const str of strs) {
        const key = str.split('').sort().join('')

        if(!result.has(key)) {
            result.set(key, [])
        }

        result.get(key).push(str)
    }

    return Array.from(result.values())
};