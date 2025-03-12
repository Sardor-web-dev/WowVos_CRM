import { Cordinators } from "@/utils/kordinators";
import { Statuses } from "@/utils/statuses";
import { cn } from "@/lib/utils";

type props = {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}


const SideBar: React.FC<props> = ({opened, setOpened}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col bg-[#1F1E1E] h-screen overflow-auto transition-all",
          opened ? "w-[342px]" : "w-16"
        )}
      >
        <div>
          <div className="flex items-center justify-between p-3">
            {opened && <img src="/logo-dark.png" alt="" />}
            <button onClick={() => setOpened(!opened)}>
              <img className="cursor-pointer w-7 h-7" src="/menu.png" alt="" />
            </button>
          </div>
        </div>

        {opened && (
          <div className="flex gap-2 p-10 border-b border-gray-500">
            <div className="flex gap-5 text-white">
              <img className="w-6 h-6" src="/home.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 text-white">
              <a className="mb-5 text-xl font-medium cursor-pointer">Меню</a>
              <a className="cursor-pointer">Пациенты</a>
              <a className="cursor-pointer">Клиники</a>
              <a className="cursor-pointer">Источники / Агенства</a>
              <a className="cursor-pointer">Координаторы</a>
            </div>
          </div>
        )}

        {opened && (
          <div className="flex flex-col gap-6 p-10 border-b border-gray-500 ">
            <div className="flex text-white gap-3 items-center">
              <img className="w-6 h-6" src="/filter.png" alt="" />
              <p className="text-xl font-medium">Фильтр</p>
            </div>
            <div className="text-white flex flex-col gap-1">
              <p>Статус</p>

              {Statuses.map((status) => (
                <label key={status.id} className="flex items-center gap-5">
                  <input className="w-4 h-4 cursor-pointer" type="checkbox" />
                  <span>{status.title}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {opened && (
          <div className="flex flex-col gap-5 text-white p-10">
            <p className="text-xl  font-medium">Координаторы</p>
            <div className="flex flex-col gap-2">
              {Cordinators.map((kordinator) => (
                <label key={kordinator.id} className="flex items-center gap-4">
                  <input type="checkbox" />
                  <span>{kordinator.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
