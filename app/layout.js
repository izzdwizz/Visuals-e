'use client';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import '/globals.css';
export default function RootLayout({ children }) {
	const [miniToggle, setMiniToggle] = useState(true);
	const toggleMini = () => {
		setMiniToggle(!miniToggle);
	};

	return (
		<>
			{/* Sidebar component remains static above all elements on the page */}
			<main className='flex overflow-hidden h-screen w-screen dark:bg-dark_bg dark:text-dark_text '>
				{/* <Sidebar /> */}
				<Sidebar toggleMini={toggleMini} miniToggle={miniToggle} />
				{/* Main Dashboard display area */}
				<div className='flex flex-col overflow-x-hidden justify-between gap-4 md:gap-0 w-full h-full overflow-y-auto '>
					{/* Navbar COMPONENT goes here */}
					<Navbar toggleMini={toggleMini} miniToggle={miniToggle} />
					{/* When routing begins we would use the <Outlet/> functionality to render different pages */}

					<div className='flex flex-col mb-6'>{children}</div>
				</div>
			</main>
		</>
	);
}
