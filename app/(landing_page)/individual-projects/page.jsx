'use client';
import Image from 'next/image';
import { individual } from '../constants';
import React, { useState, useEffect } from 'react';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
	const router = useRouter();
	const [modal, setModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const toggleModal = (index) => {
		setSelectedImage(individual[index]);
		setModal((prevModal) => !prevModal);
	};

	const categoryLink = (link) => {
		router.push(`/${link}`);
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
			<div className='flex flex-col items-center w-full  gap-x-10 '>
				<div className='grid grid-cols-3 grid-flow-row text-xl text-black mt-10 gap-16'>
					{individual.map((image, index) => (
						<span
							key={index}
							className={` cursor-pointer group overflow-hidden`}
							onClick={() => {
								toggleModal(index);
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
				</div>
			</div>

			{modal && selectedImage && (
				<div className='modal'>
					<div
						onClick={() => {
							toggleModal();
						}}
						className='overlay'
					></div>
					<div className='modal-content'>
						<h2>Hello Modal</h2>
						<Image
							src={selectedImage.photo}
							alt={selectedImage.alt}
							width={360}
							height={390}
						/>
						<div className='flex flex-col items-start py-2 text-[0.75rem] gap-4 justify-end font-[600] relative'>
							<div className='flex justify-between  w-full mt-6'>
								<span className='text-black'>
									Price: ${selectedImage.price}
								</span>
								<span>Title: {selectedImage.heading}</span>
							</div>

							<div className='flex justify-between'>
								<div className='flex justify-between'>
									<div className='underline'>Place Order</div>
								</div>
							</div>
						</div>

						<button
							className='close-modal'
							onClick={() => {
								toggleModal();
							}}
						>
							<MdOutlineCloseFullscreen className='h-3 w-3 text-[#333333c3]' />
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
