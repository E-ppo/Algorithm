/* 
	5*5 격자판에 아래와 같이 숫자가 적혀있습니다. 

	10 13 10 12 15
	12 39 30 28 11
	11 25 50 53 15
	19 27 29 37 27
	19 13 30 13 19
	
	N*N의 격자판이 주어지만 각 행의 합, 각 열의 합, 두 대각선의 합 중 가낭 큰 합을 출력합니다. 

	조건 
	첫 줄에 자연수 N이 주어진다(1<=N<=50)
	두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다. 

	최대 합을 출력합니다. 
*/

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let sumRows = 0
  let sumColumns = 0

  for (i = 0; i < 5; i++) {
    sumRows = sumColumns = 0
    for (j = 0; j < 5; j++) {
      sumRows += arr[i][j]
      sumColumns += arr[j][i]
    }
    answer = Math.max(answer, sumRows, sumColumns)
  }
  let sumCross1 = 0
  let sumCross2 = 0

  for (i = 0; i < 5; i++) {
    sumCross1 += arr[i][i]
    sumCross2 += arr[i][5 - i - 1]
  }
  answer = Math.max(answer, sumCross1, sumCross2)
  return answer
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]
console.log(solution(arr))
