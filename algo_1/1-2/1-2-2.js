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

function compare_algo_time(n) {
  let time;
  const arr = [];
  for (let i = 1; i < n; i++) {
    const seconds_insert =
      insertSortNumberOperations(i) / TASKS_PER_SECOND_CPU1;
    const seconds_merge = mergeSortNumberOperations(i) / TASKS_PER_SECOND_CPU2;
    const diff = seconds_insert - seconds_merge;
    if (diff === 0) {
      console.log(n);
    }
    // console.log(
    //   `Элементов: ${n} | Вставкой: ${seconds_insert} | Слиянием: ${seconds_merge} | Разность: ${diff === 0 ? "Одинаково" : diff} | ${diff > 0 ? "слиянием быстрее" : "вставкой быстрее"}`,
    // );
  }
}

for (let i = 1; i < 1000000; i++) {
  compare_algo_time(i);
}

// В итоге с ростом количества элементов Вставка работает быстрее
