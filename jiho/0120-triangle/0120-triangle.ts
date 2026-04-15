function minimumTotal(triangle: number[][]): number {
  const n = triangle.length
  const dp = Array.from({length:n}, (_, i) => Array(i+1).fill(0) )
  
  dp[0][0] = triangle[0][0]

  for(let i = 1; i< n ;i ++) {
    dp[i][0] = dp[i-1][0] + triangle[i][0]
    dp[i][i] = dp[i-1][i-1] + triangle[i][i]
    
    for(let j = 1; j < i; j++) {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
    }
  }

  return Math.min(...dp[n-1])
};