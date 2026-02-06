import type { CaseItem } from '../types';
import Case from './Case';
import { casesBd } from '../bd/cases';


const commonCases = casesBd.filter((caseItem: CaseItem) => caseItem.pool === 'Active');
const rareCases = casesBd.filter((caseItem: CaseItem) => caseItem.pool === 'Rare');

export default function Weekly() {
    return (
        <>
            <h1 className="text-white text-center text-6xl pb-10">Weekly Drops</h1>

            <div className="pb-10">
                <div>
                    <h1 className="text-white text-center text-4xl pb-10">Cajas</h1>
                    <div>
                        <h2 className='text-white text-center text-2xl pb-10'>Common pool (~99% prob. total)</h2>
                        <div className='flex pb-30 text-white justify-between gap-4 overflow-x-auto mr-30 ml-30'>
                            {commonCases.map((caseItem: CaseItem) => (
                                <Case key={caseItem.name} caseItem={caseItem} />
                            ))}
                        </div>

                    </div>

                    <div>
                        <h2 className='text-white text-center text-2xl pb-10'>Rare pool (~1% prob. total)</h2>
                        <div className='flex pb-30 text-white justify-between gap-4 overflow-x-auto mr-30 ml-30'>
                            {rareCases.map((caseItem: CaseItem) => (
                                <Case key={caseItem.name} caseItem={caseItem} />
                            ))}
                        </div>
                    </div>


                    <div className="flex">





                    </div>
                </div>

                <div>
                    <h1>Skins</h1>

                    <div>

                    </div>
                </div>

                <div>
                    <h1>Graffitis</h1>

                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}