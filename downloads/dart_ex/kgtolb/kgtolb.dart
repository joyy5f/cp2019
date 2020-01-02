import "dart:html";


kgtolb(num a) {
  return (a*0.454);
}


lbtokg(num a) {
  return (a/0.454);
}

// 宣告 len 整數變數, 準備設為各字串的長度
int len;
// 宣告 var 變數 type, 準備設為各字串最後一個字元, 可能為 kg 或 lb
var type;
// 宣告 var 變數 number, 準備設為各字串中的數字
var number;
// 透過HTML,取得使用者輸入的值
InputElement tempInput = querySelector("#b");
// 將轉換結果顯示在output
LabelElement output = querySelector("#output");
void main() {
  //按下按鈕後推送數值
  querySelector("#submit").onClick.listen((e) => calcRabbits(tempInput.value));
}

calcRabbits(String string) {
  len = string.length;
  // 取得各筆資料的最後第2個字元
  type = string[len - 2];
  // 根據溫度類別轉給對應函式進行單位轉換
  number = string.substring(0, len - 2);
  // 由於取得的 number 為字串, 必須設法轉為數字
  number = int.parse(number);
  // 之後就可以根據 type 與 number 執行各數列元素的單位轉換
  if (type == "k") {
    output.innerHtml = "$number kg=${kgtolb(number).toStringAsFixed(3)} lb";
  } else if (type == "l") {
    output.innerHtml = "$number lb=${lbtokg(number).toStringAsFixed(3)} kg";
  } else {
    output.innerHtml = "記得單位";
  }
}

