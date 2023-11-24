name: string;
private role: string;
/*private キーワードは、このプロパティがクラス内でのみアクセス可能で、
外部からのアクセスが制限されていることを示しています。*/

class Person {
    name: string;
    constructor(readonly name: string, protected age: number) {
    }
  }
  const p = new Person('Mike', 20)
/*Person クラスのコンストラクター（constructor）が定義されています。コンストラクターはオブジェクトが作成される際に実行されるメソッドです。
このコンストラクターはnameとageの2つのパラメーターを受け取ります。*/ 
/*readonly キーワードは、このプロパティが一度設定されたら変更不可であることを示しています。
つまり、name はクラス内でのみ読み取り可能です。*/   