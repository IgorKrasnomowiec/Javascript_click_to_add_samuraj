const btn = document.querySelector(`button`);

let count = 1;
btn.addEventListener(`click`, () => {
  const div = document.createElement(`div`);
  if (count % 5 == 0) {
    console.log(`5 element`);
    div.classList.add(`circle`);
  }

  document.body.appendChild(div);
  div.textContent = `${count}`;
  count += 1;
});

//program dodaje klase "circle" co 5 elementowi
