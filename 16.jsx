//★JSX基本構文★
const element = <h1>Hello, World!</h1>;
//<h1>タグがReact要素

//JSの埋め込み
const name = "John";
const element = <p>Hello, {name}!</p>;
//変数nameが埋め込まれている

//Reactコンポーネント
function Greeting() {
    return <h1>Hello, World!</h1>;
  }
//関数 Greeting はReact要素を返します。  

//属性の指定
const title = "Welcome to My App";
const element = <h1 className="main-title">{title}</h1>;
//JSXでは、HTMLのように要素に属性を指定できます。この例では、className属性が指定されています。

//条件付きレンダリング
function ConditionalGreeting({ isLoggedIn }) {
    return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
  }
//JSX内では、条件演算子や論理演算子を使用して条件による要素の表示/非表示を行うことができます。
  


