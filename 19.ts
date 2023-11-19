const person = {
    name: 'Mike',
    age: 20
  };
/*Typescriptは基本的には型推論を利用することが推奨されます。  
変数 person に型注釈をつけずにオブジェクトを代入しています。
TypeScript は右辺のオブジェクトの構造から型を推論し、person の型は { name: string, age: number } となります。これを型推論と呼びます。*/