import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="text-white bg-black border border-transparent border-[1px] mb-8">
        <ul className="ml-[100px] mt-8">
          <li className="inline-block mr-8 mb-8 text-3xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/home">Home</Link></li>
          <li className="inline-block mr-8 mb-8 text-3xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/about">About</Link></li>         
          <li className="inline-block mr-8 mb-8 text-3xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/products">Products</Link></li>
          <li className="inline-block mr-8 mb-8 text-3xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/services">Services</Link></li>
          <li className="inline-block mr-8 mb-8 text-3xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
