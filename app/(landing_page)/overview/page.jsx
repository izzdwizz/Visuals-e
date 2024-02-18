'use client';
import Image from 'next/image';
import { generalview } from '../constants';
import image5 from '@/public/choco.jpg';
import image3 from '@/public/pic3.jpg';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

export default function Home() {
	const [modal, setModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const toggleModal = (index) => {
		setSelectedImage(generalview[index]);
		setModal((prevModal) => !prevModal);
	};
	const router = useRouter();
	const categoryLink = (link) => {
		router.push(`/${link}`);
	};

	const secondColumn = generalview.slice(10, 20);
	const firstColumn = generalview.slice(0, 9);
	const thirdColumn = generalview.slice(21, 30);

	useEffect(() => {
		if (modal) {
			document.body.classList.add('active-modal');
		} else {
			document.body.classList.remove('active-modal');
		}
	}, [modal]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-6'>
			<div className='grid grid-cols-1 md:grid-cols-3 w-full  gap-x-10 place-items-start'>
				<div className='flex flex-col text-xl text-black mt-10'>
					<span
						className={`mt-[15rem] px-[1rem] cursor-pointer`}
						onClick={() => {
							toggleModal(0);
						}}
					>
						<Image src={image5} alt='' width={500} height={500} />
					</span>
					{secondColumn.map((image, index) => (
						<span
							className={`mt-[4rem] px-[1rem] cursor-pointer group overflow-hidden`}
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

				<div className='flex flex-col text-xl text-black mt-10'>
					{firstColumn.map((image, index) => (
						<span
							key={index}
							className={`${image.id === 1 ? '-mt-8' : 'mt-[4rem]'} px-${
								image.id % 2 == 0 ? '[1rem]' : '0'
							} cursor-pointer group overflow-hidden`}
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
					<span className={`mt-[4rem] px-[1rem]`}>
						<Image src={image3} alt='' width={500} height={500} />
					</span>
				</div>
				<div className='flex flex-col text-xl text-black mt-10'>
					<span className={`mt-[15rem] px-[1rem]`}>
						<Image src={image3} alt='' width={500} height={500} />
					</span>
					{thirdColumn.map((image, index) => (
						<span
							className={`mt-[4rem] px-[1rem] cursor-pointer group overflow-hidden`}
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
								<div className=''>
									Category:{' '}
									<span
										className='text-[#a2a0a0] cursor-pointer'
										onClick={() => categoryLink(selectedImage.src)}
									>
										{selectedImage.category}
									</span>
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
