import type { CaseItem } from '../types';
import Case from './Case';
import { casesBd } from '../bd/cases';
import Skin from './Skin';
import { skinsBd } from '../bd/weapons';
import { graffitiBd } from '../bd/graffitis';
import Graffiti from './Graffiti';


const commonCases = casesBd.filter((caseItem: CaseItem) => caseItem.pool === 'Active').sort((a, b) => b.current_price - a.current_price);
const rareCases = casesBd.filter((caseItem: CaseItem) => caseItem.pool === 'Rare').sort((a, b) => b.current_price - a.current_price);
const skinsBdSorted = skinsBd.sort((a, b) => b.current_price - a.current_price);
const graffitiBdSorted = graffitiBd.sort((a, b) => b.current_price - a.current_price);

export default function Weekly() {
    return (
        <>
            <h1 className="text-white text-center text-6xl pb-10">Weekly Drops</h1>

            <div className="pb-10">
                <div>
                    <h1 className="text-white text-center text-4xl pb-10">Cajas</h1>
                    <div>
                        <h2 className='text-white text-center text-2xl pb-10'>Common pool (~99% prob. total)</h2>
                        <div className='grid grid-cols-5 pb-30 text-white gap-4 justify-items-center items-center mx-auto mr-50 ml-50'>
                            {commonCases.map((caseItem: CaseItem) => (
                                <Case key={caseItem.name} caseItem={caseItem} />
                            ))}
                        </div>

                    </div>

                    <div>
                        <h2 className='text-white text-center text-2xl pb-10'>Rare pool (~1% prob. total)</h2>
                        <div className='grid grid-cols-5 pb-30 text-white gap-4 justify-items-center items-center mx-auto mr-50 ml-50'>
                            {rareCases.map((caseItem: CaseItem) => (
                                <Case key={caseItem.name} caseItem={caseItem} />
                            ))}
                        </div>
                    </div>

                </div>

                <div className='pb-10'>
                    <h1 className="text-white text-center text-6xl pb-3">Skins</h1>
                    <p className="text-white text-center text-3xl pb-3">(Más de 1€)</p>
                    <p className="text-white text-center text-3xl pb-10">Todos los precios son de calidad Minimal wear</p>

                    <div className='grid grid-cols-5 pb-30 text-white gap-4 justify-items-center items-center mx-auto mr-50 ml-50'>
                        {skinsBdSorted.map((skinItem) => (
                            <Skin key={skinItem.name} skinItem={skinItem} />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-white text-center text-6xl pb-3">Graffitis</h1>
                    <p className="text-white text-center text-3xl pb-10">(Más de 0.25€)</p>

                    <div className='grid grid-cols-5 pb-30 text-white gap-4 justify-items-center items-center mx-auto mr-50 ml-50'>
                        {graffitiBdSorted.map((graffitiItem) => (
                            <Graffiti key={graffitiItem.name} graffitiItem={graffitiItem} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}