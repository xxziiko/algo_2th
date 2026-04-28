function missingNumber(nums: number[]): number {
    const set = new Set()
    for(let i  = 0; i <= nums.length; i++){
        set.add(i)
    }


    for(const num of nums) {
        if(set.has(num)) set.delete(num)
    }

    const result = set.values()

    return result.next().value
};