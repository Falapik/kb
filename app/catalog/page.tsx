"use client";

import Image from "next/image";
import React, { useState, ReactNode } from "react";
import Accordion from "@/components/Accordion";

export default function Catalog() {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [activeTab, setActiveTab] = useState<string>("Бургеры");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalData, setModalData] = useState<{
    title?: string;
    description?: string;
    imageSrc?: string;
    weight?: string;
    price?: string;
  }>({});
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption1(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption2(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption3(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleOpenModal = (data: {
    title: string;
    description: string;
    imageSrc: string;
    weight: string;
    price: string;
  }) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const accordionItems = [
    {
      title: "Заморозка",
      content: ["Бургеры", "Пицца", "Мороженное"],
    },
    {
      title: "Суши роллы",
      content: ["Сеты", "Запеченое", "Сырые"],
    },
    {
      title: "Горячее",
      content: ["Супы", "Салаты", "Второе"],
    },
  ];

  const tabItems: Record<string, any[]> = {
    Бургеры: [
      {
        title: "Чикенбургер",
        description:
          "Наш фирменный куриный бургер с нежной курочкой в хрустящей панировке.",
        imageSrc: "/bb.png",
        weight: 200,
        price: 330,
      },
      {
        title: "Чизбургер",
        description: "Бифштекс из 100% говядины с ломтиком сыра.",
        imageSrc: "/bb2.png",
        weight: 250,
        price: 350,
      },
      {
        title: "Яйцебургер",
        description: "Нежная говяжья котлета с яйцом.",
        imageSrc: "/bb3.png",
        weight: 300,
        price: 420,
      },
      {
        title: 'Комбо "Чизбургер+фри+кетчуп"',
        description: "Чизбургер с картошкой фри и кетчупом.",
        imageSrc: "/bb4.png",
        weight: 400,
        price: 500,
      },
    ],
    Пицца: [
      {
        title: "Маргарита",
        description: "Классическая пицца с сыром и томатным соусом.",
        imageSrc: "/marg.png",
        weight: 400,
        price: 450,
      },
      {
        title: "Пепперони",
        description: "Острая пицца с колбасой пепперони.",
        imageSrc: "/pep.jpg",
        weight: 500,
        price: 550,
      },
      {
        title: "Белуччи",
        description: "Острая пицца с колбасой пепперони.",
        imageSrc: "/bel.jpg",
        weight: 500,
        price: 550,
      },
      {
        title: "Космос",
        description: "Острая пицца с колбасой пепперони.",
        imageSrc: "/kos.png",
        weight: 500,
        price: 550,
      },
    ],
  };

  // Применение фильтров
  const filteredItems =
    tabItems[activeTab]
      ?.filter((item) => item.title.toLowerCase().includes(searchQuery))
      .sort((a, b) => {
        if (option2 === "Дорогое") return b.price - a.price;
        if (option2 === "Недорогое") return a.price - b.price;
        if (option3 === "Тяжелое") return b.weight - a.weight;
        if (option3 === "Легкое") return a.weight - b.weight;
        return 0;
      }) || [];

  return (
    <div>
      <div className="ml-[50px] mt-[30px] flex justify-between">
        <div className="flex">
          <div className="text-[32px]">Меню</div>
          <div className="flex gap-[20px] ml-[30px]">
            <select
              id="dropdown1"
              value={option1}
              onChange={handleChange1}
              className="border-[#000] border-[1px] px-[10px] rounded-[10px]"
            >
              <option value="">По популярности</option>
              <option value="Популярное">Популярное</option>
              <option value="Непопулярное">Непопулярное</option>
            </select>
            <select
              id="dropdown2"
              value={option2}
              onChange={handleChange2}
              className="border-[#000] border-[1px] px-[10px] rounded-[10px]"
            >
              <option value="">По цене</option>
              <option value="Дорогое">Дорогое</option>
              <option value="Недорогое">Недорогое</option>
            </select>
            <select
              id="dropdown3"
              value={option3}
              onChange={handleChange3}
              className="border-[#000] border-[1px] px-[10px] rounded-[10px]"
            >
              <option value="">По граммовке</option>
              <option value="Легкое">Легкое</option>
              <option value="Тяжелое">Тяжелое</option>
            </select>
          </div>
        </div>
      </div>
      <p className="ml-[50px] mt-[5px] text-[24px]">
        Фильтрация: {`${option1} ${option2} ${option3}`}
      </p>
      <div className="flex">
        <div className="ml-[50px] mt-5 w-[200px]">
          <Accordion items={accordionItems} onTabClick={setActiveTab} />
        </div>
        <div className="ml-[50px] mt-5">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          />
          {activeTab ? (
            <div className="p-4 rounded-lg">
              {filteredItems && filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className="max-w-[313px] w-full h-[407px] bg-[#3b3b3b] rounded-[23px] flex flex-col items-center gap-3 pb-[30px] cursor-pointer"
                      onClick={() =>
                        handleOpenModal({
                          title: item.title,
                          description: item.description,
                          imageSrc: item.imageSrc,
                          weight: `${item.weight} г`,
                          price: `${item.price}₽`,
                        })
                      }
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={313}
                        height={269}
                        className="max-w-[313px] w-full h-[269px] rounded-tl-[23px] rounded-tr-[23px]"
                      />
                      <div className="ml-[20px]">
                        <div className="text-[#d6de66] text-xl font-bold ">
                          {item.price}₽
                        </div>
                        <div className="text-white text-base font-normal ">
                          {item.title}
                        </div>
                        <div className="max-w-[262px] w-full text-[#c6c6c6] text-sm font-normal">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>
                  В данный момент у нас нет этого продукта. Приносим своии
                  извинения:(
                </p>
              )}
            </div>
          ) : (
            <div className="text-gray-500">Выберите элемент из меню</div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-[600px] w-full flex">
            <Image
              src={modalData.imageSrc || ""}
              alt="Product"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold mb-2">{modalData.title}</h2>
              <p>{modalData.description}</p>
              <p>Вес: {modalData.weight}</p>
              <p>Цена: {modalData.price}</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 py-2 bg-[#d6de66] text-black rounded-md"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
