import Image from "next/image";

export default function Backet() {
  return (
    <main className="ml-[50px] mt-[30px] flex justify-between">
      <div>
        <h1 className="text-[32px]">Корзина</h1>
        <div className="flex w-[900px] mt-[40px]">
          <div className="">1.</div>
          <div className="ml-[40px]">
            <Image src="/backet.png" width={228} height={174} alt="Что-то" />
          </div>
          <div className="flex flex-col justify-between ml-[40px]">
            <div className="text-[24px] font-medium">Много еды</div>
            <div className="w-[404px] text-[16px]">
              Очень много еды описаниеОчень много еды описаниеОчень много еды
              описаниеОчень много еды описание
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <Image src="/minus.svg" width={22} height={22} alt="Что-то" />
              </div>
              <div className="text-[16px]">1 Шт.</div>
              <div className="">
                <Image src="/plus.svg" width={22} height={22} alt="Что-то" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="">560 руб</div>
            <button className="">
              <Image src="/delete.svg" width={22} height={22} alt="Что-то" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[457px] h-[685px] bg-white rounded-tl-[37px] rounded-bl-[37px] shadow-[0px_4px_100px_10px_rgba(0,0,0,0.25)] flex justify-center p-[40px]">
        <form>
          <div className="flex gap-3">
            <div>
              <Image src="/buy.png" width={228} height={174} alt="Что-то" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="">Много еды x5</div>
              <div className="">100000*5 = 500000</div>
            </div>
          </div>
          <div className="bg-[#000] w-full h-[2px] mt-[30px]"></div>
          <div className="text-[16px] font-medium mt-[40px]">Скидка: нет</div>
          <div className="text-[16px] font-medium mt-[10px]">
            Итого: 500000 руб.
          </div>
          <button
            type="submit"
            className="w-[131px] h-[38px] rounded-[6px] border-[2px] border-[#000] mt-[30px]"
          >
            Оформить
          </button>
        </form>
      </div>
    </main>
  );
}
