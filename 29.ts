interface Nameable {
    name: string;
  }
/*この部分は、Nameable インターフェースを定義しています。
このインターフェースは単一のプロパティ name を持つことを要求します。 */ 
  interface Human extends Nameable {
    name: string; //ここで再び name プロパティが定義されていますが、型が一致しなくても問題ない any型当も許容される。
    age: number;
    greeting(message: string): void;
  }
  
  // &の場合（上記の継承と同義）
  type Human = {
    name: string; // number型当も許容される
    age: number;
    greeting(message: string): void;
  } & Nameable
/*交差型（Intersection Type）を使用して Human 型を定義しています。
交差型は、複数の型を結合して新しい型を作成する仕組みです.Nameable インターフェースと{name:string ~を結合。  */  
/*結果として、Human 型は Nameable インターフェースの name プロパティを含みつつ、
新たに定義された age プロパティと greeting メソッドも含んでいます。 */