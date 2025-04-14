"use server";
import axios from "axios";

interface actionResponse {
    success: boolean,
    message: string,
    data?: JSON | object,
    error?: string
}

export interface packageInterface {
    _id: string,
    title: string,
    purpose: string,
    category: number,
    labels: string[],
    makkahNights: number,
    madinahNights: number,
    price: number,
    makkahHotel: {name: string},
    madinahHotel: {name: string},
    inclusions: string[],
    exclusions: string[],
    accomType: string,
}

export interface packagesActionResponse extends actionResponse {
    data?: {
        packages: Array<packageInterface>,
        category: string
    },
}

export async function getPackages( {category= 'all'}: { category:'all' | 'Popular' | 'Economy' } ) : Promise<packagesActionResponse> {
    // Fetch packages from the backend API
    try {
        const response = await axios.get(`/packages/${category}`, {baseURL: process.env.BACKEND_URL});
        return {
            success: true,
            message: "Packages fetched successfully",
            data: response.data
        }
    } catch (error: Error | unknown) {
        console.error("Error fetching packages:", error);
        return {
            success: false,
            message: "Error fetching packages",
            error: error instanceof Error ? error.message : "Unknown error"
        }
    }
}