export default function Navbar() {

  return (
    <>
        <div className="flex justify-between items-center p-4 bg-[#1c1d21] text-white">
            <div className="flex">
                <h1 className="mx-4 text-4xl">Cajas</h1>
                <h1 className="mx-4 text-4xl">Skins</h1>
                <h1 className="mx-4 text-4xl">Semanales</h1>
            </div>

            <div>
                <h1 className="mx-4 text-3xl">Usuario</h1>
            </div>
        </div>
    </>
  )
}
