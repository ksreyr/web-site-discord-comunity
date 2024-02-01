import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            <Link className="flex items-center gap-2" href="#">
                <Image src="/img.png"  alt="me" width="64" height="64"/>
                <span className="text-xl font-bold">Blindma1den</span>
            </Link>
            <nav className="flex gap-4">
                <Link className="text-lg font-medium hover:underline" href="#">
                    About
                </Link>
                <Link className="text-lg font-medium hover:underline" href="#">
                    Events
                </Link>
                <Link className="text-lg font-medium hover:underline" href="#">
                    Contact
                </Link>
            </nav>
        </header>
    )
}