    <html>
     
    <head>
        <title></title>
    </head>
     
    <body>
        <script>
           
            var arr = [3,4,5,77,33,22,4,1,55,2,"cat","dog"];
            arr.sort();
            console.log(arr);
            var q = prompt("what do you want to remove");
            var finder = arr.indexOf(q);
            
            var v = (finder > -1) ? arr.splice(finder,1) : false;
            console.log(v);
            
            console.log(arr);
     
        </script>
    </body>
     
    </html>
