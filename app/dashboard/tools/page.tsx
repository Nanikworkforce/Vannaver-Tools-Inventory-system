import React from "react"
import Link from "next/link"

const ToolsPage = () => {
  return (
    <div className="p-6">
      <div className="mt-24">
        {/* Header */}
        <div className="p-4 text-2xl font-bold text-black text-center mb-4">
          Inventory Tools
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/dashboard/open">
              <div className="bg-gray-800/80 text-white p-6 rounded text-lg cursor-pointer hover:bg-gray-700/80 transition-colors">
                4 - ½ Fat Man
              </div>
            </Link>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              HiMars ESP w/Fatman ESP Desander
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              2-3/8" Thorman
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              Backflushable Valve
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              4 - ½ Fat Man 239
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              HiMars RP w/Fatman ESP Desander
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              5" Fat Man KI
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              Operation Sandstone
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              MK 45
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              C-RAM 4-1/2" 13 CR
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              3" Fat Man KI
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              Fatman ESP Desander
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              C-RAM 4"
            </div>
            <div className="bg-gray-800/80 text-white p-6 rounded text-lg">
              Little Boy 4-1/2"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsPage 