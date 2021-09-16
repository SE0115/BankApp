const category_total = {health: 852000, eatout: 617800, mart: 1183669, shopping: 5304610, oiling: 180000};
const monthly_details = [62000, 61400, 201500, 111500, 57000, 167500, 254330, 22800, undefined, 82300, undefined, 70600, 879300, 97000, 25200, 9000, 59000, 77410, 339000, 157580, 90000, 3780800, 387710, 70650, 43600, 96900, undefined, undefined, 68000, 124999];

// 도넛 차트
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["주유비", "건강관리비", "외식비", "장보기", "상점"],
        datasets: [{
            data: [category_total['oiling'], category_total['health'], category_total['eatout'], category_total['mart'], category_total['shopping']],
            backgroundColor: ["#db3069", "#f58f29","#ff4b3e","#235789","#9bc53d"],
            borderWidth: 0
        }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      cutoutPercentage: 75, // 차트 굵기 조절
    }
});

const centerText = document.createElement('span');
centerText.className = 'center-text';
centerText.innerHTML = `${addComma(Object.values(category_total).reduce((a,b) => a+b))}<span>원</span>`
document.querySelector('.graph-circle').appendChild(centerText);

let arr=[];
for(let i=0; i<monthly_details.length; i++){
  arr.push(i+1);
}


//바 차트
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
    datasets: [{
        backgroundColor: "#38c976",
        data: monthly_details
    }]
  },
  options: {
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: 20000,
                  stepSize: 20000,
                  max: 100000
              }
          }]
      }
  }       
});

function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}