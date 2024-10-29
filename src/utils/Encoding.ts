import type { Base64Encodable } from '../definitions';

export default class Encoding {
  static blobToDataURL(blob: Blob): Promise<string> {
    const reader = new FileReader();

    return new Promise<string>((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  static async blobToBase64(blob: Blob): Promise<string> {
    const dataURL = await Encoding.blobToDataURL(blob);
    return dataURL.split(',')[1];
  }

  static bufferToBase64(buffer: BufferSource): Promise<string> {
    return Encoding.blobToBase64(new Blob([buffer]));
  }

  static toURL(url: string): URL | null {
    try {
      return new URL(url);
    } catch {
      return null;
    }
  }

  static async fetchUrlToBase64(url: string): Promise<string | null> {
    const urlObject = Encoding.toURL(url);

    if (urlObject === null) return null;
    if (urlObject.protocol === 'data:') return urlObject.href.split(',')[1] ?? null;
    if (urlObject.protocol !== 'http:' && urlObject.protocol !== 'https:') return null;

    return fetch(urlObject)
      .then((e) => e.blob())
      .then(Encoding.blobToBase64);
  }

  static async toBase64(data: Base64Encodable): Promise<string> {
    if (typeof data === 'string') {
      // Case 1: URL or Data URL
      const base64 = await Encoding.fetchUrlToBase64(data);
      if (base64 !== null) return base64;

      // Case 2: Base64
      return data;
    }

    if (data instanceof Blob) {
      // Case 3: Blob
      return await Encoding.blobToBase64(data);
    }

    if (data instanceof Array) {
      // Case 4: Number Array
      return await Encoding.bufferToBase64(new Uint8Array(data));
    }

    // Case 5: Buffer
    return await Encoding.bufferToBase64(data);
  }
}
