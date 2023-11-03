
export default function EditTopicForm() {
    return (
    <form className="flex flex-col gap-3">
    <input 
      className="border border-slate-500 px-8 py-2" 
      type="text"
      placeholder="Topic Title"
     />

     <input 
      className="border border-slate-500 px-8 py-2" 
      type="text"
      placeholder="Topic Description"
     />
     
    <button className="bg-green-600 font-bold
    text-white py-3 px-6 w-fit">
    Update Topic
    </button>
</form>
    );
}
/** className: スタイルを適用するためのCSSクラス名。
type: ユーザーが入力するデータのタイプ（テキスト）。
placeholder: 入力フィールド内に表示されるプレースホルダーテキスト。ユーザーに何を入力すべきかを示します。**/

//<form> 要素: トピック情報を編集するフォームを囲む外側の要素です。フォームの送信イベントをハンドリングできます。