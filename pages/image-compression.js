import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/image-compression.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function ImageCompression() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isCompressing, setIsCompressing] = useState(false);
    const [status, setStatus] = useState('');
    const [progress, setProgress] = useState(0);
    const [compressedFiles, setCompressedFiles] = useState([]);
    const [totalSizeSaved, setTotalSizeSaved] = useState(0);
    const [previewImage, setPreviewImage] = useState(null);
    const [compressionSettings, setCompressionSettings] = useState({
        resizeByPercentage: 80, // Default 80% of original size
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.9, // Quality setting between 0 and 1
        maintainAspectRatio: true
    });
    const imageInputRef = useRef(null);
    const fileDropRef = useRef(null);
    const canvasRef = useRef(null);
const [language, setLanguage] = useState('en');
    const [agreed, setAgreed] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'np' : 'en');
    };

    // Handle image file selection
    const handleImageSelect = (event) => {
        const files = Array.from(event.target.files);
        processSelectedFiles(files);
    };

    // Process the selected files
    const processSelectedFiles = (files) => {
        const imageFiles = files.filter(file => file.type.startsWith('image/'));

        if (imageFiles.length === 0) {
            setStatus('Please select valid image files.');
            return;
        }

        setSelectedImages([...selectedImages, ...imageFiles]);
        setStatus(`${imageFiles.length} image(s) selected`);
        setCompressedFiles([]);

        // Set the first image as preview if we don't have one yet
        if (!previewImage && imageFiles.length > 0) {
            setPreviewImageFromFile(imageFiles[0]);
        }
    };

    // Set preview image from file
    const setPreviewImageFromFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewImage({
                src: e.target.result,
                name: file.name,
                size: file.size,
                file: file
            });
        };
        reader.readAsDataURL(file);
    };

    // Handle drag events
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (fileDropRef.current) {
            fileDropRef.current.classList.add(styles.dragActive);
        }
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (fileDropRef.current) {
            fileDropRef.current.classList.remove(styles.dragActive);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (fileDropRef.current) {
            fileDropRef.current.classList.remove(styles.dragActive);
        }

        const files = Array.from(e.dataTransfer.files);
        processSelectedFiles(files);
    };

    // Handle removing a file from the list
    const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedImages];
        const removedFile = updatedFiles[index];
        updatedFiles.splice(index, 1);
        setSelectedImages(updatedFiles);

        // Update preview image if the removed file was being previewed
        if (previewImage && previewImage.name === removedFile.name) {
            if (updatedFiles.length > 0) {
                setPreviewImageFromFile(updatedFiles[0]);
            } else {
                setPreviewImage(null);
            }
        }

        if (updatedFiles.length === 0) {
            setStatus('');
        } else {
            setStatus(`${updatedFiles.length} image(s) selected`);
        }
    };

    // Handle selecting a file for preview
    const handleSelectForPreview = (file) => {
        setPreviewImageFromFile(file);
    };

    // Handle changes to compression settings
    const handleSettingChange = (setting, value) => {
        setCompressionSettings({
            ...compressionSettings,
            [setting]: value
        });
    };

    // Draw preview with compression settings applied
    useEffect(() => {
        if (previewImage && canvasRef.current) {
            const img = new Image();
            img.onload = () => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');

                // Calculate new dimensions
                let newWidth, newHeight;

                if (compressionSettings.maintainAspectRatio) {
                    // Calculate dimensions based on percentage
                    const resizeRatio = compressionSettings.resizeByPercentage / 100;
                    newWidth = img.width * resizeRatio;
                    newHeight = img.height * resizeRatio;

                    // Make sure dimensions don't exceed max width/height
                    if (newWidth > compressionSettings.maxWidth) {
                        const ratio = compressionSettings.maxWidth / newWidth;
                        newWidth = compressionSettings.maxWidth;
                        newHeight = newHeight * ratio;
                    }

                    if (newHeight > compressionSettings.maxHeight) {
                        const ratio = compressionSettings.maxHeight / newHeight;
                        newHeight = compressionSettings.maxHeight;
                        newWidth = newWidth * ratio;
                    }
                } else {
                    // Fixed dimensions without aspect ratio
                    newWidth = compressionSettings.maxWidth;
                    newHeight = compressionSettings.maxHeight;
                }

                // Set canvas size to match new dimensions
                canvas.width = newWidth;
                canvas.height = newHeight;

                // Clear canvas and draw image with new dimensions
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                // Estimate compressed size for preview
                canvas.toBlob(blob => {
                    if (blob) {
                        const compressionRatio = ((1 - (blob.size / previewImage.size)) * 100).toFixed(1);
                        const previewElement = document.getElementById('previewSizeInfo');
                        if (previewElement) {
                            previewElement.innerHTML = `
                Original: ${formatFileSize(previewImage.size)} (${img.width}x${img.height})<br>
                Estimated: ${formatFileSize(blob.size)} (${Math.round(newWidth)}x${Math.round(newHeight)})<br>
                Saved: ${compressionRatio}%
              `;
                        }
                    }
                }, previewImage.file.type, compressionSettings.quality);
            };
            img.src = previewImage.src;
        }
    }, [previewImage, compressionSettings]);

    // Compress and resize images
    const compressImages = async () => {
        if (selectedImages.length === 0) {
            setStatus('Please select at least one image to compress.');
            return;
        }

        setIsCompressing(true);
        setStatus('Preparing to compress images...');
        setProgress(0);
        setCompressedFiles([]);
        setTotalSizeSaved(0);

        try {
            const totalImages = selectedImages.length;
            const processedImages = [];
            let originalSizeTotal = 0;
            let compressedSizeTotal = 0;

            for (let i = 0; i < totalImages; i++) {
                const file = selectedImages[i];
                setStatus(`Processing image ${i + 1} of ${totalImages}...`);

                // Create image element to get dimensions
                const img = await createImageFromFile(file);

                // Calculate new dimensions
                let newWidth, newHeight;

                if (compressionSettings.maintainAspectRatio) {
                    // Calculate dimensions based on percentage if resizing by percentage
                    const resizeRatio = compressionSettings.resizeByPercentage / 100;
                    newWidth = img.width * resizeRatio;
                    newHeight = img.height * resizeRatio;

                    // Make sure dimensions don't exceed max width/height
                    if (newWidth > compressionSettings.maxWidth) {
                        const ratio = compressionSettings.maxWidth / newWidth;
                        newWidth = compressionSettings.maxWidth;
                        newHeight = newHeight * ratio;
                    }

                    if (newHeight > compressionSettings.maxHeight) {
                        const ratio = compressionSettings.maxHeight / newHeight;
                        newHeight = compressionSettings.maxHeight;
                        newWidth = newWidth * ratio;
                    }
                } else {
                    // Fixed dimensions without aspect ratio
                    newWidth = compressionSettings.maxWidth;
                    newHeight = compressionSettings.maxHeight;
                }

                // Create canvas for resizing
                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext('2d');

                // Draw image on canvas with new dimensions
                ctx.drawImage(img, 0, 0, newWidth, newHeight);

                // Convert canvas to blob
                const compressedBlob = await new Promise(resolve => {
                    canvas.toBlob(blob => resolve(blob), file.type, compressionSettings.quality);
                });

                // Create a new file from the blob
                const compressedFile = new File(
                    [compressedBlob],
                    `compressed_${file.name}`,
                    { type: file.type }
                );

                // Track total sizes
                originalSizeTotal += file.size;
                compressedSizeTotal += compressedBlob.size;

                // Add compression stats
                const compressionRatio = ((1 - (compressedBlob.size / file.size)) * 100).toFixed(1);

                processedImages.push({
                    original: {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        width: img.width,
                        height: img.height
                    },
                    compressed: {
                        file: compressedFile,
                        size: compressedBlob.size,
                        width: newWidth,
                        height: newHeight,
                        compressionRatio: compressionRatio
                    }
                });

                // Update progress
                const currentProgress = Math.round(((i + 1) / totalImages) * 100);
                setProgress(currentProgress);
            }

            setCompressedFiles(processedImages);
            const totalSaved = originalSizeTotal - compressedSizeTotal;
            setTotalSizeSaved(totalSaved);
            const savingsPercentage = ((totalSaved / originalSizeTotal) * 100).toFixed(1);
            setStatus(`Successfully compressed ${totalImages} image(s), saved ${formatFileSize(totalSaved)} (${savingsPercentage}%)`);
        } catch (error) {
            console.error('Error compressing images:', error);
            setStatus(`Error compressing images: ${error.message}`);
        } finally {
            setIsCompressing(false);
        }
    };

    // Create an image element from a file
    const createImageFromFile = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = URL.createObjectURL(file);
        });
    };

    // Handle downloading a compressed file
    const handleDownload = (compressedFile) => {
        const url = URL.createObjectURL(compressedFile.compressed.file);
        const a = document.createElement('a');
        a.href = url;
        a.download = compressedFile.compressed.file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Download all compressed files as a zip
    const handleDownloadAll = () => {
        compressedFiles.forEach(file => {
            handleDownload(file);
        });
    };

    // Reset the form
    const handleReset = () => {
        setSelectedImages([]);
        setStatus('');
        setProgress(0);
        setCompressedFiles([]);
        setPreviewImage(null);
        setTotalSizeSaved(0);
        if (imageInputRef.current) imageInputRef.current.value = '';
    };

    // Format file size to KB/MB
    const formatFileSize = (bytes) => {
        if (bytes < 1024) {
            return bytes + ' B';
        } else if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(2) + ' KB';
        } else {
            return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
        }
    };

    const hasUploadedImages = selectedImages.length > 0;

    return (
        <>
            <Navbar language={language} toggleLanguage={toggleLanguage} />
            <div className={styles.converterContainer}>
                <h2 className={styles.converterHeading}>Compress & Resize Images</h2>

                <div className={styles.contentContainer}>
                    {/* Left panel - File upload and settings */}
                    <div className={styles.leftPanel}>
                        <div
                            className={styles.fileInputContainer}
                            ref={fileDropRef}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <label className={styles.fileInputLabel}>
                                <div className={styles.fileInputIconContainer}>
                                    <svg viewBox="0 0 24 24" className={styles.fileInputIcon}>
                                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                                    </svg>
                                </div>
                                <div className={styles.fileInputText}>
                                    <span className={styles.fileInputPrimary}>
                                        Drag & drop your images here or click to browse
                                    </span>
                                    <span className={styles.fileInputSecondary}>
                                        Supports JPG, PNG, GIF, WEBP, etc.
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    ref={imageInputRef}
                                    multiple
                                />
                            </label>

                            {hasUploadedImages && (
                                <div className={styles.selectedFiles}>
                                    <div className={styles.selectedFilesHeading}>
                                        <svg viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                        </svg>
                                        Selected Images ({selectedImages.length})
                                    </div>

                                    <ul className={styles.filesList}>
                                        {selectedImages.map((file, index) => (
                                            <li key={index} className={styles.fileItem}>
                                                <div
                                                    className={`${styles.fileDetails} ${previewImage && previewImage.name === file.name ? styles.activePreview : ''}`}
                                                    onClick={() => handleSelectForPreview(file)}
                                                >
                                                    <div className={styles.fileItemIcon}>
                                                        <svg viewBox="0 0 24 24" width="16" height="16">
                                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className={styles.fileItemInfo}>
                                                        <span className={styles.fileItemName}>{file.name}</span>
                                                        <span className={styles.fileItemSize}>{formatFileSize(file.size)}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className={styles.removeFileButton}
                                                    onClick={() => handleRemoveFile(index)}
                                                    disabled={isCompressing}
                                                >
                                                    &times;
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {hasUploadedImages && (
                            <div className={styles.optionsContainer}>
                                <h3 className={styles.optionTitle}>Compression Settings</h3>

                                <div className={styles.optionRow}>
                                    <label>
                                        Resize to (% of original):
                                        <div className={styles.sliderWithValue}>
                                            <input
                                                type="range"
                                                min="10"
                                                max="100"
                                                value={compressionSettings.resizeByPercentage}
                                                onChange={(e) => handleSettingChange('resizeByPercentage', parseInt(e.target.value))}
                                            />
                                            <span>{compressionSettings.resizeByPercentage}%</span>
                                        </div>
                                    </label>
                                </div>

                                <div className={styles.optionRow}>
                                    <label>
                                        Max Width (px):
                                        <input
                                            type="number"
                                            min="100"
                                            max="10000"
                                            value={compressionSettings.maxWidth}
                                            onChange={(e) => handleSettingChange('maxWidth', parseInt(e.target.value))}
                                        />
                                    </label>

                                    <label>
                                        Max Height (px):
                                        <input
                                            type="number"
                                            min="100"
                                            max="10000"
                                            value={compressionSettings.maxHeight}
                                            onChange={(e) => handleSettingChange('maxHeight', parseInt(e.target.value))}
                                        />
                                    </label>
                                </div>

                                <div className={styles.optionRow}>
                                    <label>
                                        Quality (0.1-1.0):
                                        <div className={styles.sliderWithValue}>
                                            <input
                                                type="range"
                                                min="0.1"
                                                max="1"
                                                step="0.05"
                                                value={compressionSettings.quality}
                                                onChange={(e) => handleSettingChange('quality', parseFloat(e.target.value))}
                                            />
                                            <span>{compressionSettings.quality}</span>
                                        </div>
                                    </label>
                                </div>

                                <div className={styles.optionRow}>
                                    <label className={styles.checkboxLabel}>
                                        <input
                                            type="checkbox"
                                            checked={compressionSettings.maintainAspectRatio}
                                            onChange={(e) => handleSettingChange('maintainAspectRatio', e.target.checked)}
                                        />
                                        Maintain aspect ratio
                                    </label>
                                </div>
                            </div>
                        )}

                        {hasUploadedImages && (
                            <div className={styles.actionButtons}>
                                <button
                                    className={`${styles.convertButton} ${!hasUploadedImages || isCompressing ? styles.buttonDisabled : ''}`}
                                    onClick={compressImages}
                                    disabled={isCompressing || !hasUploadedImages}
                                >
                                    {isCompressing ? (
                                        <>
                                            <span className={styles.spinnerIcon}></span>
                                            Compressing...
                                        </>
                                    ) : 'Compress Images'}
                                </button>

                                <button
                                    className={styles.resetButton}
                                    onClick={handleReset}
                                    disabled={isCompressing}
                                >
                                    Reset
                                </button>
                            </div>
                        )}

                        {isCompressing && progress > 0 && (
                            <div className={styles.progressContainer}>
                                <div
                                    className={styles.progressBar}
                                    style={{ width: `${progress}%` }}
                                ></div>
                                <span className={styles.progressText}>{progress}%</span>
                            </div>
                        )}

                        {status && !compressedFiles.length && (
                            <div className={styles.statusMessage}>
                                {status}
                            </div>
                        )}
                    </div>

                    {/* Right panel - Preview and device view */}
                    {hasUploadedImages && (
                        <div className={styles.rightPanel}>
                            <div className={styles.previewContainer}>
                                <h3 className={styles.previewTitle}>Preview</h3>

                                {previewImage ? (
                                    <div className={styles.previewContent}>
                                        <div className={styles.phonePreview}>
                                            <div className={styles.phoneFrame}>
                                                <div className={styles.phoneNotch}></div>
                                                <div className={styles.phoneScreen}>
                                                    {previewImage && (
                                                        <canvas
                                                            ref={canvasRef}
                                                            className={styles.previewCanvas}
                                                        ></canvas>
                                                    )}
                                                </div>
                                                <div className={styles.phoneHome}></div>
                                            </div>
                                        </div>

                                        <div className={styles.previewInfo}>
                                            <h4>{previewImage.name}</h4>
                                            <div id="previewSizeInfo" className={styles.previewSizeInfo}>
                                                Loading preview...
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.emptyPreview}>
                                        <svg viewBox="0 0 24 24" width="48" height="48">
                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                        </svg>
                                        <p>Select an image to preview</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {compressedFiles.length > 0 && (
                    <div className={styles.downloadContainer}>
                        <div className={styles.downloadHeader}>
                            <div className={styles.downloadIcon}>
                                <svg viewBox="0 0 24 24" width="48" height="48">
                                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                </svg>
                            </div>
                            <div className={styles.downloadText}>
                                <h3>Compression Complete!</h3>
                                <p>
                                    Original size: {formatFileSize(compressedFiles.reduce((sum, file) => sum + file.original.size, 0))}<br />
                                    Compressed size: {formatFileSize(compressedFiles.reduce((sum, file) => sum + file.compressed.size, 0))}<br />
                                    Total saved: {formatFileSize(totalSizeSaved)} ({((totalSizeSaved / compressedFiles.reduce((sum, file) => sum + file.original.size, 0)) * 100).toFixed(1)}%)
                                </p>
                            </div>
                        </div>

                        <div className={styles.compressionResults}>
                            {compressedFiles.map((file, index) => (
                                <div key={index} className={styles.compressionResult}>
                                    <div className={styles.resultDetails}>
                                        <div className={styles.resultName}>{file.original.name}</div>
                                        <div className={styles.resultStats}>
                                            <span>Original: {formatFileSize(file.original.size)} ({file.original.width}x{file.original.height})</span>
                                            <span>Compressed: {formatFileSize(file.compressed.size)} ({Math.round(file.compressed.width)}x{Math.round(file.compressed.height)})</span>
                                            <span>Saved: {file.compressed.compressionRatio}%</span>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.downloadItemButton}
                                        onClick={() => handleDownload(file)}
                                    >
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            className={styles.downloadAllButton}
                            onClick={handleDownloadAll}
                        >
                            Download All
                        </button>
                    </div>
                )}
            </div>               <Footer language={language} />
        </>

    );
}

export default ImageCompression;