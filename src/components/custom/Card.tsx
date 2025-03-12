import React from "react"
import { HiOutlineClipboard } from "react-icons/hi2"
import { GiCommercialAirplane } from "react-icons/gi"

interface CardProps {
  name: string,
  age: number,
  city: string,
  diagnosis: string,
  diagnosisDate: string,
  departureDate: string
}

const Card: React.FC<CardProps> = ({ name, age, city, diagnosis, diagnosisDate, departureDate }) => {
  return (
    <div className="bg-[#F1F2F4] p-4 rounded-lg shadow-sm flex flex-col gap-2">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-[#909090] text-[12px]">{age} лет, {city}</p>

      <div className="pt-2 text-sm">
        <p className="flex items-center gap-1">
            <HiOutlineClipboard color="#0FC357" size={20}/> <span className="text-[#909090]">Диагноз</span> <span>{diagnosisDate}</span>
        </p>
        <p>Обратился с диагнозом “{diagnosis}”</p>
      </div>

      <div className="border-t pt-2 text-sm">
        <p className="flex items-center gap-1">
            <GiCommercialAirplane size={20} /> <span className="text-[#909090]">Вылет</span> <span>{departureDate}</span>
        </p>
        <p>Вылет пациента в клинику</p>
      </div>
    </div>
  )
}

export default Card
