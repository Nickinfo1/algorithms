// Сравнительный анализ алгоритмов
// сортировки слияниеим и вставкой
// При каком значении n время работы одного алгоритма
// превысит над временем работы другого алгоритма

// количество операций в секунду процессора 1
const TASKS_PER_SECOND_CPU1 = Math.pow(10, 10);
// количество операций в секунду процессора 2
const TASKS_PER_SECOND_CPU2 = Math.pow(10, 7);

// количество операций алгоритма вставка
function insertSortNumberOperations(n) {
  return 8 * Math.pow(n, 2);
}

// количество операций алгоритма слияние
function mergeSortNumberOperations(n) {
  return 64 * Math.log2(n);
}

function operation(i) {
  const seconds_insert = insertSortNumberOperations(i) / TASKS_PER_SECOND_CPU1;
  const seconds_merge = mergeSortNumberOperations(i) / TASKS_PER_SECOND_CPU1;
  const diff = seconds_insert - seconds_merge;
  // console.log(Math.floor(diff));
  return { diff: diff, insert: seconds_insert, merge: seconds_merge };
}

function compare_algo_time(n) {
  const arr = [];
  for (let i = 1; i < n; i++) {
    const { diff, insert, merge } = operation(i);
    if (arr.length < 6) {
      arr.push(diff);
    } else {
      arr.shift();
      arr.push(diff);
    }
    if (Math.floor(arr[0]) > 0 && Math.floor(arr[1]) == 0) {
      console.log(`вставкой стало быстрее ${i}`);
      console.log(`${JSON.stringify(arr)} | n = ${i}`);
    }
    if (Math.floor(arr[0]) == 0 && Math.floor(arr[1]) > 0) {
      // вставкой быстрее потом слиянием
      console.log(`слиянием стало быстрее ${i}`);
      console.log(`${JSON.stringify(arr)} | n = ${i}`);
    }
    if (i % 100_000 === 0) {
      console.log(
        `n = ${i}, diff=${diff}, insert = ${insert}, merge = ${merge}`,
      );
    }
  }
}

const oper = 1_000_000;
compare_algo_time(oper);
