import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className="flex font-mono text-black gap-2">
        <Image
        height={20}
        width={20}
        alt="logo"
        src="/logo.svg"
      /> LearnMate</p>

    </Link>
  )
}