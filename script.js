


for (i = 1; i <= 100; i++) {
   if (i % 15 == 0) {
      console.log("FizzBus");
   } else if (i % 3 == 0) {
      console.log("Fizz");
   } else if (i % 5 == 0){
      console.log("Buss")
   } else {
      console.log(i);
   }
}



var show = document.getElementById("show");
show.addEventListener("click", function() {

   document.getElementById("numbers").innerHTML = "";
   var min = document.getElementById("min").value;
   var max = document.getElementById("max").value;
   var div1 = document.getElementById("div1").value;
   var div2 = document.getElementById("div2").value;

   document.getElementById("both").innerHTML = div1 + " and " + div2;
   document.getElementById("first").innerHTML = div1;
   document.getElementById("second").innerHTML = div2;

   for (i = min; i <= max; i++) {
      var itemData = document.createTextNode(i);
      var listItem = document.createElement('li');
      listItem.appendChild(itemData);
      if (i % (div1 * div2) == 0) {
         listItem.setAttribute("class", "blue");

      } else if (i % div1 == 0) {
         listItem.setAttribute("class", "green");
         console.log("Fizz");
      } else if (i % div2 == 0){
         listItem.setAttribute("class", "yellow");
         console.log("Buss")
      }

      document.getElementById("numbers").appendChild(listItem);
   }


})
