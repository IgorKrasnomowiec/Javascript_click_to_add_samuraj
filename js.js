const btn = document.querySelector(`button`);

let count = 0;
btn.addEventListener(`click`, () => {
  const div = document.createElement(`div`);
  document.body.appendChild(div);
  count += 1;
  div.textContent = `${count}`;
  console.log(div);
});
