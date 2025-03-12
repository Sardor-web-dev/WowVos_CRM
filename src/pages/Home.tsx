import Navbar from "@/components/custom/navbar";
import SideBar from "../components/custom/sideBar";
import { useState } from "react";
import Board from "@/components/custom/Board";
import HeaderSection from "@/components/custom/HeaderSection";



const Home = () => {

  const [opened, setOpened] = useState(true);
    return (
        <>
        <div className="flex h-screen">
        <SideBar  opened={opened} setOpened={setOpened}/>

        <div className="flex flex-col flex-1">

        <Navbar opened={opened} />

        <HeaderSection 
          title="Пациенты"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Level 2"},
            { label: "Level 3" },
            { label: "Пациенты", href: "/"}
          ]}
        />

        <Board/>
      </div>
        </div>
        </>
    );
}
 
export default Home;