import { useState, useEffect } from 'react'
import { isPlatform } from '@ionic/react'

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from '@capacitor/storage'
import { Capacitor } from '@capacitor/core'
import { render } from '@testing-library/react'
import { captureRejectionSymbol } from 'events'

const PHOTO_STORAGE = "photos";

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}

export function usePhotoGallery() {
    // define a state variable to store the array of each photo captured with the Camera
    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    const takePhoto = async () => {
        const fileName = new Date().getTime() + ".jpge";

        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });

        const savedFileImage = await savePicture(cameraPhoto, fileName);

        const newPhotos = [savedFileImage, ...photos];

        setPhotos(newPhotos);
        Storage.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
    };

    const savePicture = async (photo: Photo, fileName: string) => {
        const base64Data = await base64FromPath(photo.webPath!);
        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Data
        });

        return {
            filepath: fileName,
            webviewPath: photo.webPath
        }
    }

    return { photos, takePhoto }
}

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject("method did not return a string")
            }
        };
        reader.readAsDataURL(blob);
    });
}

