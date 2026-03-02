import type { SkinItem } from '../types';

export default function Skin({ skinItem }: { skinItem: SkinItem }) {
    return (
        <div key={skinItem.name} className="flex flex-col items-center justify-between h-full mb-4 text-center bg-[#1c1d21] p-4 rounded-lg w-48 flex-shrink-0">
            <img src={skinItem.image_url} alt={skinItem.name} className="w-36 h-36 mx-auto object-contain" />
            <div>
                <h3 className="text-white text-lg">{skinItem.name}</h3>
                <p className="text-gray-400">{skinItem.collection}</p>
                <p className="text-gray-400">Price: ${skinItem.current_price.toFixed(2)}</p>
                <p className="text-gray-400">Drop Chance: {skinItem.drop_chance_percentage}%</p>
            </div>
        </div>
    )
}