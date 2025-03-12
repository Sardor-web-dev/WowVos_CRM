import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import { FiBarChart } from "react-icons/fi"
import { IoMenu } from "react-icons/io5"
import React from "react";

interface HeaderSectionProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[]
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="rotate-180">
                <FiBarChart size={24} className="cursor-pointer"/>
            </div>
            <IoMenu size={24} className="cursor-pointer" />
        </div>

        <Breadcrumb>
          <BreadcrumbList className="text-sm text-gray-500 flex items-center">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>

                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <Slash className="w-4 h-4 text-gray-400" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>        
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-500 text-sm">1-6 из 22</span>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button className="px-2 py-1 text-gray-400 cursor-pointer">Prev</button>
          <button className="px-3 py-1 bg-black text-white cursor-pointer">1</button>
          <button className="px-3 py-1 cursor-pointer">2</button>
          <button className="px-3 py-1 cursor-pointer">3</button>
          <button className="px-2 py-1 text-gray-400 cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
