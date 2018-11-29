<script>
var data="Hello World and Coders";
function FirstReverse(str) {
   var newString = "";
   for (var i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
}
alert(FirstReverse(data));
</script>