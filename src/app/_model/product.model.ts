import { FileHandle } from "./file-handel.model";

export interface Product
{
    productId: any,
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]
}