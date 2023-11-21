let unionType: string | number = 1;
unionType = 'hello'
let unionTypeArray: (string | number)[] = ['hello', 1]
//Union:「|」を利用して複数の型を許容する変数を作成することができる。

const human: 'Mike' = 'Mike'
const direction2: 'east' | 'west' | 'north' | 'south' = 'east'
//リテラル型指定した型の値しか代入できない記法。
//humanにはMike,direction2がeast west north southでないと型エラーになる

type direction = 'east' | 'west' | 'north' | 'south'
let direction3: direction = 'north'
/*direction3 が direction 型であることが宣言されている。
そして変数には'north'という具体的な文字列が代入されている。型directionに合致しているためコンパイルエラーは発生しない*/