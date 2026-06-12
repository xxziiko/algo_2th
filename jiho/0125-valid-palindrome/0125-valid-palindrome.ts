function isPalindrome(s: string): boolean {

    const isValid = (s) => {
        const code = s.toLowerCase().charCodeAt(0);
        
        const isNumber = code >= 48 && code <= 57
        const isChar = code >= 97 && code <=122

        return isNumber || isChar
    }

    let cleaned = ''
    for(const char of s) {
        if(isValid(char)) {
            cleaned += char.toLowerCase()
        }
    }

    let left = 0
    let right = cleaned.length -1

    while(left < right) {
        if(cleaned[left] !== cleaned[right]) return false
        left +=1
        right -=1
    }

    return true
};