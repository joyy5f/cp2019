var tipuesearch = {"pages": [{'title': 'About', 'text': "自\xa0我\xa0 評\xa0 分\xa0 \n This is 40823124's Website \n", 'tags': '', 'url': 'About.html'}, {'title': 'Webside', 'text': 'MY\xa0 Webside \n \n \n', 'tags': '', 'url': 'Webside.html'}, {'title': 'Code', 'text': '課\xa0 程\xa0 進\xa0 度\xa0 。 \n week4 .\xa0 :網站架設  week5 .\xa0 :git連結  week6 . \xa0:for迴圈、亂數分組 week7 .\xa0 :dart常微分方程式 week8 .\xa0 :Blog架設 week9 .\xa0 :期中考 week10 .\xa0 :分組 week11 .\xa0 :華氏攝氏轉換 \n', 'tags': '', 'url': 'Code.html'}, {'title': 'for迴圈', 'text': "for迴圈github \xa0 \n for迴圈dartpad \xa0 \n \n void main() {\n  for (int i = 0; i < 5; i++) {\n    print('hello ${i + 1}');\n  }\n}\n \n", 'tags': '', 'url': 'for迴圈.html'}, {'title': '亂數分組', 'text': '亂數分組github \xa0 \n 亂數分組dartpad \xa0 \n \n import \'dart:html\';\n\nvoid main() {\n  // 每一組 10 人\n  int num = 10;\n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  // 每組學員暫存數列\n  var gp_list = [];\n  // 全班分組數列\n  var cp2019 = [];\n\n  HttpRequest.getString(\n          \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\')\n      .then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var stud_list = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    stud_list.shuffle();\n    // 逐一讀取已經弄亂的學生學號數列, 利用模數運算每幾人分成一組\n    for (i = 0; i < stud_list.length; i++) {\n      // 0, 1~(num-1), num\n      if (i % num == 0) {\n        gp_list = [];\n        // 列印區隔符號\n        print(\'=\' * 20);\n        print("group $gth :");\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n        gth = gth + 1;\n      } else {\n        print(stud_list[i]);\n        // 在各分組數列中加入將對應的學員學號\n        gp_list.add(stud_list[i]);\n      }\n      if (i % num == 0) {\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n        cp2019.add(gp_list);\n      }\n    }\n    // 列出全班分組數列\n    print(cp2019);\n  });\n}\n \n', 'tags': '', 'url': '亂數分組.html'}, {'title': '常微分曲線圖', 'text': '阻尼係數為1 \n \n 阻尼係數為2 \n \n', 'tags': '', 'url': '常微分曲線圖.html'}, {'title': 'temperature', 'text': "temperature \n USAflag \n 放大   回復 \n \n int x = 0;\nnum F = 86;\nnum C = 30;\n\nvoid main(){\n  if (x == 0) {\n  num F2 = C*9/5+32;\n\t\t\tprint('F=$F2');\n  }\n  else{\n    if (x==1){\n    num C2 = (F-32)*5/9;\n\t\t\tprint('C=$C2');\n  }\n\n  }\n    print('x=0,1切換(華氏、攝氏)');\n} \n \n", 'tags': '', 'url': 'temperature.html'}, {'title': 'temperature2', 'text': 'temperature converter2 dartpad \xa0 \n temperature converter2 github \xa0 \n \n', 'tags': '', 'url': 'temperature2.html'}, {'title': 'W16 查驗考試', 'text': '', 'tags': '', 'url': 'W16 查驗考試.html'}, {'title': 'For迴圈', 'text': '\n 404 \n', 'tags': '', 'url': 'For迴圈.html'}, {'title': 'rangekutta', 'text': '\n', 'tags': '', 'url': 'rangekutta.html'}, {'title': '溫度轉換', 'text': '溫度轉換1 \n \n 溫度轉換2 \n \n', 'tags': '', 'url': '溫度轉換.html'}, {'title': '國旗', 'text': 'USAflag \n 放大 \n 回復 \n \n \n W16 查驗考試 <<  Previous   \n', 'tags': '', 'url': '國旗.html'}, {'title': 'w17考試', 'text': '\n 請輸入所要轉換的重量 以數字加上 kg 或 lb:     轉換結果: \n \n   Clear Canvas   Draw FR   Draw ROC   Draw JP   Draw RU   Draw NE   Draw GE   Draw UK \n \n \n 純 Dart 程式 \n 重量轉換 \n Html 程式 \n 重量轉換 \n 各國國旗 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n . \n \n W16 查驗考試 <<  Previous \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'w17考試.html'}]};