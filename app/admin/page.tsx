"use client";

import React, { useState } from "react";

// Описание типа Item
interface Item {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  weight: number;
  price: number;
}

export default function AdminPage() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "Чикенбургер",
      description:
        "Наш фирменный куриный бургер с нежной курочкой в хрустящей панировке.",
      imageSrc: "/bb.png",
      weight: 200,
      price: 330,
    },
    {
      id: 2,
      title: "Чизбургер",
      description: "Бифштекс из 100% говядины с ломтиком сыра.",
      imageSrc: "/bb2.png",
      weight: 250,
      price: 350,
    },
  ]);

  // Тип editItem может быть либо объектом Item, либо null
  const [editItem, setEditItem] = useState<Item | null>(null);

  // Тип newItem всегда будет объектом Item
  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    title: "",
    description: "",
    imageSrc: "",
    weight: 0,
    price: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Item,
    target: "edit" | "new"
  ) => {
    if (target === "edit" && editItem) {
      setEditItem((prevItem) => ({
        ...prevItem!,
        [key]: e.target.value,
      }));
    } else if (target === "new") {
      setNewItem((prevItem) => ({
        ...prevItem,
        [key]: e.target.value,
      }));
    }
  };

  const handleSave = () => {
    if (editItem) {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === editItem.id ? editItem : item))
      );
      setEditItem(null);
    }
  };

  const handleAddNewItem = () => {
    setItems([...items, { ...newItem, id: Date.now() }]);
    setNewItem({
      id: 0,
      title: "",
      description: "",
      imageSrc: "",
      weight: 0,
      price: 0,
    });
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Админ Панель</h1>

      {/* Список существующих товаров */}
      <div>
        {items.map((item) => (
          <div key={item.id} className="border-b border-gray-300 mb-4 pb-4">
            <div className="flex items-center">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-20 h-20 mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
                <p>Вес: {item.weight} г</p>
                <p>Цена: {item.price}₽</p>
              </div>
              <button
                onClick={() => setEditItem(item)}
                className="ml-auto bg-blue-500 text-white px-4 py-2 rounded"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Форма для редактирования */}
      {editItem && (
        <div className="p-4 border rounded bg-gray-100 mt-4">
          <h2 className="text-xl font-bold mb-2">
            Редактировать: {editItem.title}
          </h2>
          <label className="block mb-2">
            Название:
            <input
              type="text"
              value={editItem.title}
              onChange={(e) => handleInputChange(e, "title", "edit")}
              className="block border rounded px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Описание:
            <input
              type="text"
              value={editItem.description}
              onChange={(e) => handleInputChange(e, "description", "edit")}
              className="block border rounded px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Вес (г):
            <input
              type="number"
              value={editItem.weight}
              onChange={(e) => handleInputChange(e, "weight", "edit")}
              className="block border rounded px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Цена (₽):
            <input
              type="number"
              value={editItem.price}
              onChange={(e) => handleInputChange(e, "price", "edit")}
              className="block border rounded px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Ссылка на изображение:
            <input
              type="text"
              value={editItem.imageSrc}
              onChange={(e) => handleInputChange(e, "imageSrc", "edit")}
              className="block border rounded px-2 py-1 w-full"
            />
          </label>
          <button
            onClick={handleSave}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Сохранить
          </button>
        </div>
      )}

      {/* Форма для добавления нового товара */}
      <div className="p-4 border rounded bg-gray-100 mt-4">
        <h2 className="text-xl font-bold mb-2">Добавить новый товар</h2>
        <label className="block mb-2">
          Название:
          <input
            type="text"
            value={newItem.title}
            onChange={(e) => handleInputChange(e, "title", "new")}
            className="block border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Описание:
          <input
            type="text"
            value={newItem.description}
            onChange={(e) => handleInputChange(e, "description", "new")}
            className="block border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Вес (г):
          <input
            type="number"
            value={newItem.weight}
            onChange={(e) => handleInputChange(e, "weight", "new")}
            className="block border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Цена (₽):
          <input
            type="number"
            value={newItem.price}
            onChange={(e) => handleInputChange(e, "price", "new")}
            className="block border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Ссылка на изображение:
          <input
            type="text"
            value={newItem.imageSrc}
            onChange={(e) => handleInputChange(e, "imageSrc", "new")}
            className="block border rounded px-2 py-1 w-full"
          />
        </label>
        <button
          onClick={handleAddNewItem}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Добавить
        </button>
      </div>
    </div>
  );
}
