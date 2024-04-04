import { useState } from "react";
import menu from "shared/assets/menu.svg";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-end">
      <button
        className="size-[48px] transition-colors bg-[rgba(255,255,255,1)] active:bg-[rgba(246,251,255,1)] ring-2 ring-[rgba(231,234,241,0.2)] ring-offset-2 ring-offset-[rgba(231,234,241,0.2)] rounded-full flex justify-center items-center"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <img className="size-1/2" src={menu} />
      </button>
      {showMenu && (
        <>
          <div className="z-[200] flex flex-col h-[120px] w-[150px] gap-2 bg-white p-3 rounded-md ring-2 ring-[rgba(231,234,241,0.2)] ring-offset-2 ring-offset-[rgba(231,234,241,0.2)]">
            <a href="/cart">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-full text-left"
              >
                Корзина
              </button>
            </a>
            <a href="/">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-full text-left"
              >
                Товары
              </button>
            </a>
          </div>
          <div
            className="fixed top-0 left-0 w-screen h-screen"
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </>
      )}
    </div>
  );
};
