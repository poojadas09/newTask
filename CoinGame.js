<script>
var sumvalue = prompt("Please enter your total value");
var coins = [1,3, 5];
var arrlenth=coins.length;
alert(minCoins(coins, arrlenth, sumvalue));
function minCoins(coins,len, sum){ 
if (sum == 0) return 0; 
var res = Number.MAX_SAFE_INTEGER; 
for (var i = 0; i < len; i++) 
{ 
   if (coins[i] <= sum) 
   { 
       var sub_res = minCoins(coins, len, sum - coins[i]); 
       if (sub_res !=Number.MAX_SAFE_INTEGER  &&  
           sub_res + 1 < res) 
           res = sub_res + 1; 
   } 
} 
return res; 
}
</script>