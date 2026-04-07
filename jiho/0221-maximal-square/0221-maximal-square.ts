function maximalSquare(matrix: string[][]): number {
    const m = matrix.length
    const n =matrix[0].length
    const dp = Array.from({length: m }, () => Array(n).fill(0))
    let max = 0

  for(let j = 0; j < n; j++) {
    dp[0][j] = Number(matrix[0][j])
    max = Math.max(max, dp[0][j])
  }

  for(let i = 0; i < m; i++) {
    dp[i][0] = Number(matrix[i][0])
    max = Math.max(max, dp[i][0])
  }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[i][j] === '0') {
                dp[i][j] = 0
            }else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) +1
            }
            max = Math.max(max, dp[i][j])
        }

    }

    return max * max
    
};