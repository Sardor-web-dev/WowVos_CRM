import React from "react"
import Card from "./Card"

const columns = [
  { title: "Новое обращение", count: 3 },
  { title: "Запрос отправлен", count: 1 },
  { title: "В процессе", count: 3 },
  { title: "Забронировал", count: 2 },
  { title: "Выкупил билеты", count: 1 },
  { title: "Прилетел", count: 1 }
]

const CardData = {
  name: "Борисова Ольга",
  age: 36,
  city: "Ташкент, Хан Анна",
  diagnosis: "Птоз",
  diagnosisDate: "10.01",
  departureDate: "30.01",
}

const Board: React.FC = () => {
  return (
    <div className=" flex gap-4 overflow-x-auto p-4">
      {columns.map((column, index) => (
        <div key={index} className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-64 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">{column.title}</h2>
            <span className="bg-[#22B5DC] text-white px-2 rounded-full cursor-pointer">{column.count}</span>
          </div>

          <div className="flex flex-col gap-4">
            {Array.from({ length: column.count }).map((_, i) => (
              <Card key={i} {...CardData} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Board
