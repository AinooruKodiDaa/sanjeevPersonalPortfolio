import { Button } from "@components/Button";
import { NewUploadCloudIcon, UploadIcon, XMarkIcon } from "@components/Icons";
import { Input } from "@components/Input";
import { Text } from "@components/Typography";
import Image from "next/image";
import React, { useRef, useState } from "react";

// const Sampleimages = [
// 	{ url: "/images/AllergySample1.jpg", alt: "image1" },
// 	{ url: "/images/AllergySample2.jpg", alt: "image2" },
// ];

export const Uploader: React.FC<any> = (props) => {
	const { myRef, containerClassName, name, error, multiple ,uploadedImage} = props;

	/**States */
	const [uploadedImages, setUploadedImages] = useState<any[]>([]);
	const [errorMessage, setErrorMessage] = useState(""); 

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
	
		if (files && files.length > 0) {
			const newImages = Array.from(files).map((file) => {
				if (file.size <= 2 * 1024 * 1024) { // Check if file size is less than or equal to 2 MB
					return {
						url: URL.createObjectURL(file),
						alt: file.name,
					};
				} else {
					// Display an error message or handle the oversized file case as needed
					setErrorMessage(`File ${file.name} exceeds the 2 MB size limit`);
					return null;
				}
			}).filter(Boolean); // Remove null values from the array
	
			setUploadedImages((prevImages) => [...prevImages, ...newImages]);
		}
	};
	

	const handleRemoveImage = (index: number) => {
		setUploadedImages((prevImages) => {
			const newImages = [...prevImages];
			newImages.splice(index, 1); // Remove the image at the specified index
			return newImages;
		});
	};

	const openCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true });
			const mediaRecorder = new MediaRecorder(stream);
			const chunks: Blob[] = [];

			mediaRecorder.ondataavailable = (event) => {
				if (event.data.size > 0) {
					chunks.push(event.data);
				}
			};

			mediaRecorder.onstop = () => {
				const blob = new Blob(chunks, { type: "image/png" });
				const imageUrl = URL.createObjectURL(blob);

				setUploadedImages((prevImages) => [
					...prevImages,
					{ url: imageUrl, alt: "captured-image" },
				]);
			};

			mediaRecorder.start();

			// Record for a few seconds, adjust the time based on your needs
			setTimeout(() => {
				mediaRecorder.stop();
				stream.getTracks().forEach((track) => track.stop());
			}, 5000); // 5 seconds
		} catch (error) {
			console.error("Error accessing camera:", error);
		}
	};

	const fileRef = useRef<HTMLInputElement>(null);

	const UploadImage = (e: any) => {
		e.preventDefault();
		fileRef.current?.click();
	};

	return (
		<div className={`${containerClassName ?? ""}`}>
			
			
			<form
				className="flex-grow flex flex-col justify-center items-center  border-2 border-dashed border-accent rounded-[12px] p-3"
				action=""
				name={name}
			>
				<Button onClick={UploadImage} variant="icon" iconButton noPadding>
					<NewUploadCloudIcon fill="currentColor" width={20} height={20} />
				</Button>
				<Text
					color="inherit"
					size="sm"
					weight="600"
					className="text-center w-full"
				>
					Drag & drop / Choose the image File or
					<span className="text-accent cursor-pointer" onClick={openCamera}>
						{" Capture "}
					</span>
					The image
				</Text>
				<Text color="grey" size="sm" className="text-center w-full">{`(500 × 500 Max  recommended, up to 2 MB each)`}</Text>
				{errorMessage && (<Text color="red" size="sm" className="text-center w-full">{errorMessage}</Text>)}
				<input
					type="file"
					name="image"
					ref={fileRef}
					onChange={handleFileChange}
					className="absolute invisible"
					multiple
				/>
			</form>
			<div className="md:h-[10rem] h-[5rem] flex gap-4 flex-wrap overflow-y-auto custom-scroll-bar py-3">
				{uploadedImages.map((item, index) => (
					<div key={index} className="relative">
						<Image
							src={item.url}
							alt={item.alt}
							width={40}
							height={40}
							className="object-cover aspect-square rounded-[8px] shadow-[rgba(0,0,0,0.4)] shadow-md"
						/>
						<Button
							variant="circularIcon"
							color="accent"
							iconButton
							onClick={() => handleRemoveImage(index)}
							className="absolute -top-2 -right-1 rounded-full cursor-pointer hover:fill-white hover:bg-accent fill-accent bg-white"
						>
							<XMarkIcon fill="currentColor" width={7} height={7} />
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};
