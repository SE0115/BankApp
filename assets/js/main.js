var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 13,
    freeMode: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// /*
let requestURL = 'https://syoon0624.github.io/json/test.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const data = request.response;

    let tomorrow, month, day;
    let classify, date, history, income, price;
    let daily_total; // 하루 총 지출 금액
    let category_total = {
        'health': 0, 'eatout': 0, 'mart': 0, 'shopping': 0, 'oiling': 0
    }; // 카테고리별 지출 금액
    let monthly_details = {
        1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
        7: [], 8: [], 9: [], 10: [], 11: [], 12: []
    }; // 월별 하루 내역

    const ul_tr_histories = document.querySelector('.transaction-histories');
    let li_tr_daily;
    let ul_trs = document.createElement('ul');
    ul_trs.className = 'transactions';

    for (let i = 0; i < data['bankList'].length; i++) {
        classify = data['bankList'][i]['classify'];
        date = data['bankList'][i]['date'];
        tomorrow = (i < data['bankList'].length - 1) ? data['bankList'][i + 1]['date'] : 0;
        history = data['bankList'][i]['history'];
        income = data['bankList'][i]['income'];
        price = data['bankList'][i]['price'];

        month = Number(date.split('-')[1]);
        day = Number(date.split('-')[2]);

        let li_trs_item = document.createElement('li');
        li_trs_item.className = 'transaction-item';

        if (income === 'in') {
            li_trs_item.innerHTML = `
              <span class="item-name">${history}</span>
              <span class="item-cost in">${price}</span>`
        } 
        else {
            if (!monthly_details[month][day - 1]) {
                monthly_details[month][day - 1] = price;
            } else {
                monthly_details[month][day - 1] += price;
            }
            category_total[classify] += price; // 카테고리 별 지출 더하기

            li_trs_item.innerHTML = `
              <span class="item-name">${history}</span>
              <span class="item-cost out">${price}</span>`
        }

        ul_trs.prepend(li_trs_item);

        if (date !== tomorrow) {
            let div_daily_cost = document.createElement('div');
            div_daily_cost.className = 'daily-cost';
            daily_total = monthly_details[Number(date.split('-')[1])][Number(date.split('-')[2]) - 1];
            div_daily_cost.innerHTML = `
              <span class="date">${date}</span>
              <span class="cost"><span class="cost-sum">${(daily_total) ? daily_total : 0}</span>원 지출</span>`
            ul_trs.prepend(div_daily_cost);

            li_tr_daily = document.createElement('li');
            li_tr_daily.className = 'transaction-daily';
            li_tr_daily.prepend(ul_trs);         
            
            ul_tr_histories.prepend(li_tr_daily);
            ul_trs = document.createElement('ul');
            ul_trs.className = 'transactions';
        }
    }
}

//  */