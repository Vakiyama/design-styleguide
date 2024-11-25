"use client";

import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { LogoGuide } from "./components/LogoGuide";
import { LogoIcon } from "./components/LogoIcon";
import { Search } from "./components/Search";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";

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

export default function Home() {
	return (
		<div>
			<Page page>
				{/* page 1*/}
				<div className="flex flex-col items-center justify-center bg-background h-full border-b-4 border-primary">
					<div className="min-w-[200px] w-full max-w-[800px] sm:-mb-8 -mb-4 px-8">
						<Logo />
					</div>
					<h1 className="text-2xl sm:text-4xl text-primary">Styleguide</h1>
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
					<p>
						We designed the logo to clearly convey the ideas and features of the
						application. We use a stylized map pin to convey the the map and
						location features. We use the depiction of a person in a wheelchair
					</p>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[180px] w-full max-w-[180px] ">
							<LogoIcon />
						</div>
					</div>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[200px] w-full max-w-[700px] ">
							<Logo />
						</div>
					</div>
					<div className="w-full flex flex-row items-center justify-center">
						<div className="min-w-[200px] w-full max-w-[700px]">
							<LogoGuide />
						</div>
					</div>
					<h2 className="text-6xl text-primary pt-10">04. Graphics & Icons</h2>
					<div className="flex flex-row justify-center gap-6">
						<div className="h-fit bg-card flex flex-col items-center w-fit p-3 rounded">
							<img className="h-[500px]" src="./home.png" />
						</div>
						<div className="h-fit bg-card flex flex-col items-center w-fit p-3 rounded">
							<img className="h-[500px]" src="./quiz.png" />
						</div>
					</div>
					<div className="flex flex-row justify-center gap-6">
						<div className="h-fit bg-card flex flex-col items-center w-fit p-3 rounded">
							<img className="h-[500px]" src="./inspo.png" />
						</div>
					</div>
					<div className="flex flex-row justify-center gap-6">
						<Search />
						<p className="text-2xl my-4">
							This will be used as part of our search feature.
						</p>
						<Profile />
						<p className="text-2xl my-4">
							This represents our profile page. It has a generic visual to be
							inclusive towards all individuals
						</p>
						<Settings />
						<p className="text-2xl my-4">
							This will be used to distinguish the settings feature.
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<h2 className="text-6xl text-primary pt-10">05. Typography</h2>
						<p className="text-2xl my-4">
							We chose Noto Sans as our primary font. Being an unmodulated sans
							font, Noto Sans affords a consistent stroke width that gives it
							great readability in various contexts. Picking a highly accessible
							font is critical to us considering our mission, and Noto sans fit
							that criteria.
						</p>
						<h1 className="text-6xl font-semibold">Noto Sans - H1 - 3.75rem</h1>
						<h2 className="text-5xl font-semibold">Noto Sans - H2 - 3rem</h2>
						<h3 className="text-4xl font-semibold">Noto Sans - H3 - 2.25rem</h3>
						<h4 className="text-3xl font-semibold">
							Noto Sans - H4 - 1.875rem
						</h4>
						<h5 className="text-2xl font-semibold">Noto Sans - H5 - 1.5rem</h5>
						<h6 className="text-xl font-semibold">Noto Sans - H6 - 1.25rem</h6>
					</div>
					<div className="h-20 w-full" />
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
					<h2 className="text-6xl text-primary pt-10 m-auto">Team</h2>
					<ul className="text-4xl flex flex-col gap-2 items-center">
						<li>Allison</li>
						<li>Christine</li>
						<li>Vitor</li>
					</ul>
					<div className="h-20 w-full" />
				</div>
			</Page>
			{/* page 3 */}
		</div>
	);
}

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
