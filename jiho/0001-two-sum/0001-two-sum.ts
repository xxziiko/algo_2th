function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for(const [i, num] of nums.entries()){
        const rest = target - num

        if(map.has(rest)) {
            return [map.get(rest), i]
        }

        map.set(num, i)
    }

    return []
};