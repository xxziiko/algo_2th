const directions = [
    [0,1],
    [1,0],
    [-1, 0],
    [0, -1]
]

function numIslands(grid: string[][]): number {
    const M = grid.length
    const N = grid[0].length

    const bfs =(x: number,y:number) => {
        const queue = [[x,y]]
        grid[x][y] = "0"    

        while(queue.length) {
            const [cx,cy] = queue.shift()!

            for(const [dx, dy] of directions) {
                const nextX = cx + dx
                const nextY = cy + dy

                if(nextX >= 0 && nextY >=0 && nextX < M && nextY < N && grid[nextX][nextY]==='1') {
                    grid[nextX][nextY] = '0' 
                    queue.push([nextX,nextY])
                }

            }
        }
    }
   
    let result = 0

    for(let i =0; i < M; i ++) {
        for(let j =0; j < N; j ++) {
            if(grid[i][j]==='1') {
                bfs(i,j)
                result +=1
            }
        }
    }

    return result
};