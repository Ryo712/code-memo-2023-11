//URI設定メモ
/**URI内には、ユーザー名、パスワード、データベース名、クラスター名などが正しく設定されている必要があります。
 * URIに特殊文字が含まれている場合、URI全体を適切にエンコードしてください。
 * MongoDBのクラスターがIPホワイトリストを使用してアクセスを制御している場合、
 * 正しいIPアドレスがホワイトリストに含まれていることを確認してください。
 * パスワード内に特殊文字が含まれている場合、URI内で正しくエスケープすることが重要です。
 * URI内の特殊文字は正しいエンコードが必要です。例えば、! は %21 としてエンコードされます。
 * セキュリティ的にURIベタ貼りは危険なので環境変数を使う。.envファイルを使用する。
 */

//例
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ryo:<hilc0712%21>@cluster0.eiti27d.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;