let sayiGirdisi = document.getElementById("sayiGirdisi");
let hesapla = document.getElementById("hesapla");
let sonuc = document.getElementById("sonuc");
let reset = document.getElementById("reset");

function oddishOrEvenish(sayiGirdisi) {
  let strNum = sayiGirdisi.value.toString();
  let arr = strNum.split("");
  let intArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    intArr.push(parseInt(arr[i]));
  }
  for (let i = 0; i < intArr.length; i++) {
    sum += intArr[i];
  }
  if (sum % 2 == 0) {
    sonuc.textContent = "Even";
  } else {
    sonuc.textContent = "Odd";
  }
}

hesapla.addEventListener("click", function () {
  oddishOrEvenish(sayiGirdisi);
});

reset.addEventListener("click", function () {
  sonuc.textContent = " ";
  sayiGirdisi.value = " ";
});
