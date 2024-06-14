import dynamic from "next/dynamic";
import Link from "next/link";

const TinkCash = dynamic(
  () => import('@components/UI/TinkCash'),
  { ssr: false }
)

export default function TinkoffPay() {
  return (
    <main className="relative flex flex-col items-startjustify-center p-6">
        <Link className='relative text-start text-white font-normal mb-4 z-[10000]' href="/">{"< Вернуться назад"}</Link>
        <TinkCash/>
    </main>
  )
}
