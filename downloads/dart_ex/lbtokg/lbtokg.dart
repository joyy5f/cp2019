main() {
  List temp = [ "25kg", "30lb", "56lb", "14kg", "68lb", "198kg"];
  for (var i in temp) {
  
    if (i[2] == "k") {
    var a = (i[0]+i[1]);
     var k = int.parse (a);
    double lb =k/0.454;
    print ('lb=$lb');
    }
    else if (i[3] == "k") {
     var a = (i[0]+i[1]+i[2]);
     var k = int.parse (a);
    double lb =k/0.454;
    print ('lb=$lb');
    }
        
    else{
      var a = (i[0]+i[1]);
     var lb = int.parse (a);
    double k =lb*0.454;
    print ('kg=$k');
    } 
}
}
