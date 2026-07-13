function twoSum(nums: number[], target: number): number[] {
    const map = new Map ()

    for(const [i, num] of nums.entries()) {
        const rest = target - num

        if(map.has(rest)) {
            return [i, map.get(rest)]
        }

        map.set(num, i)
    }

    return []
};