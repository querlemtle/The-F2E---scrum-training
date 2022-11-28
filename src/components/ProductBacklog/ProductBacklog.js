/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const tasksList = [
  {
    id: "1",
    text: "後台職缺管理功能",
    subtext: "（資訊上架、下架、顯示應徵者資料）",
  },
  {
    id: "2",
    text: "會員系統",
    subtext: "（登入、註冊、權限管理）",
  },
  {
    id: "3",
    text: "線上履歷編輯器",
    subtext: null,
  },
  {
    id: "4",
    text: "前台職缺列表",
    subtext: "（職缺詳細內容、發送應徵意願）",
  },
];

export default function ProductBacklog() {
  const [tasks, setTasks] = useState(tasksList);

  const handleDragEnd = (e) => {
    const { source, destination } = e;

    if (!destination) {
      return;
    }

    const newItems = [...tasks];
    const [remove] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, remove);
    setTasks(newItems);
  };

  return (
    <section className="text-xl font-huninn text-gray-dark grid gap-x-10 gap-y-1">
      <div className="col-span-1 row-start-1 flex flex-col gap-y-16">
        <div>
          <h2 className="opacity-60">Projects / TT / 人才招募系統</h2>
          <h3>產品待辦清單 (Product Backlog)</h3>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="start-1">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-col gap-y-7"
              >
                {tasksList.map(({ id, text, subtext }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        className="bg-blue text-white text-center w-60 py-5"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p className="text-xl">{text}</p>
                        {subtext && <span className="text-xs">{subtext}</span>}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {/* dropSlot */}
      <div className="col-start-2 col-end-3 row-span-full py-6 pl-12 pr-28 text-white bg-blue rounded-2.5xl flex flex-col gap-y-5">
        <h4>依優先度排序</h4>
        <div className="rounded-l border-3 border-dashed border-white text-6xl w-60 py-5 flex justify-center items-center">
          <span className="opacity-40">1</span>
        </div>
        <div className="rounded-l border-3 border-dashed border-white text-6xl w-60 py-5 flex justify-center items-center">
          <span className="opacity-40">2</span>
        </div>
        <div className="rounded-l border-3 border-dashed border-white text-6xl w-60 py-5 flex justify-center items-center">
          <span className="opacity-40">3</span>
        </div>
        <div className="rounded-l border-3 border-dashed border-white text-6xl w-60 py-5 flex justify-center items-center">
          <span className="opacity-40">4</span>
        </div>
      </div>
    </section>
  );
}
