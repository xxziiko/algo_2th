function calPoints(operations: string[]): number {
    //상태: 무엇을 기억해야 하는가? -> 새로운 스코어.
    //규칙: 한 번 움직일 때 무엇이 바뀌는가? +(이전 점수 합), D(이전 점수의 두배), C(이전 점수 삭제)
    //종료: 언제 멈추는가? -> 모든 경기가 끝났을 때
    //예외: 범위 밖, 충돌, 중복, 이미 방문 처리?
    const records = []

    for (const operation of operations) {

        if(!isNaN(Number(operation))) {
            const num = Number(operation)
            records.push(num)
        }

        if(operation === 'C') {
            records.pop()
        }

        if(operation === 'D'){
            records.push(records.at(-1) * 2)
        }

        if(operation === '+') {
            records.push(records.at(-1) + records.at(-2))
            continue
        }
    }


    let score = 0
    for(const record of records) {
        score += record
    }

    return score
};