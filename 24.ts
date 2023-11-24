interface Nameable {
    name: string;
    nickName: string;
  }
  const nameable: Nameable = {
    name: 'Quill',
    nickName: 'Quilla'
  }
/*Nameable インターフェースは、name と nickName という2つのプロパティを持つことを要求しています。
このインターフェースに準拠するオブジェクトは、name と nickName のプロパティを持たなければなりません。 */
/**Nameable インターフェースに準拠するオブジェクト nameable を作成しています。このオブジェクトは、name プロパティには 'Quill'、nickName プロパティには 'Quilla' 
 * という具体的な値が設定されています。 */ 
/**インターフェースの使用は、特定の構造を持つオブジェクトが期待通りのメンバーを持っていることを保証したい場合に役立ちます。
 * 例えば、Nameable インターフェースを実装する異なるクラスやオブジェクトがある場合、それらは共通のプロパティ name と nickName を持つことが期待されます。 */

//メソッドの指定方法
interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
  }
/**インターフェース内のメソッドは省略して記述ができる。
 * インターフェースの場合関数名(引数) : 戻り値;の形で宣言できる。
 * 本来メソッドは関数名: (引数) => 戻り値;の形。 */  