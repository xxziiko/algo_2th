function findDiagonalOrder(mat: number[][]): number[] {
    const result = []

    // 나올 수 있는 방향 : 왼 -> 오, 위 -> 대각선 왼쪽 아래, 위 -> 아래, 아래 -> 대각선 우측 위
    // 기억해야 하는 것: 방향. row, col, dirction
    // 종료 조건: 마지막 그리드. result.length === m*n

    const M = mat.length
    const N = mat[0].length
    let row = 0
    let col = 0
    let dir = 1; // 1이면 오른쪽 위, -1이면 왼쪽 아래
    
    while (result.length < M * N){
        // 현재 칸을 먼저 result에 넣는다.
        result.push(mat[row][col])
        // 다음 칸 후보를 계산한다.

        if(dir === 1) {
            // 오른쪽 위로 이동
            if(col === N -1) {
                row++
                dir = -1
            } else if(row === 0) {
                col++
                dir = -1
            } else {
                row--;
                col++;
            }
        }else {
            //왼쪽 아래로 이동
            if(row === M - 1 ) {
                col++
                dir = 1
            } else if (col === 0) {
                row++
                dir = 1
            }else {
                row++ 
                col--
            }
        }
    }

    return result
};