function isValid(s: string): boolean {
    if(s.length % 2 === 1) return false 

    const stock = []

    for(const char of s) {

        if(stock.at(-1) === '(' && char === ')') {
            stock.pop()
            continue
        }
        if(stock.at(-1) === '{' && char === '}') {
            stock.pop()
            continue
        }
        if(stock.at(-1) === '[' && char === ']') {
            stock.pop()
            continue
        }
            
        stock.push(char)
    }

    return stock.length === 0 
};