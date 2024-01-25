const zlib = require("zlib");

// Function to compress and encode the string
 export const compressAndEncode = (text) => {
	const compressedText = zlib.deflateSync(text); // Compress the text
	const encodedText = compressedText.toString("hex"); // Encode the compressed text
	return encodedText;
};

// Function to decode and decompress the string
 export const decodeAndDecompress = (encodedText) => {
	const compressedText = Buffer.from(encodedText, "hex"); // Decode the compressed text
	const decompressedText = zlib.inflateSync(compressedText).toString(); // Decompress the text
	return decompressedText;
};


// const rteContent = "<p><strong>Clinical Information:</strong></p><p><strong>&nbsp;</strong></p><p><strong>Technique:</strong></p><p>Multiplane T1, T2 and inversion recovery imaging was obtained. Gradient imaging was acquired. Fine slice 3D imaging was performed. Time-of-Flight arterial imaging was obtained. Multiplane post-contrast images were acquired.</p><p><strong>Findings:</strong></p><p>No intra or extra-axial mass lesion or collection is identified. The ventricles and sulcal spaces are within normal limits. The midline structures are normal with no midline shift. No abnormal gradient or diffusion signal is identified.</p><p>No abnormal enhancement is seen. The dural venous sinuses enhance normally.</p><p>The Time-of-Flight imaging is normal.</p><p>The orbits, paranasal sinuses and mastoid air cells are clear. No bony abnormality is seen.</p><p><strong>Conclusion:</strong></p><p>Normal MRI Brain</p>";

// console.log(compressAndEncode(rteContent));