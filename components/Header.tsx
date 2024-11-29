"use client";

import { useState, useEffect } from "react";
import { auth } from "../app/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import Image from "next/image";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsRegisterMode(false);
  };

  const handleAuthAction = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (isRegisterMode) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setIsModalOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        alert("Ошибка: " + error.message);
      } else {
        alert("Произошла неизвестная ошибка");
      }
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="w-full bg-[#D6DE67] h-[94px] flex items-center justify-around">
        <Image src="/logo.svg" alt="Logo" width={287} height={94} />
        <input
          type="text"
          placeholder="Найти"
          className="h-[42px] max-w-[720px] w-full bg-white rounded-[10px] text-[#000] text-sm px-4"
        />
        <h1 className="text-[32px] cursor-pointer">Меню</h1>
        <h1 className="text-[32px] cursor-pointer">Наши точки</h1>
        {user ? (
          <button
            className="text-[32px] text-black px-4 py-2 rounded-lg"
            onClick={handleSignOut}
          >
            Выход
          </button>
        ) : (
          <button
            className="text-[32px] text-black px-4 py-2 rounded-lg"
            onClick={toggleModal}
          >
            Войти
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-6 rounded-xl shadow-lg relative flex flex-col items-center">
            <Image src="/logo-modal.svg" alt="Logo" width={287} height={94} />
            <h2 className="text-[24px] font-medium mb-4">
              {isRegisterMode ? "Регистрация" : "Вход"}
            </h2>
            <form onSubmit={handleAuthAction}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                  placeholder="Введите вашу почту"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                  placeholder="Введите ваш пароль"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D6DE67] text-white py-2 px-4 rounded-lg"
              >
                {isRegisterMode ? "Зарегистрироваться" : "Войти"}
              </button>
            </form>
            <p
              className="mt-4 text-sm text-center text-blue-500 cursor-pointer"
              onClick={() => setIsRegisterMode(!isRegisterMode)}
            >
              {isRegisterMode
                ? "Уже есть аккаунт? Войти"
                : "Нет аккаунта? Зарегистрируйтесь!"}
            </p>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={toggleModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}
