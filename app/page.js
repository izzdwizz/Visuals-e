'use client';
import Image from 'next/image';
import logo from '../public/IMG-9394.PNG';
import Link from 'next/link';

export default function Home() {
	return (
		<Link
			href='/overview'
			className='flex min-h-screen flex-col items-center justify-center p-24 bg-[#eaedf5] overflow-hidden cursor-pointer relative'
		>
			<div className='italic font-[200] text-white '>
				<div className='absolute top-36 -left-24 w-[24rem] h-[14rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob ease-in'></div>
				<div className='absolute top-[8rem] right-[3rem] w-[24rem] h-[16rem] bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 ease-in-out '></div>
				<div className='absolute top-[8rem] -bottom-8 left-4 w-[24rem] h-[14rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 ease-out'></div>

				<Image
					width={400}
					height={400}
					alt='Entrance logo'
					src={logo}
					className='bg-black rounded-full relative z-10'
				/>
			</div>
		</Link>
	);
}
