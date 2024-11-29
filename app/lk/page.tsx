"use client";

import Image from "next/image";
import { useState } from "react";

export default function Lk() {
  // Состояния для каждого инпута
  const [nameInput, setNameInput] = useState({ value: "", isFocused: false });
  const [phoneInput, setPhoneInput] = useState({ value: "", isFocused: false });
  const [addressInput, setAddressInput] = useState({
    value: "",
    isFocused: false,
  });

  // Общий стиль для инпутов
  const inputStyle =
    "w-full h-full px-4 pt-5 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400";

  const labelStyle = (focused: boolean, value: string) =>
    `absolute left-4 top-2.5 text-gray-400 transition-all duration-200 ${
      focused || value
        ? "text-[20px] -top-3 bg-white px-[10px] ml-[10px]"
        : "text-base"
    }`;

  return (
    <div className="flex justify-between mt-[40px]">
      <div className="ml-[50px] max-w-[1100px] w-full">
        <div className="text-[32px] mb-[20px]">Личный кабинет</div>
        <div className="flex">
          <div>
            <Image
              src="/lk.svg"
              alt="Profile Picture"
              width={256}
              height={256}
              className="rounded-[200px] bg-[#ff00ff]"
            />
          </div>
          <div className="text-[28px] flex flex-col ml-[60px] gap-7">
            <div className="w-[100px]">Виктор Валеронович</div>
            <div>+7 928 222 33 33</div>
            <div>ул Пушника, д. Колотушкниа</div>
          </div>
        </div>
        <div className="text-[32px] mt-[30px]">Ваш недавний заказ</div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex gap-[60px]">
            <div className="">
              <Image
                src="/23.png"
                width={228}
                height={174}
                alt="Profile Picture"
              />
            </div>
            <div className="">
              <div className="font-medium text-[28px] mb-[20px]">Много еды</div>
              <div className="w-[359px] text-[16px] font-medium">
                Очень много еды описаниеОчень много еды описаниеОчень много еды
                описаниеОчень много еды описание
              </div>
            </div>
          </div>
          <div className="text-[24px] font-medium">560 руб</div>
        </div>
      </div>
      <div className="w-[426px] h-[685px] bg-white rounded-tl-[37px] rounded-bl-[37px] shadow-[0px_4px_100px_10px_rgba(0,0,0,0.25)] flex justify-center">
        <form>
          <h1 className="mt-[30px] text-[24px]">Изменение информации</h1>
          <div className="relative w-72 h-12 mt-[30px]">
            <label className="cursor-text">
              <span
                className={labelStyle(nameInput.isFocused, nameInput.value)}
              >
                Ваше имя
              </span>
              <input
                name="name"
                type="text"
                value={nameInput.value}
                onChange={(e) =>
                  setNameInput({ ...nameInput, value: e.target.value })
                }
                onFocus={() => setNameInput({ ...nameInput, isFocused: true })}
                onBlur={() => setNameInput({ ...nameInput, isFocused: false })}
                className={inputStyle}
              />
            </label>
          </div>
          <div className="relative w-72 h-12 mt-[30px]">
            <label className="cursor-text">
              <span
                className={labelStyle(phoneInput.isFocused, phoneInput.value)}
              >
                Ваш телефон
              </span>
              <input
                name="phone"
                type="text"
                value={phoneInput.value}
                onChange={(e) =>
                  setPhoneInput({ ...phoneInput, value: e.target.value })
                }
                onFocus={() =>
                  setPhoneInput({ ...phoneInput, isFocused: true })
                }
                onBlur={() =>
                  setPhoneInput({ ...phoneInput, isFocused: false })
                }
                className={inputStyle}
              />
            </label>
          </div>
          <div className="relative w-72 h-12 mt-[30px]">
            <label className="cursor-text">
              <span
                className={labelStyle(
                  addressInput.isFocused,
                  addressInput.value
                )}
              >
                Ваш адрес
              </span>
              <input
                name="address"
                type="text"
                value={addressInput.value}
                onChange={(e) =>
                  setAddressInput({ ...addressInput, value: e.target.value })
                }
                onFocus={() =>
                  setAddressInput({ ...addressInput, isFocused: true })
                }
                onBlur={() =>
                  setAddressInput({ ...addressInput, isFocused: false })
                }
                className={inputStyle}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#D6DE67] mr-[59px] h-[42px] w-full text-[#fff] rounded-[40px] mt-[100px]"
          >
            Сохранить
          </button>
          <button className="bg-[#FF3A3A] h-[42px] px-[30px] text-[#fff] rounded-[40px] mt-[30px] right-[0px">
            Выйти
          </button>
        </form>
      </div>
    </div>
  );
}
