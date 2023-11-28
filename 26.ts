class Developer implements Human { // 複数継承する場合は「,インターフェース名」の形で記述する
    constructor(public age: number, public experience: number, public name: string) {
    } //Developer クラスが Human インターフェースが要求するメソッドやプロパティを実装していることを意味します。  
    greeting(message: string) {
      console.log(message);
    }
  }
  
  // Human型で宣言
  const user: Human = new Developer(38, 3);
  /*Developer クラスは greeting というメソッドを実装しています。
  このメソッドは message という文字列を引数として受け取り、そのメッセージをコンソールに出力します。*/
  /**このコードの例では、Developer クラスが Human インターフェースを実装しているため、
   *user 変数は Human 型として扱え、Human インターフェースが定義するメソッドやプロパティにアクセスできます。 */
