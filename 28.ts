interface Human extends Nameable {
    readonly name: string; 
    age: number;
    greeting(message: string): void;
  }
//Human インターフェースが Nameable インターフェースを拡張しています。これは、Human インターフェースが Nameable インターフェースのプロパティやメソッドを引き継ぐことを意味します。
  class Developer implements Human {
  // implements先でnameがpublicに上書きできてしまっている
    constructor(public age: number, public experience: number, public name: string) {
    }
//age: number;：Human インターフェースでは、age プロパティを数値型として定義しています。
    greeting(message: string) {
      console.log(message);
    }
  }
//void;：Human インターフェースでは、greeting メソッドを定義しています。このメソッドは引数として文字列を受け取り、戻り値がないことを示すために void が使われています。
//Developer クラスは greeting メソッドを実装しています。このメソッドは引数として文字列を受け取り、その文字列をコンソールに出力します。