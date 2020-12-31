document.getElementsByName("inputForm")[0].addEventListener("submit", (e) => {
  let element = document.getElementsByName("inputText")[0];
  e.preventDefault();
  //By not escaping the special characters that make up the xms tags the js code within
  //The tags will be embedded into the web page, executing the code. - Duke J. Morgan
  let output = document.getElementsByClassName("output")[0];
  output.innerHTML = element.value;
});

//<button type="button">Test Button</button> - Payload