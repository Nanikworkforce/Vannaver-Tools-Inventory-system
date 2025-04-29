import React from "react"

const OpenPage = () => {
  return (
    <div className="p-6">
      <div className="mt-24 min-w-[1600px] overflow-x-auto">
        {/* Header */}
        <div className="bg-gray-800/80 text-white p-4 text-lg font-bold text-center">
          Inventory Monitoring
        </div>

        {/* Table Container */}
        <div className="bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left w-24 border-r border-gray-300"></th>
                <th className="p-3 text-left border-r border-gray-300"></th>
                <th className="p-3 text-left border-r border-gray-300">OD</th>
                <th className="p-3 text-left border-r border-gray-300">ID</th>
                <th className="p-3 text-left border-r border-gray-300">Length</th>
                <th className="p-3 text-left border-r border-gray-300">Part #</th>
                <th className="p-3 text-left border-r border-gray-300">Count In<br/>(date & time stamps)</th>
                <th className="p-3 text-left border-r border-gray-300">Count Out<br/>(date & time stamps)</th>
                <th className="p-3 text-left border-r border-gray-300">Circle Count<br/>(date & time stamps)</th>
                <th className="p-3 text-left border-r border-gray-300">Lead Time</th>
                <th className="p-3 text-left">% to Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-white bg-gray-800/80 border-r border-gray-300" rowSpan={9}>4 - ½<br/>Fat<br/>Man</td>
                <td className="p-2 border-r border-gray-300">2-7/8" x 4-1/4 Top Connection</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">8"</td>
                <td className="p-2 border-r border-gray-300">FM01</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">4-1/2" Outer housing</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">11.6#</td>
                <td className="p-2 border-r border-gray-300">30"</td>
                <td className="p-2 border-r border-gray-300">FM02</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">1" Schedule 80 Stainless Steel</td>
                <td className="p-2 border-r border-gray-300">3.315"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">26"</td>
                <td className="p-2 border-r border-gray-300">FM03</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">Spiral Desander SAMSS 3 SS</td>
                <td className="p-2 border-r border-gray-300">3.55"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">9"</td>
                <td className="p-2 border-r border-gray-300">FM04</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">1" Schedule 80 Stainless Steel</td>
                <td className="p-2 border-r border-gray-300">1.315"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">XXX</td>
                <td className="p-2 border-r border-gray-300">FM05</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">Desander Spiral</td>
                <td className="p-2 border-r border-gray-300">2.4"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">6.125"</td>
                <td className="p-2 border-r border-gray-300">FM06</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">4-1/2" x 2-7/8 Lower Desander</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">2.433"</td>
                <td className="p-2 border-r border-gray-300">26"</td>
                <td className="p-2 border-r border-gray-300">FM07</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">Funnel</td>
                <td className="p-2 border-r border-gray-300">2.75"</td>
                <td className="p-2 border-r border-gray-300">1.25"</td>
                <td className="p-2 border-r border-gray-300">8"</td>
                <td className="p-2 border-r border-gray-300">FM08</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">NPT API Steel Coupling</td>
                <td className="p-2 border-r border-gray-300">1.5</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">2</td>
                <td className="p-2 border-r border-gray-300">FM09</td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input 
                    type="datetime-local" 
                    className="w-full p-1 border rounded" 
                  />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tool Monitoring Section */}
        <div className="mt-8">
          <div className="bg-gray-800/80 text-white p-4 text-lg font-semibold text-center">
            Tool monitoring
          </div>
          <div className="h-[1px] bg-white"></div>
          <div className="bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800/80 text-white">
                  <th className="p-3 text-left w-24 border-r border-gray-300"></th>
                  <th className="p-3 text-left border-r border-gray-300">Date<br/>(Date & time stamp)</th>
                  <th className="p-3 text-left border-r border-gray-300">Total tool (in)<br/>Count of Tools<br/>(Date & time stamp)</th>
                  <th className="p-3 text-left border-r border-gray-300">Total Count (Out)<br/>Count of Tools<br/>(Date & time stamp)</th>
                  <th className="p-3 text-left border-r border-gray-300">Total on hand<br/>Count of Tools<br/>(Date & time stamp)</th>
                  <th className="p-3 text-left">Location Shipped<br/>(Date & time stamp)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800/80 text-white">
                  <td className="p-3 border-r border-gray-300" rowSpan={4}>4 - ½<br/>Fat<br/>Man</td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                  <td className="p-2">
                    <input 
                      type="datetime-local" 
                      className="w-full p-1 border rounded" 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenPage 