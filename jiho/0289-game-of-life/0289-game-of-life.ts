/**
 Do not return anything, modify board in-place instead.
 */


const directions = [
    [1, 0],
    [-1, 0],
    [1, 1],
    [0, 1],
    [0, -1],
    [-1, -1],
    [-1, 1],
    [1, -1]
]

function gameOfLife(board: number[][]): void {
    // 기억해야 할 것 현재 위치에서의 주변 세포
    // 움직였을때 바뀌는 것 -> 보드의 모든 세포의 상태 (살아있음 1, 죽음 0)
    // 종료 조건
    // 예외 ->보드의 양 끝 모서리
    // 주변 live <2 -> 0
    // 주변 live === 2 || live === 3  -> 1
    // 주변 Live > 3 -> 0

    const N = board[0].length
    const M = board.length

    const next = board.map(row => [...row])

    for(let x = 0; x < M; x++) {
        for(let y = 0; y < N; y ++) {
            let live = 0

            for(const [dx, dy] of directions) {
                const nx = dx + x
                const ny = dy + y

                if(nx >= 0 && ny >= 0 && nx < M && ny < N && next[nx][ny] === 1) {
                    live +=1
                }
            }


            if(next[x][y] === 1) {
                if(live < 2) board[x][y] = 0
                if(live ===2 || live === 3) board[x][y] = 1
                else board[x][y] = 0
            } else {
                if(live === 3) board[x][y] = 1
                else board[x][y] = 0
            }
        }
    }
};