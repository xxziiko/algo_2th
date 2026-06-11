function spiralOrder(matrix: number[][]): number[] {
    // 무엇을 기억해? 숫자 (x) -> 좌표!
    // 한번 움직일 때 바뀌는 것 위치
    // 언제 종료? 다 돌았을 때
    // 예외는? -> 그리드 모서리? 각 경계
    const result = []
    let top = 0
    let right = matrix[0].length -1
    let left = 0
    let bottom = matrix.length -1

    while(top <= bottom && left <= right){
        for(let col = left; col <=right; col++ ) {
            result.push(matrix[top][col])
        }
        top+=1

        for(let row = top; row <= bottom; row++) {
            result.push(matrix[row][right])
        }
        right--

        if(top <= bottom) {
            for(let col = right; col >= left; col--) {
                result.push(matrix[bottom][col])
            }
            bottom--
        }

        if(left <= right) {
            for(let row = bottom; row >= top; row--){
                result.push(matrix[row][left])
            }
            left++
        }
    }

    return result
};