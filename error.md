■解決したい事
chatSpaceの自動更新機能の動作確認の時にコンソールに
jquery.self-bd7ddd393353a8d2480a622e80342adf488fb6006d667e8b42e4c0073393abee.js?body=1:10255 GET http://localhost:3000/groups/8/api/messages?id=120 404 (Not Found)
とエラーが表示される
[![Image from Gyazo](https://i.gyazo.com/1109ce6902f6dace6b1e33e9aa772b4f.png)](https://gyazo.com/1109ce6902f6dace6b1e33e9aa772b4f)

■自力で調べた内容
404エラーについて、応用カリキュラムを確認した
https://master.tech-camp.in/curriculums/4349

■仮説と検証作業の結果
404エラーなので.autoRelorado.jsの中reloadMessagesの.ajaxがおかしいと判断。カリキュラムと見比べても違いがなかった