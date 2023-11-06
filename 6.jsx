import Link from "next/link";
import RemoveBtn from "./RemoveBtn"; //RemoveBtn は、トピックを削除するためのボタンを表示するためのカスタムコンポーネントです。
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
/*この非同期関数は、APIを使用してトピックのデータを取得するためのものです。fetch を使用してサーバーからデータを取得し、
正常にデータを取得できない場合のエラー処理も行っています。*/
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] };
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
//getTopics 関数が非同期で呼び出され、取得したデータは topics という変数に格納されます。
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
/*トピックごとに一意の key が指定されており、トピックの表示に関連するスタイリングクラスも指定されています。*/
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
/**topics データをマップ処理し、各トピックを表す要素を生成します。各トピックはタイトル (t.title) と説明 (t.description) からなり、
 * それにトピックの編集や削除を行うためのボタンが含まれています。 */
/**このコンポーネントは非同期でトピックのデータを取得し、それをリストとして表示するもので、各トピックには編集と削除の操作を実行できるオプションが含まれる */