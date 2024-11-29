import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-custom-image bg-cover bg-center h-[398px] ml-[50px] mr-[50px] mt-[30px] rounded-[20px] flex items-end">
        <div className="w-full h-[95px] bg-black/75 rounded-bl-[23px] rounded-br-[23px] flex items-center justify-between">
          <h1 className="text-[32px] text-white ml-[20px]">
            Новое пополнение продуктов!
          </h1>
          <Image
            src="/next.svg"
            alt="Vercel Logo"
            width={46}
            height={46}
            className="mr-[30px]"
          />
        </div>
      </div>
      <h1 className="text-[32px] font-bold ml-[50px] mt-10">Рекомендации</h1>
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>{" "}
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>{" "}
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>{" "}
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>{" "}
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>{" "}
          <div className="bg-card-image bg-cover bg-center h-[211px] rounded-[20px] max-w-[433px] w-full justify-between mt-[30px] flex flex-col items-start">
            <h1 className="text-[32px] text-white ml-[20px] mt-[10px]">
              Фаст-фуд
            </h1>
            <div className="w-full max-w-[433px] h-[54px] bg-black/60 rounded-bl-[23px] rounded-br-[23px]  flex items-center justify-between">
              <h1 className="text-[20px] text-white ml-[20px]">
                Новое пополнение продуктов!
              </h1>
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                width={24}
                height={24}
                className="mr-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[32px] font-bold ml-[50px] mt-10">
        Часто заказывают
      </h1>
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="rounded-[6px] border-[#000] border-[2px] p-[5px] font-semibold">
          Посмотреть в меню
        </button>
      </div>
      {/* <button>
        <Link href="/catalog">dfsdfsdf</Link>
      </button> */}
    </div>
  );
}
