import type { GraffitiItem} from "../types"

export default function Graffiti({ graffitiItem }: { graffitiItem: GraffitiItem }) {
    return (
        <div key={graffitiItem.name} className="flex flex-col items-center justify-between h-full mb-4 text-center bg-[#1c1d21] p-4 rounded-lg w-48 flex-shrink-0">
            <img src={graffitiItem.image_url} alt={graffitiItem.name} className="w-36 h-36 mx-auto object-contain" />
            <div>
                <h3 className="text-white text-lg">{graffitiItem.name}</h3>
                <p className="text-gray-400">{graffitiItem.type}</p>
                <p className="text-gray-400">Price: ${graffitiItem.current_price.toFixed(2)}</p>
                <p className="text-gray-400">Drop Chance: {graffitiItem.drop_chance_percentage}%</p>
            </div>
        </div>
    )
}