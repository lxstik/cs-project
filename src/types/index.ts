export type CaseItem = {
    id: number;
    name: string;
    pool: string;
    drop_chance_percentage: number;
    current_price: number;
    image_url: string;
}

export type SkinItem = {
    id: number;
    name: string;
    collection: string;
    drop_chance_percentage: number;
    current_price: number;
    image_url: string;
}

export type GraffitiItem = {
    id: number;
    name: string;
    type: string;
    drop_chance_percentage: number;
    current_price: number;
    image_url: string;
}