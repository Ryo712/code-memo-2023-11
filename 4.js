import Link from "next/link";
//Link コンポーネントは、Next.js のルーティングを管理し、異なるページ間を移動するためのリンクを提供します。
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center
         bg-slate-800 px-8 py-3">
           <Link className="text-white font-bold" href={"/"}>
            GTCoding.
            </Link> 
           <Link className="bg-white p-2"href={"/addTopic"}>
            Add Topic
            </Link>
        </nav>
    );
}
//GTCoding. というロゴのテキストです。クリックするとウェブサイトのホームページに移動します。
//Add Topic" というテキストで、クリックすると "addTopic" ページに移動します。