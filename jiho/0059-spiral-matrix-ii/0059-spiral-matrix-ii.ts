function generateMatrix(n: number): number[][] {
    const numbers = Array.from({ length: n * n }, (_, i) => i +1);
    const matrix = Array.from({ length: n }, (_, i) => Array(n).fill(0));
    let top =0
    let left = 0
    let right = n-1
    let bottom = n-1


    while(top <= bottom && left <= right) {
        //왼 -> 오
        for(let col = left; col <= right; col++){
            matrix[top][col] = numbers.shift()
        }
        top++

        //위 -> 아래 
        for(let row = top; row <= bottom; row++) {
            matrix[row][right] = numbers.shift()
        }
        right--

        //오 -> 왼
        if(left <= right) {
            for(let col = right; col >= left; col--) {
                matrix[bottom][col] = numbers.shift()
            }
        }
        bottom--

        // 아래 -> 위
        if(top <= bottom) {
            for(let row = bottom; row >= top; row--) {
                matrix[row][left] = numbers.shift()
            }
        }
        left++
    }

    return matrix
};