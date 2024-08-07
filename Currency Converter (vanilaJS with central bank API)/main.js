(async () => {
  const ruble = {
    CharCode: 'RUR',
    Nominal: 1,
    Name: 'Российский рубль',
    Value: 1,
  };

  const table = document.querySelector('.table');

  const leftSelect = document.getElementById('left-select');
  const rightSelect = document.getElementById('right-select');

  const needToExchange = document.getElementById('need-to-exchange');
  const exchangeResult = document.getElementById('exchange-result');

  const changeBtn = document.querySelector('.btn');

  const date = document.querySelector('.table-title');

  const data = await getData();

  data.Valute.RUR = ruble;
  date.textContent = `КУРСЫ ВАЛЮТ НА ${new Date(
    data.Date
  ).toLocaleDateString()}`;

  const mediaBreakPointTablets = window.matchMedia('(max-width: 1044px)');

  async function getData() {
    const getResponce = await fetch(
      `https://www.cbr-xml-daily.ru/daily_json.js`
    );
    const currencyData = await getResponce.json();

    return await currencyData;
  }

  function addExchangeItem(currencyObj) {
    const selectOptions = document.createElement('option');

    if (window.innerWidth > 380) {
      selectOptions.value = currencyObj.CharCode;
      selectOptions.innerHTML = String(
        `${currencyObj.Name} ${currencyObj.CharCode}`
      ).toUpperCase();
    } else {
      selectOptions.value = currencyObj.CharCode;
      selectOptions.innerHTML = currencyObj.CharCode;
    }

    return selectOptions;
  }

  function clearTable() {
    table.innerHTML = '';
  }

  function renderGorizontalTableHead() {
    const tabHead = document.createElement('thead');
    const tabHeadRow = document.createElement('tr');
    const tabHeadCode = document.createElement('th');
    const tabHeadUnit = document.createElement('th');
    const tabHeadCurency = document.createElement('th');
    const tabHeadCourse = document.createElement('th');
    const tabBody = document.createElement('tbody');

    tabHead.classList.add('head-row');
    tabHeadRow.classList.add('table-head');
    tabHeadCode.classList.add('th1');
    tabHeadUnit.classList.add('th2');
    tabHeadCurency.classList.add('th3');
    tabHeadCourse.classList.add('th4');
    tabBody.classList.add('table-body');

    tabHeadCode.innerHTML = 'Код';
    tabHeadUnit.innerHTML = 'Единица';
    tabHeadCurency.innerHTML = 'Валюта';
    tabHeadCourse.innerHTML = 'Курс базовой валюты';

    tabHeadRow.append(tabHeadCode);
    tabHeadRow.append(tabHeadUnit);
    tabHeadRow.append(tabHeadCurency);
    tabHeadRow.append(tabHeadCourse);

    tabHead.append(tabHeadRow);

    table.append(tabHead);
    table.append(tabBody);
  }

  function renderCurrencyTableItem(currencyObj) {
    const divRow = document.createElement('div');
    const row = document.createElement('tr');
    const rowCode = document.createElement('tr');
    const rowUnit = document.createElement('tr');
    const rowCurrency = document.createElement('tr');
    const rowCourse = document.createElement('tr');
    const theadCode = document.createElement('th');
    const theadUnit = document.createElement('th');
    const theadCurrency = document.createElement('th');
    const theadCourse = document.createElement('th');
    const currencyCode = document.createElement('td');
    const currencyUnit = document.createElement('td');
    const currency = document.createElement('td');
    const baseCurrencyCourse = document.createElement('td');

    if (window.innerWidth > 1044) {
      row.classList.add('borders');
      currencyCode.classList.add('currency-code', 'border-left-bottom');
      currencyUnit.classList.add('unit', 'border-bottom');
      currency.classList.add('currency-name', 'border-bottom');
      baseCurrencyCourse.classList.add('base-course', 'border-bottom-right');

      currencyCode.innerHTML = `<div class="flag-container"><img src='img/flags/${currencyObj.CharCode}.svg'> ${currencyObj.CharCode}</div>`;
      currencyUnit.innerHTML = currencyObj.Nominal;
      currency.innerHTML = currencyObj.Name;
      baseCurrencyCourse.innerHTML = currencyObj.Value;

      row.append(currencyCode);
      row.append(currencyUnit);
      row.append(currency);
      row.append(baseCurrencyCourse);

      return row;
    } else {
      theadCode.innerHTML = 'Код';
      theadUnit.innerHTML = 'Единица';
      theadCurrency.innerHTML = 'Валюта';
      theadCourse.innerHTML = 'Курс базовой валюты';

      currencyCode.innerHTML = `<div class="flag-container"><img src='img/flags/${currencyObj.CharCode}.svg'> ${currencyObj.CharCode}</div>`;
      currencyUnit.innerHTML = currencyObj.Nominal;
      currency.innerHTML = currencyObj.Name;
      baseCurrencyCourse.innerHTML = currencyObj.Value;

      rowCode.append(theadCode);
      rowCode.append(currencyCode);
      rowUnit.append(theadUnit);
      rowUnit.append(currencyUnit);
      rowCurrency.append(theadCurrency);
      rowCurrency.append(currency);
      rowCourse.append(theadCourse);
      rowCourse.append(baseCurrencyCourse);
      divRow.append(rowCode);
      divRow.append(rowUnit);
      divRow.append(rowCurrency);
      divRow.append(rowCourse);

      return divRow;
    }
  }

  function fillTable(table) {
    Object.values(data.Valute).forEach((currency) => {
      const currencyTableElement = renderCurrencyTableItem(currency);
      const leftSelectElement = addExchangeItem(currency);
      const rightSelectElement = addExchangeItem(currency);

      table.append(currencyTableElement);

      leftSelect.append(leftSelectElement);
      rightSelect.append(rightSelectElement);
    });
  }

  function renderTableFromData() {
    if (window.innerWidth > 1044) {
      clearTable();
      renderGorizontalTableHead();
      fillTable(document.querySelector('.table-body'));
    }
    if (window.innerWidth <= 1044) {
      clearTable();
      fillTable(table);
    }
  }
  renderTableFromData();

  mediaBreakPointTablets.addEventListener('change', (event) => {
    renderTableFromData();
  });

  function exchange(arrObj) {
    const leftSelectObj = arrObj[leftSelect.value];
    const rightSelectObj = arrObj[rightSelect.value];
    let result;

    if (needToExchange.value <= 0) {
      exchangeResult.value = null;
      return;
    }
    if (leftSelect.value === rightSelect.value && needToExchange.value > 0) {
      result = needToExchange.value;
    }
    if (leftSelect.value !== 'RUR' && rightSelect.value === 'RUR') {
      result =
        (needToExchange.value / leftSelectObj.Nominal) * leftSelectObj.Value;
    }
    if (leftSelect.value === 'RUR' && rightSelect.value !== 'RUR') {
      result =
        (needToExchange.value * rightSelectObj.Nominal) / rightSelectObj.Value;
    }
    if (
      leftSelect.value !== rightSelect.value &&
      leftSelect.value !== 'RUR' &&
      rightSelect.value !== 'RUR'
    ) {
      result =
        (needToExchange.value * leftSelectObj.Nominal * leftSelectObj.Value) /
        (rightSelectObj.Nominal * rightSelectObj.Value);
    }
    exchangeResult.value = Number(result).toFixed(4);
  }

  rightSelect.addEventListener('change', () => {
    exchange(data.Valute);
  });

  leftSelect.addEventListener('change', () => {
    exchange(data.Valute);
  });

  needToExchange.addEventListener('input', () => {
    if (needToExchange.value <= 0) {
      exchangeResult.value = null;
    }
    exchange(data.Valute);
  });

  changeBtn.addEventListener('click', () => {
    const rightSelectChange = rightSelect.value;
    const leftSelectChange = leftSelect.value;

    const excResultChange = exchangeResult.value;
    const needToExcChange = needToExchange.value;

    leftSelect.value = rightSelectChange;
    rightSelect.value = leftSelectChange;

    if (needToExchange.value <= 0) {
      exchangeResult.value = null;
      needToExchange.value = 0;
    } else {
      exchangeResult.value = needToExcChange;
      needToExchange.value = excResultChange;
    }

    exchange(data.Valute);
  });
})();
