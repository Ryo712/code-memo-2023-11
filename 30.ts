interface Nameable {
    name?: string;
    nickName?: string;
    say(message?: string) { // 引数にも適用できる
      if(message) {
        console.log(message);
      }
    }
  }
//Nameableインターフェースは、name と nickName という2つのオプショナルな（存在しなくても良い）プロパティを持ちます。  
  const nameable: Nameable = {
  // name,nickNameがなくても宣言できる
    name: 'Quill',
    nickName: 'Quilla'
  }
//メソッド解説：sayメソッドでは、引数 message がオプショナルであり、指定されている場合はそのメッセージをコンソールに出力します。  