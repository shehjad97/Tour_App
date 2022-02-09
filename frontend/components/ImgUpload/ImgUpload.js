import axios from 'axios';
import { useEffect, useState } from 'react';

const ImageUpload = ({ uploadProgress, setUploadProgress, imageUrl, setImageUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    useEffect(() => {
        setUploadProgress(0)
        handleUpload()
    }, [selectedFile]);

    const handleUpload = async () => {
        if (!selectedFile) return;
        const isImage = allowedImageTypes.includes(selectedFile.type);
        const hasAllowedExtension = allowedExtensions.some((ext) =>
            selectedFile.name.toLowerCase().endsWith(ext)
        );
        if (!isImage || !hasAllowedExtension) {
            alert('Invalid file type. Please select a valid image file.');
            return;
        }
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await axios.post('https://localhost:3000/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(progress);
                },
            });
            setImageUrl(response.data.data.url);
        } catch (error) {
            console.error('Image upload failed:', error);
        }
    };
    return (
        <div className=''>
            <div className="flex flex-col h-32 items-center justify-center ">
                {uploadProgress === 100 ?
                    <div className="relative h-32">
                        <button
                            className="btn btn-xs btn-active btn-circle absolute"
                            onClick={() => {
                                setImageUrl('');
                                setSelectedFile(null);
                            }}
                        >
                            X
                        </button>

                        <img src={imageUrl} alt="Uploaded" className="object-cover w-full h-full" />
                    </div>

                    : <>
                        {uploadProgress > 0 ? <div>{uploadProgress}% uploaded</div> :
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-48  border-2  border-dashed rounded-lg cursor-pointer  "
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 ">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="dropzone-file" type="file" className="hidden"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                            </label>
                        }
                    </>}
            </div>
        </div>
    );
};

export default ImageUpload;
