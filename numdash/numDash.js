function convert() {
  var n = document.getElementById("inputNumber").value;
  console.log(n);
  var l = n.length;
  console.log(l);
  for (i = 0; i < l; i++) {
    if (Number(n[i]) % 2 == 0 && Number(n[i + 1]) % 2 == 0) {
      n = n.slice(0, i + 1) + "-" + n.slice(i + 1, l);
      console.log(n);
      console.log(i);
      i++;
      l++;
    }
  }
  document.getElementById("formattedNumber").innerHTML = n;
}
