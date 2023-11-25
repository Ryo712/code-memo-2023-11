interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
  }
  
  class Developer implements Human { // 複数継承する場合は「,インターフェース名」の形で記述する
    constructor(public age: number, public experience: number, public name: string) {
    }
    greeting(message: string) {
      console.log(message);
    }
  }

  /**Human インターフェースは、Nameable インターフェースを継承しています。
   * これは、Human インターフェースが Nameable インターフェースのプロパティやメソッドを含んでいることを意味します。 */
  /**Developer という名前のクラスが定義されています。 * implements キーワードを使用して、
   * Developer クラスが Human インターフェースの要件を満たしていることを示しています。 */
  //コンストラクター:Deceloperクラス。プロパティには public キーワードがついているため、これらのプロパティはクラス外部からも直接アクセス可能です。*/