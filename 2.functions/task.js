function getArrayParams(...arr) {
  let  min = Infinity;
  let  max = -Infinity;
  let  sum = 0;
  let i;
  
      if(arr.length === 0) return 0;
  
      for(i = 0; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
        sum += arr[i];
      }
      avg = sum / arr.length;
      avg = Math.round(100 * avg + Number.EPSILON) / 100;
  
    return { min: min, max: max, avg: avg };
  }
  
  function summElementsWorker(...arr) {
    let  sum = 0;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
  }
  
  function differenceMaxMinWorker(...arr) {
    let  min = Infinity;
    let  max = -Infinity;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if(min > arr[i]) min = arr[i];
      if(max < arr[i]) max = arr[i];
    }
  
    return max - min;
  }
  
  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if((arr[i] % 2) === 0) sumEvenElement += arr[i]; else sumOddElement += arr[i];
    }
  
    return sumEvenElement - sumOddElement;
  }
  
  function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if((arr[i] % 2) === 0) {
        sumEvenElement += arr[i]; 
        countEvenElement++;
      }
    }
  
    return sumEvenElement / countEvenElement;
  }
  
  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let i;
    let res;
    let numbers;
  
    if(arrOfArr.length === 0) return 0;
  
    for(i = 0; i < arrOfArr.length; i++) {
      numbers = arrOfArr[i];
      res = func(...numbers);
      if(res > maxWorkerResult) maxWorkerResult = res;
    }
  
    return maxWorkerResult;
  }