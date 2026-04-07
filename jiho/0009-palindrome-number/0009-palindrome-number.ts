function get(x:number) {
    let count = 1
    while(Math.floor(x / count) >= 10) {
        count *=10
    }

    return count
}

function isPalindrome(x: number): boolean {
    if(x < 0) return false

    let div= get(x)

    while(x > 0) {
        let left = Math.floor(x/div)
        let right = x % 10

        if(left !== right) return false

        x = Math.floor((x % div) / 10)
        div /= 100
    }

    return true
};