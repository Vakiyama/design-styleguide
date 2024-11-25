/*font-[family-name:var(--font-geist-mono)]
 * */

"use client";

import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";

export default function Home() {
	return (
		<div>
			<Page page>
				{/* page 1*/}
				<div className="flex flex-col items-center justify-center bg-background h-full border-b-4 border-primary">
					<div className="w-[600px] -mb-8">
						<Logo />
					</div>
					<h1 className="text-4xl text-primary">Styleguide</h1>
				</div>
			</Page>
			<div className="z-0">
				<BackgroundMap />
			</div>
			<div className="h-[40dvh] z-10 relative" />
			<Page>
				{/* page 2*/}
				<div className="bg-background h-full border-t-4 border-b-4 border-primary flex flex-col px-20 gap-10">
					<h2 className="text-6xl text-primary pt-10">01. Our Mission</h2>
					<p className="text-xl">
						We believe that accessibility is key an inclusive future for all.
					</p>
					<p className="text-xl">
						Through the power of our communities, we aim to empower individuals
						to document, highlight and celebrate accesibility found throughout
						the places visit each day.
					</p>
					<h2 className="text-6xl text-primary pt-10">02. Colors</h2>
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
						<ColorCard
							title="Primary - 4F3D65"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-primary"
						/>
						<ColorCard
							title="Secondary - ACA0BB"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-secondary"
						/>
						<ColorCard
							title="Background - A0BAAA"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-background"
						/>
						<ColorCard
							title="Accent - 393939"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-accent"
						/>
						<ColorCard
							title="Text - 000000"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-text"
						/>
						<ColorCard
							title="Card - D9D9D9"
							description={`
                  Purple symbolizes both individuality and inclusivity, as it
                  historically represents diversity and uniqueness.`}
							colorClass="bg-card"
						/>
					</div>
					<h2 className="text-6xl text-primary pt-10">03. Logo</h2>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[200px] w-full max-w-[700px]">
							<Logo />
						</div>
					</div>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[200px] w-full max-w-[700px]">
							<Logo />
						</div>
					</div>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[200px] w-full max-w-[700px]">
							<Logo />
						</div>
					</div>
					<h2 className="text-6xl text-primary pt-10">04. Graphics</h2>

					<h2 className="text-6xl text-primary pt-10">05. Accessibility</h2>
					<div className="flex flex-col gap-4">
						<h3 className="text-2xl text-primary">Color Contrast Ratios</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex flex-col gap-2 bg-card p-4 rounded-md">
								<h4 className="text-xl text-center">Primary on Background</h4>
								<div className="aspect-video bg-background flex items-center justify-center">
									<span className="text-primary text-2xl text-center">
										Sample Text
									</span>
								</div>
								<p className="text-sm text-center">
									Contrast ratio: 4.61:1 (WCAG AA compliant)
								</p>
								<AccessibilityTest
									normalTextAA={true}
									normalTextAAA={false}
									largeTextAA={true}
									largeTextAAA={true}
									graphicalAA={true}
								/>
							</div>

							<div className="flex flex-col gap-2 bg-card p-4 rounded-md">
								<h4 className="text-xl text-center">Text on Background</h4>
								<div className="aspect-video bg-background flex items-center justify-center">
									<span className="text-text text-2xl text-center">
										Sample Text
									</span>
								</div>
								<p className="text-sm text-center">
									Contrast ratio: 10.09:1 (WCAG AAA compliant)
								</p>
								<AccessibilityTest
									normalTextAA={true}
									normalTextAAA={true}
									largeTextAA={true}
									largeTextAAA={true}
									graphicalAA={true}
								/>
							</div>

							<div className="flex flex-col gap-2 bg-card p-4 rounded-md">
								<h4 className="text-xl text-center">Primary on Card</h4>
								<div className="aspect-video bg-card flex items-center justify-center">
									<span className="text-primary text-2xl text-center">
										Sample Text
									</span>
								</div>
								<p className="text-sm text-center">
									Contrast ratio: 6.79:1 (WCAG AA compliant)
								</p>
								<AccessibilityTest
									normalTextAA={true}
									normalTextAAA={false}
									largeTextAA={true}
									largeTextAAA={true}
									graphicalAA={true}
								/>
							</div>

							<div className="flex flex-col gap-2 bg-card p-4 rounded-md">
								<h4 className="text-xl text-center">White on Primary</h4>
								<div className="aspect-video bg-primary flex items-center justify-center">
									<span className="text-white text-2xl text-center">
										Sample Text
									</span>
								</div>
								<p className="text-sm text-center">
									Contrast ratio: 9.59:1 (WCAG AAA compliant)
								</p>
								<AccessibilityTest
									normalTextAA={true}
									normalTextAAA={true}
									largeTextAA={true}
									largeTextAAA={true}
									graphicalAA={true}
								/>
							</div>
						</div>
					</div>
					{/* Spacer Div Below */}
					<div className="h-20 w-full" />
				</div>
			</Page>
			{/* page 3 */}
		</div>
	);
}

interface AccessibilityTestProps {
	normalTextAA?: boolean;
	normalTextAAA?: boolean;
	largeTextAA?: boolean;
	largeTextAAA?: boolean;
	graphicalAA?: boolean;
}

const AccessibilityTest: React.FC<AccessibilityTestProps> = ({
	normalTextAA = true,
	normalTextAAA = false,
	largeTextAA = true,
	largeTextAAA = true,
	graphicalAA = true,
}) => {
	const StatusBadge: React.FC<{ passed: boolean }> = ({ passed }) => (
		<span
			className={`${
				passed ? "bg-green-500" : "bg-red-500"
			} text-white px-3 py-1 rounded`}
		>
			{passed ? "Pass" : "Fail"}
		</span>
	);

	return (
		<div className="p-4">
			<section className="mb-8">
				<h2 className="font-bold text-xl mb-4">Normal Text</h2>
				<div className="flex items-center gap-2 mb-2">
					<span>WCAG AA:</span>
					<StatusBadge passed={normalTextAA} />
				</div>
				<div className="flex items-center gap-2 mb-2">
					<span>WCAG AAA:</span>
					<StatusBadge passed={normalTextAAA} />
				</div>
			</section>

			<section className="mb-8">
				<h2 className="font-bold text-xl mb-4">Large Text</h2>
				<div className="flex items-center gap-2 mb-2">
					<span>WCAG AA:</span>
					<StatusBadge passed={largeTextAA} />
				</div>
				<div className="flex items-center gap-2 mb-2">
					<span>WCAG AAA:</span>
					<StatusBadge passed={largeTextAAA} />
				</div>
			</section>

			<section className="mb-8">
				<h2 className="font-bold text-xl mb-4">
					Graphical Objects and User Interface Components
				</h2>
				<div className="flex items-center gap-2 mb-2">
					<span>WCAG AA:</span>
					<StatusBadge passed={graphicalAA} />
				</div>
			</section>
		</div>
	);
};

function ColorCard(props: {
	title: string;
	description: string;
	colorClass: string;
}) {
	return (
		<div className="bg-card rounded flex flex-col p-2 gap-2">
			<div className={`${props.colorClass} w-full lg:h-80 h-60 rounded-sm `} />
			<div className="flex flex-col px-1 gap-2">
				<p className="text-xl">{props.title}</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

function createBackground(progress: number) {
	const clipped = Math.max(20, progress);
	return `linear-gradient(#4f3d65, #4f3d65 ${clipped}%, #a0baaa ${clipped}%, #a0baaa 100%)`;
}

function BackgroundMap() {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const maxScroll = document.body.scrollHeight - window.innerHeight;
			const scrollPercentage = (scrollPosition / maxScroll) * 100;
			setScrollPercentage(scrollPercentage * 1.6);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			style={{
				top: `${20 + scrollPercentage / 4}px`,
			}}
			className="h-full w-full z-0 fixed"
		>
			<div>
				<BgRectangle
					rotation={0}
					width={10}
					height={1200}
					borderWidth={10}
					left={0}
					top={-100}
					progress={scrollPercentage}
				/>
			</div>
		</div>
	);
}
// <div className="w-[300px] h-[400px] border-4 border-background absolute" />

function BgRectangle(props: {
	rotation: number;
	width: number;
	height: number;
	borderWidth: number;
	left: number;
	top: number;
	progress: number;
}) {
	const bgClassName = createBackground(props.progress);

	return (
		<div
			className={`absolute bg-primary flex items-center justify-center`}
			style={{
				rotate: `${props.rotation}deg`,
				width: `${props.width}px`,
				height: `${props.height}px`,
				left: `calc(${props.left}px + 50dvw - ${props.borderWidth}px)`,
				top: `${props.top}px`,
			}}
		>
			<div
				style={{
					background: bgClassName,
					width: `${props.width}px`,
					height: `${props.height}px`,
				}}
				className="absolute"
			/>
			<div
				style={{
					width: `${props.width - props.borderWidth}px`,
					height: `${props.height - props.borderWidth}px`,
				}}
				className={`absolute bg-card`}
			/>
		</div>
	);
}

function Page(props: { children?: JSX.Element; page?: boolean }) {
	return (
		<div
			style={{
				height: props.page ? "100dvh" : undefined,
			}}
			className="h-fit z-10 relative"
		>
			{props.children}
		</div>
	);
}
