import { Link } from "react-router-dom";

export default function DialogBox() {
  return (
    <div className="bg-gray-medium border-4 border-red-orange-dark border-solid rounded-lg w-5/6 h-2/6 fixed left-1/2 -translate-x-1/2 bottom-14">
      <div className="bg-orange-light border-4 border-red-orange-dark border-solid rounded-lg absolute inset-5 flex flex-col justify-center items-center">
        <p className="p-14 font-huninn text-gray-dark text-3xl leading-10 overflow-auto">
          我是 TT 資訊，開發組的 PO。
          <br /> PO 就是產品負責人（Product
          Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。
          <br />
          最後排出產品待辦清單（Product Backlog）唷！
          <br />
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
          既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
          <br />
          <Link
            to="/task"
            className="font-chikara text-6xl block text-center mt-4"
          >
            Go
          </Link>
        </p>
      </div>
    </div>
  );
}
