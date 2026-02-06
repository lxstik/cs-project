import type { CaseItem } from '../types';

export default function Case({ caseItem }: { caseItem: CaseItem }) {
    return (
        <div key={caseItem.name} className="items-center mb-4 text-center bg-[#1c1d21] p-4 rounded-lg w-48 flex-shrink-0">
            <img src={caseItem.image_url} alt={caseItem.name} className="w-36 h-30 mx-auto" />
            <div>
                <h3 className="text-white text-lg">{caseItem.name}</h3>
                <p className="text-gray-400">Price: ${caseItem.current_price.toFixed(2)}</p>
                <p className="text-gray-400">Drop Chance: {caseItem.drop_chance_percentage}%</p>
            </div>
        </div>
    )
}