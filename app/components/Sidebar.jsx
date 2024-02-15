'use client';
import { useState, useEffect } from 'react';
import { TiChevronLeft } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar({ miniToggle, toggleMini }) {
	const router = useRouter();

	//Handling Navigation for the sidebar
	const handleNavigate = (point) => {
		return router.push(`/dashboard/${point}`);
	};
	const externalNavigate = (point) => {
		return router.push(`/${point}`);
	};

	const [miniSidebar, setMiniSidebar] = useState(false);
	// State Management for regular sized screens
	const [toggle, setToggle] = useState(true);
	const [activeLink, setActiveLink] = useState(false);

	useEffect(() => {
		const handleSideMenu = () => {
			setMiniSidebar(window?.innerWidth < 768);
		};

		// Calling the SideMenu function to decide which sidebar to render
		handleSideMenu();
		window.addEventListener('resize', handleSideMenu);

		return () => {
			window.removeEventListener('resize', handleSideMenu);
		};
	}, []);

	return (
		<>
			{!miniSidebar ? (
				<aside
					className={` ${
						toggle ? 'w-[22rem]' : 'w-20'
					}  ease-in-out duration-500 h-screen bg-[#fefefe] fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
				>
					<TiChevronLeft
						alt='Controller icon for collapsable sidebar'
						className={`absolute bg-white cursor-pointer  rounded-full -right-3 top-9 w-7 border-2 border-ui_primary ${
							!toggle && 'rotate-180'
						} ease-in-out duration-500 hidden`}
					/>

					{/* Header for sidebar */}
					<div className='flex gap-x-4 items-center'>
						{/* The images are commented out and icons are used as placeholders till the main logo and other icons arrive */}

						<Link
							href='/'
							className={` font-poppins origin-left text-[2rem] font-[700] leading-8 text-white  ${
								!toggle && 'scale-[0]'
							} cursor-pointer bg-transparent hover:animate-pulse duration-500 mb-2`}
						></Link>
					</div>
					{/* Link Items */}
					<ul className='pt-6 flex flex-col items-end mt-[6.8rem]'>
						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<span
								className={`duration-500 ease-in-out text-[#a2a0a0]  group-hover:text-black`}
							>
								Overview
							</span>
						</li>

						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 pb-5 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<span
								className={`duration-500 ease-in-out text-[#a2a0a0]  group-hover:text-black`}
							>
								Peruse Projects {''} &rarr;
							</span>
						</li>
						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center italic gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<span
								className={`duration-500 ease-in-out text-[#a2a0a0]  group-hover:text-black`}
							>
								Cinematography
							</span>
						</li>
						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center italic gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<span
								className={`duration-500 ease-in-out text-[#a2a0a0]  group-hover:text-black`}
							>
								Store
							</span>
						</li>
						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center italic gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<span
								className={`duration-500 ease-in-out text-[#a2a0a0]  group-hover:text-black`}
							>
								Contact/Press
							</span>
						</li>
						<li
							className={`text-[#B7C5CC] text-[0.82rem] font-[200] flex items-center italic gap-x-4 cursor-pointer p-2  group bg-transparent duration-500 `}
							onClick={() => {
								setActiveLink(index);
							}}
						>
							<Link
								href='https://www.instagram.com/guzyvisuals/'
								className={` text-[#000]  group-hover:scale-105 ease-in-out duration-300`}
							>
								<FaInstagram className='h-6 w-6' />
							</Link>
						</li>
					</ul>
				</aside>
			) : (
				<aside
					className={` ${
						miniToggle ? 'w-72' : 'fixed left-[-100%] ease-in-out duration-700 '
					}  ease-in-out duration-500 h-screen bg-[#0A372F] dark:bg-dark_primary fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
				>
					<div className='flex gap-x-4 items-center'>
						{/* The images are commented out and icons are used as placeholders till the main logo and other icons arrive */}

						<Link
							href='/'
							className={`rounded-md font-poppins origin-left text-[2rem] font-[700] leading-8 text-white  ${
								!toggle && 'scale-[0]'
							} cursor-pointer bg-transparent hover:animate-pulse duration-500 mb-2`}
						>
							<Image
								src='/assets/images/Logo VendGenix.svg'
								className='rounded-md'
								alt='logo'
								width='150'
								height='150'
							/>
						</Link>
					</div>
					{/* Link Items */}
					{/* <ul className='pt-6'>
						{MenuLinks.map((menu, index) => (
							<li
								key={index}
								className={`text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 hover:text-ui_button bg-transparent rounded-md duration-500 ${
									menu.gap ? 'mt-9' : 'mt-5'
								}  `}
								onClick={() => {
									setActiveLink(index);
									// setMiniToggle(!miniToggle);
									toggleMini();
									if (menu.onClick == handleSignOut) {
										menu.onClick();
									} else if (menu.onClick == handleNavigate) {
										menu.onClick(menu.route);
									} else if (menu.onClick == externalNavigate) {
										menu.onClick(menu.route);
									}
								}}
							>
								<div
									className={` md:h-4 md:w-4  ${
										activeLink === index && 'text-ui_button'
									} `}
								>
									{menu.src}
								</div>
								<span
									className={`${
										!miniToggle && 'scale-0'
									} duration-500 ease-in-out`}
								>
									{' '}
									{menu.title}{' '}
								</span>
							</li>
						))}

						<div
							className={`bg-[#fff] shadow-md rounded-md flex gap-2 justify-center  mt-12 px-3 py-3 items-center md:hidden ${
								!miniToggle && 'left-[-100%] duration-500 '
							} `}
							onClick={toggleMini}
						>
							<div className=' text-ui_secondary1 dark:text-ui_button '>
								<TiChevronLeft />
							</div>
							<span
								className={`text-[0.82rem]  text-ui_secondary1 dark:text-ui_button `}
							>
								{' '}
								Collapse Menu{' '}
							</span>
						</div>
					</ul> */}
				</aside>
			)}
		</>
	);
}
