function generateMatrix(n: number): number[][] {
    const matrix = Array.from({ length: n }, (_, i) => Array(n).fill(0));
    let num = 0
    let top =0
    let left = 0
    let right = n-1
    let bottom = n-1


    while(top <= bottom && left <= right) {
        //왼 -> 오
        for(let col = left; col <= right; col++){
            matrix[top][col] = num+=1
        }
        top++

        //위 -> 아래 
        for(let row = top; row <= bottom; row++) {
            matrix[row][right] = num+=1
        }
        right--

        //오 -> 왼
        if(left <= right) {
            for(let col = right; col >= left; col--) {
                matrix[bottom][col] = num+=1
            }
        }
        bottom--

        // 아래 -> 위
        if(top <= bottom) {
            for(let row = bottom; row >= top; row--) {
                matrix[row][left] = num+=1
            }
        }
        left++
    }

    return matrix
};