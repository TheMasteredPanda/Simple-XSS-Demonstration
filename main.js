document.getElementsByName("inputForm")[0].addEventListener("submit", (e) => {
  let element = document.getElementsByName("inputText")[0];
  e.preventDefault();
  let output = document.getElementsByClassName("output")[0];
  output.innerHTML = element.value;
});

//<button type="button">Test Button</button> - Payload