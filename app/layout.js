import './globals.css';
export const metadata = {
	title: 'GuzyVisuals',
	description: 'Explore my World of Art',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
