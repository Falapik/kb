import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className=" mx-[50px] h-[3px] bg-[#D6DE67] mt-[50px]"></div>
      <div className="flex items-start justify-between mr-[50px]">
        <div className="flex ml-[50px] w-full max-w-[800px] justify-between mt-[30px]">
          <div className="text-[28px] font-bold flex flex-col gap-5">
            <div className="">
              <h1 className="">Меню</h1>
            </div>
            <div className="">
              <h1 className="">Магазины</h1>
            </div>
            <div className="">
              <h1 className="">О нас</h1>
            </div>
            <Image
              src="/logo1.svg"
              alt="Vercel Logo"
              width={158}
              height={52}
              className="mr-[30px] mt-[30px] mb-[20px]"
            />
          </div>
          <div className="">
            <div className="mb-[20px] text-[19px] text-[#7E7E7E] font-semibold">
              Помощь
            </div>
            <div className="">Вопросы и ответы</div>
            <div className="">Доставка</div>
            <div className="">Обратная связь</div>
            <div className="">Возврат</div>
            <div className="">Карта сайта</div>
          </div>
          <div className="">
            <div className="mb-[20px] text-[19px] text-[#7E7E7E] font-semibold">
              Наша компания
            </div>
            <div className="">Бонусная программа</div>
            <div className="">Сотрудничество</div>
            <div className="">Партнеры</div>
          </div>
          <div className="">
            <div className="mb-[20px] text-[19px] text-[#7E7E7E] font-semibold">
              Наши точки
            </div>
            <div className="">Карта</div>
            <div className="">Открытие</div>
          </div>
        </div>
        <div className="flex gap-[16px] mt-[30px]">
          <Image src="/yt.svg" alt="Vercel Logo" width={24} height={24} />{" "}
          <Image src="/vk.svg" alt="Vercel Logo" width={24} height={24} />{" "}
          <Image src="/tg.svg" alt="Vercel Logo" width={24} height={24} />{" "}
          <Image src="/fb.svg" alt="Vercel Logo" width={24} height={24} />{" "}
          <Image src="/xt.svg" alt="Vercel Logo" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
