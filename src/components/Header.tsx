export default function Header() {
    return (
        <header className="flex items-center justify-between py-7 px-10 h-[10vh]">
        <h1 className="text-5xl font-black text-main-100">CEDT</h1>
        <nav>
            <ul className="flex space-x-7">
                <li>
                    <a href="/" className=" text-xl font-bold">HOME</a>
                </li>
                <li>
                    <a href="/reserve" className=" text-xl font-bold">RESERVE</a>
                </li>
                <li>
                    <a href="#" className=" text-xl font-bold">REGISTER</a>
                </li>
                <li>
                    <a href="#" className=" text-xl font-bold text-white p-2 bg-main-100 rounded-md">LOGIN</a>
                </li>
            </ul>
        </nav>
        </header>
    )
    }
