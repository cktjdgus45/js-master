const CURRENT_WEIGHT = 3.38; //kg
const RER = (CURRENT_WEIGHT * 30 + 70).toFixed(2); //기초대사량Kcal
const DER = (RER * 1.6).toFixed(2);  //일일 대사량 (일일에너지 요구량) 이것보다 적게 급여할시 살이 빠진다.
const minTargetPercent = 0.01;  // 0.1%
const maxTargetPercent = 0.02;  // 0.2%

const targetWeight = (percent) => {
    const result = CURRENT_WEIGHT - (CURRENT_WEIGHT * percent);
    return result;
}

const min = targetWeight(minTargetPercent).toFixed(4);
const max = targetWeight(maxTargetPercent).toFixed(4);

console.table(`포포의 다음주 목요일 ( 3.23 ) 최소 목표 몸무게 : ${min}`);
console.log('-----------------------------------------------------------------');
console.table(`포포의 다음주 목요일 ( 3.23 ) 최대 목표 몸무게 : ${max}`);
console.log('-----------------------------------------------------------------');
console.table(`포포의 기초대사량 : ${RER}Kcal`);
console.log('-----------------------------------------------------------------');
console.table(`포포의 일일 에너지 요구량 : ${DER}Kcal`);

