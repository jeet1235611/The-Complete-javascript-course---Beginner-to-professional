<!DOCTYPE html>
<html>
<body>

<p>Click the button to add and remove elements.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.splice(2, 1, "Lemon", "Kiwi");
    document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>
