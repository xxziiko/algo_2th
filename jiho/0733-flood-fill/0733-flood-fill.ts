const directions = [
    [0,1],
    [-1, 0],
    [1, 0],
    [0, -1]
]

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const M = image.length
    const N = image[0].length
    const originColor = image[sr][sc]

    if (originColor === color) return image

    const dfs =(x:number, y:number) =>{
        const stack =[[x, y]]

        image[x][y] = color


        while(stack.length) {
            const [cx, cy] = stack.pop()!
            
            for(const [dx, dy] of directions) {
                const nextX = cx + dx
                const nextY = cy + dy

                if(nextX >= 0 && nextY>=0 && nextX < M && nextY < N && image[nextX][nextY] === originColor) {
                    image[nextX][nextY] = color
                    stack.push([nextX,nextY])
                }
            }
        }
    }

    dfs(sr, sc)

    return image
};