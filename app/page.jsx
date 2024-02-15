'use client';
import Image from 'next/image';
import { generalview } from './constants';
import image5 from '@/public/choco.jpg';
import image3 from '@/public/pic3.jpg';
import React, { useState, useEffect } from 'react';

export default function Home() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal((prevModal) => !prevModal);
	};

	useEffect(() => {
		if (modal) {
			document.body.classList.add('active-modal');
		} else {
			document.body.classList.remove('active-modal');
		}
	}, [modal]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-6'>
			<div
				className='text-2xl text-black bg-slate-400 rounded-xl cursor-pointer'
				onClick={() => {
					alert('Make money');
				}}
			>
				{' '}
				Hello
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 w-full  gap-x-10 place-items-start'>
				<div className='flex flex-col text-xl text-black mt-10'>
					<span
						className={`mt-[15rem] px-[1rem] cursor-pointer`}
						onClick={() => {
							setModal(true);
						}}
					>
						<Image src={image5} alt='' width={500} height={500} />
					</span>
					{generalview.map((image, index) => (
						<span
							className={`mt-[4rem] px-[1rem] cursor-pointer group overflow-hidden`}
						>
							<Image
								src={image.photo}
								alt={image.alt}
								width={500}
								height={500}
								className='group-hover:scale-110 duration-500 ease-in-out'
							/>
						</span>
					))}
					{modal && (
						<div className='modal'>
							<div
								onClick={() => {
									setModal(true);
								}}
								className='overlay'
							></div>
							<div className='modal-content'>
								<h2>Hello Modal</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Provident perferendis suscipit officia recusandae, eveniet
									quaerat assumenda id fugit, dignissimos maxime non natus
									placeat illo iusto! Sapiente dolorum id maiores dolores? Illum
									pariatur possimus quaerat ipsum quos molestiae rem aspernatur
									dicta tenetur. Sunt placeat tempora vitae enim incidunt porro
									fuga ea.
								</p>
								<button
									className='close-modal'
									onClick={() => {
										setModal(true);
									}}
								>
									CLOSE
								</button>
							</div>
						</div>
					)}
				</div>

				<div className='flex flex-col text-xl text-black mt-10'>
					{generalview.map((image, index) => (
						<span
							key={index}
							className={`${
								image.id === 1 ? '-mt-3' : 'mt-[4rem]'
							} px-[1rem] cursor-pointer group overflow-hidden`}
							onClick={() => {
								setModal(true);
							}}
						>
							<Image
								src={image.photo}
								alt={image.alt}
								width={500}
								height={500}
								className='group-hover:scale-110 duration-500 ease-in-out'
							/>
						</span>
					))}
					<span className={`mt-[4rem] px-[1rem]`}>
						<Image src={image3} alt='' width={500} height={500} />
					</span>
				</div>
				<div className='flex flex-col text-xl text-black mt-10'>
					<span className={`mt-[15rem] px-[1rem]`}>
						<Image src={image3} alt='' width={500} height={500} />
					</span>
					{generalview.map((image, index) => (
						<span
							className={`mt-[4rem] px-[1rem] cursor-pointer group overflow-hidden`}
						>
							<Image
								src={image.photo}
								alt={image.alt}
								width={500}
								height={500}
								className='group-hover:scale-110 duration-500 ease-in-out'
							/>
						</span>
					))}
				</div>
			</div>
		</main>
	);
}
