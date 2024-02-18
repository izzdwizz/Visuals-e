import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ toggleMini }) {
	return (
		<div>
			<nav className='flex justify-end w-full items-center pt-8 p-2 md:p-4  dark:bg-transparent md:bg-transparent shadow-md md:shadow-none sticky md:relative top-0'>
				<Link href='/overview' className='flex items-end'>
					<Image
						src='/IMG-9394.PNG'
						width={70}
						height={70}
						alt='Picture of the Artist'
						className='filter brightness-[.86] mt-8 bg-black rounded-full hover:scale-105 ease-in-out duration-500 cursor-pointer'
					/>
				</Link>
			</nav>
		</div>
	);
}
