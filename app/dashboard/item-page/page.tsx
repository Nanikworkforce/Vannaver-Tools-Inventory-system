import { Card } from "@/components/ui/card"

export default function ItemPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tool Inventory</h1>
      </div>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-[150px_1fr_80px_80px_80px_80px] text-white">
          {/* Header row */}
          <div className="p-5 font-medium bg-gray-800 border-r-2 border-white">Name of Tool</div>
          <div className="p-5 font-medium bg-gray-800 border-r-2 border-white">Parts</div>
          <div className="p-5 font-medium bg-gray-800 border-r-2 border-white">Stock Count</div>
          <div className="p-5 font-medium bg-gray-800 border-r-2 border-white">Circle Count</div>
          <div className="p-5 font-medium bg-gray-800 border-r-2 border-white">Lead time</div>
          <div className="p-5 font-medium bg-gray-800">% to trigger</div>
          
          <div className="p-1 bg-white"></div>
          <div className="p-1 bg-white"></div>
          <div className="p-1 bg-white"></div>
          <div className="p-1 bg-white"></div>
          <div className="p-1 bg-white"></div>
          <div className="p-3 bg-white"></div>

          {/* Parts header subrow */}
          <div className="p-3 font-medium border-r border-white-600 bg-gray-800 text-white"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-800 text-white">
            <div className="p-2 font-medium border-r border-white-600">Part Name</div>
            <div className="p-2 font-medium border-r border-white-600">Part Number</div>
            <div className="p-2 font-medium border-r border-white-600">OD</div>
            <div className="p-2 font-medium border-r border-white-600">ID</div>
            <div className="p-2 font-medium border-r border-white-600">Length</div>
            <div className="p-2 font-medium border-r border-white-600">Box End</div>
            <div className="p-2 font-medium border-r border-white-600">Pin End</div>
            <div className="p-2 font-medium">ID Thread</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-800 text-white">
            <div className="p-2 font-medium border-b border-gray-600">IN</div>
            <div className="p-2 font-medium">OUT</div>
          </div>
          <div className="p-3 font-medium bg-gray-800 text-white"></div>
          <div className="p-3 font-medium bg-gray-800 text-white"></div>
          <div className="p-3 font-medium bg-gray-800 text-white"></div>
          
          {/* Data row 1 */}
          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">2-7/8 Top Connection</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842001</div>
            <div className="p-2 border-r border-gray-500 font-medium">4.5"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">8"</div>
            <div className="p-2 border-r border-gray-500 font-medium">11</div>
            <div className="p-2 border-r border-gray-500 font-medium">2200</div>
            <div className="p-2 font-medium">450</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">10</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">20%</div>
          
          {/* Data row 2 */}
          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">Outer Housing</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842002</div>
            <div className="p-2 border-r border-gray-500 font-medium">4.5"</div>
            <div className="p-2 border-r border-gray-500 font-medium">11.6#"</div>
            <div className="p-2 border-r border-gray-500 font-medium">30'</div>
            <div className="p-2 border-r border-gray-500 font-medium">12</div>
            <div className="p-2 border-r border-gray-500 font-medium">2400</div>
            <div className="p-2 font-medium">550</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">4</div>
            <div className="p-2 font-medium">1</div>
          </div>

          <div className="p-3 bg-gray-300 text-black font-medium">3</div>
          <div className="p-3 bg-gray-300 text-black font-medium">24h</div>
          <div className="p-3 bg-gray-300 text-black font-medium">20%</div>
          <div className="p-3 bg-gray-800 text-white border-r border-white-600">Fatman 4 1/5</div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">2-3/8 Lower Descender Housing</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842003</div>
            <div className="p-2 border-r border-gray-500 font-medium">4.5"</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.438"</div>
            <div className="p-2 border-r border-gray-500 font-medium">26'</div>
            <div className="p-2 border-r border-gray-500 font-medium">13</div>
            <div className="p-2 border-r border-gray-500 font-medium">2600</div>
            <div className="p-2 font-medium">650</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">4</div>
            <div className="p-2 font-medium">4</div>
          </div>

          <div className="p-3 bg-gray-300 text-black font-medium">9</div>
          <div className="p-3 bg-gray-300 text-black font-medium">4Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">23%</div>
          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">1" Schedule 80 Stainless Steel</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842004</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">26'</div>
            <div className="p-2 border-r border-gray-500 font-medium">14</div>
            <div className="p-2 border-r border-gray-500 font-medium">2800</div>
            <div className="p-2 font-medium">750</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">4</div>
            <div className="p-2 font-medium">1</div>
          </div>

          <div className="p-3 bg-gray-300 text-black font-medium">3</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">30%</div>
          <div className="p-3 bg-gray-800 text-white border-r border-white-600">Fatman 4 1/5</div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">Spiral Degasser SAMSS</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842004</div>
            <div className="p-2 border-r border-gray-500 font-medium">3.85"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">9'</div>
            <div className="p-2 border-r border-gray-500 font-medium">15</div>
            <div className="p-2 border-r border-gray-500 font-medium">3000</div>
            <div className="p-2 font-medium">850</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">14</div>
            <div className="p-2 font-medium">10</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">10</div>
          <div className="p-3 bg-gray-300 text-black font-medium">5 Days</div>
          <div className="p-3 bg-gray-300 text-black font-medium">20%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">1" Schedule 80 Stainless Steel</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842005</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">20"</div>
            <div className="p-2 border-r border-gray-500 font-medium">16</div>
            <div className="p-2 border-r border-gray-500 font-medium">3200</div>
            <div className="p-2 font-medium">950</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">10</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">20%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">1" Schedule 80 Stainless Steel</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842007</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">86"</div>
            <div className="p-2 border-r border-gray-500 font-medium">16</div>
            <div className="p-2 border-r border-gray-500 font-medium">3400</div>
            <div className="p-2 font-medium">1050</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">10</div>
            <div className="p-2 font-medium">8</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">5Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">40%</div>
          
          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">Desander Spiral</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842008</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.4"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">6.125"</div>
            <div className="p-2 border-r border-gray-500 font-medium">18</div>
            <div className="p-2 border-r border-gray-500 font-medium">3600</div>
            <div className="p-2 font-medium">950</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">6</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">25%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600">Fatman 4 1/5</div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">Funnel</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842009</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.75"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1.25"</div>
            <div className="p-2 border-r border-gray-500 font-medium">6.125"</div>
            <div className="p-2 border-r border-gray-500 font-medium">8"</div>
            <div className="p-2 border-r border-gray-500 font-medium">3800</div>
            <div className="p-2 font-medium">1250</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">6</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">25%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">NPT API Steel Coupling</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842010</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.4"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1</div>
            <div className="p-2 border-r border-gray-500 font-medium">3800</div>
            <div className="p-2 font-medium">1350</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">6</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">25%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">NPT API Steel Coupling</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842011</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.4"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1</div>
            <div className="p-2 border-r border-gray-500 font-medium">4000</div>
            <div className="p-2 font-medium">1450</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">6</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">25%</div>

          <div className="p-3 bg-gray-800 text-white border-r border-white-600"></div>
          <div className="grid grid-cols-[repeat(8,1fr)] bg-gray-300 text-black">
            <div className="p-2 border-r border-gray-500 font-medium">NPT API Steel Coupling</div>
            <div className="p-2 border-r border-gray-500 font-medium">FM27842012</div>
            <div className="p-2 border-r border-gray-500 font-medium">2.4"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1"</div>
            <div className="p-2 border-r border-gray-500 font-medium">1</div>
            <div className="p-2 border-r border-gray-500 font-medium">4200</div>
            <div className="p-2 font-medium">1650</div>
          </div>
          <div className="grid grid-cols-1 bg-gray-300 text-black">
            <div className="p-2 border-b border-gray-500 font-medium">6</div>
            <div className="p-2 font-medium">2</div>
          </div>
          <div className="p-3 bg-gray-300 text-black font-medium">6</div>
          <div className="p-3 bg-gray-300 text-black font-medium">2Months</div>
          <div className="p-3 bg-gray-300 text-black font-medium">25%</div>
        </div>
      </Card>
    </div>
  )
}