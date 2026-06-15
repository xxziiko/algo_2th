function calPoints(operations: string[]): number {
   const scores = []

   for (const operation of operations ){
        const num = Number(operation)
        if(!isNaN(num)) {
            scores.push(num)
        }

        if(operation === 'C') {
            scores.pop()
        }

        if(operation === 'D') {
            scores.push(2 * scores.at(-1))
        }

        if(operation === '+') {
            scores.push(scores.at(-1)+scores.at(-2))
        }
    }

    let sum = 0
    for(const score of scores ) {
        sum+=score
    }

    return sum
};