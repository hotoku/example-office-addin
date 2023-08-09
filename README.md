# めも

- custom functionの中からAPIを呼ぶ場合、same origin policyに従う必要がある
- same origin policyはシンプルなリクエスとであれば問題ない(詳細は徳丸本)
- シンプルじゃない場合(POSTでjson送るとかは、もうシンプルじゃないので注意)は、サーバー側で適切な対応が必要
  - プリフライトリクエストなど
