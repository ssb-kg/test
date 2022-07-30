class Products {
    constructor(name, count){
      this.name = name;
      this.count= count;
    }
   }
   var arr = [];
   
   function fnc(){
     var n= document.getElementById('nam').value;
     var c = document.getElementById('cou').value;
     let Tovar = new Products(n, c);
   arr.push(Tovar);
   }
   function fnc1(){
     var res = "";
     for (var i = 0; i <arr.length; i++){
      res = res + arr[i].name + '<br>';
     }
     document.getElementById('result').innerHTML = res;
     
   }
   function fnc2(){
    var n2= document.getElementById('nam2').value;
    var index = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i].name == n2){
                index = i;
        }
    }
    arr.splice(index, 1);
   }