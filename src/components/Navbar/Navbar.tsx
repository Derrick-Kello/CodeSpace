// import { authModalState } from "@/atoms/authModalAtom"; // Temporarily commented out
// import Image from "next/image"; // Removed to use text-based logo
import Link from "next/link";
import React from "react";
// import { useSetRecoilState } from "recoil"; // Temporarily commented out
import { useAuthModal } from "@/context/AuthModalContext"; // Import useAuthModal

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	// const setAuthModalState = useSetRecoilState(authModalState); // Temporarily commented out
	const { openModal } = useAuthModal(); // Use openModal from context

	const handleClick = () => {
		openModal("login"); // Open login modal
	};
	return (
		<div className='flex items-center justify-between sm:px-12 px-2 md:px-24 bg-dark-layer-1'>
			<Link href='/' className='flex items-center justify-center h-20'>
				{/* <Image src='/logo.png' alt='LeetClone' height={200} width={200} /> */}
				<span className='text-white font-bold text-2xl'>CodeSpace</span>
			</Link>
			<div className='flex items-center'>
				<button
					className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out
                '
					onClick={handleClick}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};
export default Navbar;
