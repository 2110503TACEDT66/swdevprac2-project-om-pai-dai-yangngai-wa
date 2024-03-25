import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default async function Header() {
    const session = await getServerSession(authOptions)
    return (
        <header className="flex items-center justify-between py-7 px-10 h-[10vh]">
        <h1 className="text-5xl font-black text-main-100">CEDT</h1>
        <nav>
            <div className="flex space-x-7 justify-center items-center">
                <Link href="/" className=" text-xl font-bold">HOME</Link>
                <Link href="/reserve" className=" text-xl font-bold">RESERVE</Link>
                {
                    !session ? 
                        (
                        <div className="flex space-x-7 justify-center items-center">
                            <Link href="/reserve" className=" text-xl font-bold">RESERVE</Link>
                            <Link href="/api/auth/signin" className=" text-xl font-bold text-white p-2 bg-main-100 rounded-md">LOGIN</Link>
                        </div>
                        )
                        : (
                            <div className="flex space-x-7 justify-center items-center">
                                <Link href="/history" className=" text-xl font-bold">HISTORY</Link>
                                <div  className=" text-xl flex flex-row font-bold space-x-2 text-white p-2 bg-main-100 rounded-md">
                                    <FontAwesomeIcon icon={faUser} className=" w-4 text-white" />
                                    <h1>
                                        {session.user?.name}
                                    </h1>      
                                </div>
                                <Link href="/api/auth/signout" className=" text-xl font-bold text-white p-2 bg-main-100 rounded-md">LOGOUT</Link>
                            </div>
                        )
                        
                }
            </div>
        </nav>
        </header>
    )
    }
