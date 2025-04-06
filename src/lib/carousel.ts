// src/lib/carousel-images.ts
import fs from 'fs/promises'; // Use promises for async operations
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

// Define the path to the carousel directory relative to the project root
const carouselDirectory = path.join(process.cwd(), 'public/carousel');
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

export interface CarouselImageData {
    src: string;       // URL path (e.g., /carousel/image.jpg)
    width: number;
    height: number;
    base64: string;    // blurDataURL
    // Add other plaiceholder data if needed (e.g., plaiceholder.color)
}

// Cache for the image data
let _imageDataCache: CarouselImageData[] | null = null;

/**
 * Reads images from public/carousel, generates metadata (dimensions, blurhash)
 * using plaiceholder, and caches the result.
 * Intended to be called from Server Components or during build.
 */
export async function getCarouselImagesWithMetadata(): Promise<CarouselImageData[]> {
    // Return cached data if available
    if (_imageDataCache !== null) {
        // console.log("Returning cached image metadata."); // Optional: for debugging
        return _imageDataCache;
    }

    console.log("Generating carousel image metadata..."); // Log when it runs

    try {
        const filenames = await fs.readdir(carouselDirectory);

        const imageFiles = filenames.filter(filename =>
            allowedExtensions.includes(path.extname(filename).toLowerCase())
        ).sort(); // Ensure consistent order

        if (imageFiles.length === 0) {
            console.warn(`[getCarouselImages] No image files found in ${carouselDirectory}`);
            _imageDataCache = [];
            return [];
        }

        const processedImages = await Promise.all(
            imageFiles.map(async (filename): Promise<CarouselImageData | null> => {
                const filePath = path.join(carouselDirectory, filename);
                const urlPath = `/carousel/${filename}`; // Public URL path

                try {
                    const fileBuffer = await fs.readFile(filePath);

                    const { base64, metadata: { height, width } } = await getPlaiceholder(
                        fileBuffer,
                        { size: 10 } // Plaiceholder option for small preview size
                    );

                    return {
                        src: urlPath,
                        width,
                        height,
                        base64, // This is the blurDataURL
                    };
                } catch (err) {
                    console.error(`[getCarouselImages] Failed to process image ${filename}:`, err);
                    return null; // Skip images that fail processing
                }
            })
        );

        // Filter out any null results from failed processing
        const validImages = processedImages.filter(img => img !== null);

        console.log(`Generated metadata for ${validImages.length} carousel images.`);
        _imageDataCache = validImages; // Cache the result
        return validImages;

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
            console.warn(`[getCarouselImages] Directory not found: ${carouselDirectory}`);
        } else {
            console.error(`[getCarouselImages] Error reading directory or processing images:`, error);
        }
        _imageDataCache = []; // Cache empty array on error
        return [];
    }
}