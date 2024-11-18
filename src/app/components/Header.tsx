import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div>

    <div className="bg-[#043873] w-[1440px] h-[92px] flex flex-row justify-between items-center px-32 py-16 ">
      <div className="flex flex-row justify-between items-center gap-10 p-0 m-auto">
        <Image
        src="/images/main-logo-png"
        width={191}
        height={34}
        alt="logo"
        />
      </div>

      <div className="flex flex-row  justify-end items-center p-0 m-auto w-[928.5px] h-[60px]">
      <div>
        <div>Product</div>
        <div>Solutions</div>
        <div>Resources</div>
        <div>Prices</div>
      </div>
      <div className="flex flex-row justify-end items-start gap-24 w-[377px] h-[60px] ">
      <button>Login</button>
      <button>Whitepace Free</button>
      </div>
      </div>
    </div>

    </div>
  );
}
