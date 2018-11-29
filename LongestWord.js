<script>
var inputdata="I am very happy today"
alert(LongestWord(inputdata));
function LongestWord(sen){
var splitedstring = sen.split(' ');
 var longestWord = splitedstring[0];
 for(var i = 0; i < splitedstring.length; i++){
   if(splitedstring[i].length > longestWord.length){
longestWord = splitedstring[i];
    }
 }
 return longestWord;
}
</script>