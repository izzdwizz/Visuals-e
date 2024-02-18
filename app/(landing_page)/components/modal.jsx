import Image from 'next/image';
import React from 'react';
import logo from '@/public/IMG-9394.PNG';

function Loader({ isOpen }) {
	return (
		<>
			{isOpen && (
				<div className='modal'>
					<div
						onClick={() => {
							toggleModal();
						}}
						className='overlay'
					></div>
					<div className='modal-content'>
						<Image
							width={400}
							height={400}
							alt='Entrance logo'
							src={logo}
							className='bg-black rounded-full relative z-10'
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default Loader;
