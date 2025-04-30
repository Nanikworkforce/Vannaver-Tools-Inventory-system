"use client"

import React, { useState } from "react"

const NewPage = () => {
  const [locationInputTypes, setLocationInputTypes] = useState(['select', 'select', 'select']) // One for each row

  const handleLocationChange = (index: number, value: string) => {
    const newInputTypes = [...locationInputTypes]
    newInputTypes[index] = value === 'manual' ? 'text' : 'select'
    setLocationInputTypes(newInputTypes)
  }

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
                <th className="p-3 text-left border-r border-gray-300">4-1/2" FM 239</th>
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
                <td className="p-3 text-white bg-gray-800/80 border-r border-gray-300" rowSpan={14}>4-1/2"<br/>FM<br/>239</td>
                <td className="p-2 border-r border-gray-300">2-7/8" x 3-1/2" Top Connecti</td>
                <td className="p-2 border-r border-gray-300">3.5"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">7.5"</td>
                <td className="p-2 border-r border-gray-300">FM01</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">4-1/2" Top Bypass Connectic</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">2.5"</td>
                <td className="p-2 border-r border-gray-300">6.5"</td>
                <td className="p-2 border-r border-gray-300">FM02</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
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
                <td className="p-2 border-r border-gray-300">xxx</td>
                <td className="p-2 border-r border-gray-300">FM03</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">4-1/2" Outer Housing</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">11.6#</td>
                <td className="p-2 border-r border-gray-300">30"</td>
                <td className="p-2 border-r border-gray-300">FM04</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">Spiral Degasser SAMSS 3.85</td>
                <td className="p-2 border-r border-gray-300">3.85"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">xxx</td>
                <td className="p-2 border-r border-gray-300">FM05</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">1" Schedule 80 Stainless Steel</td>
                <td className="p-2 border-r border-gray-300">1.315"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">xxx</td>
                <td className="p-2 border-r border-gray-300">FM06</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">Desander Spiral</td>
                <td className="p-2 border-r border-gray-300">2.4"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">6.125"</td>
                <td className="p-2 border-r border-gray-300">FM07</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">4-1/2" x 2-7/8 Lower Desand</td>
                <td className="p-2 border-r border-gray-300">4.5"</td>
                <td className="p-2 border-r border-gray-300">2.438"</td>
                <td className="p-2 border-r border-gray-300">26"</td>
                <td className="p-2 border-r border-gray-300">FM08</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">Funnel</td>
                <td className="p-2 border-r border-gray-300">2.75"</td>
                <td className="p-2 border-r border-gray-300">1.25"</td>
                <td className="p-2 border-r border-gray-300">8"</td>
                <td className="p-2 border-r border-gray-300">FM09</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">NPT API Steel Coupling</td>
                <td className="p-2 border-r border-gray-300">1.5"</td>
                <td className="p-2 border-r border-gray-300">1"</td>
                <td className="p-2 border-r border-gray-300">2"</td>
                <td className="p-2 border-r border-gray-300">FM10</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border-r border-gray-300">3-1/2 Window</td>
                <td className="p-2 border-r border-gray-300">3.5"</td>
                <td className="p-2 border-r border-gray-300">2.5"</td>
                <td className="p-2 border-r border-gray-300">15"</td>
                <td className="p-2 border-r border-gray-300">FM11</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2">
                  <input type="text" className="w-full p-1 border rounded" />
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2 border-r border-gray-300">3-1/2 Window</td>
                <td className="p-2 border-r border-gray-300">3.5"</td>
                <td className="p-2 border-r border-gray-300">2.5"</td>
                <td className="p-2 border-r border-gray-300">15"</td>
                <td className="p-2 border-r border-gray-300">FM13</td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
                </td>
                <td className="p-2 border-r border-gray-300">
                  <input type="datetime-local" className="w-full p-1 border rounded" />
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
                  <th className="p-3 text-left">Location Shipped</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800/80 text-white">
                  <td className="p-3 border-r border-gray-300" rowSpan={4}>4-1/2"<br/>FM<br/>239</td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2 border-r border-gray-300"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2">
                    {locationInputTypes[0] === 'select' ? (
                      <select 
                        className="w-full p-1 border rounded"
                        onChange={(e) => handleLocationChange(0, e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="midland">Midland Texas</option>
                        <option value="williston">Williston North Dakota</option>
                        <option value="minot">Minot North Dakota</option>
                        <option value="south-texas">South Texas</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="manual">Other (Manual Input)</option>
                      </select>
                    ) : (
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter location"
                          className="w-full p-1 border rounded" 
                        />
                        <button 
                          onClick={() => handleLocationChange(0, 'select')}
                          className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                        >
                          ←
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2">
                    {locationInputTypes[1] === 'select' ? (
                      <select 
                        className="w-full p-1 border rounded"
                        onChange={(e) => handleLocationChange(1, e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="midland">Midland Texas</option>
                        <option value="williston">Williston North Dakota</option>
                        <option value="minot">Minot North Dakota</option>
                        <option value="south-texas">South Texas</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="manual">Other (Manual Input)</option>
                      </select>
                    ) : (
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter location"
                          className="w-full p-1 border rounded" 
                        />
                        <button 
                          onClick={() => handleLocationChange(1, 'select')}
                          className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                        >
                          ←
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2 border-r border-gray-300">
                    <input type="datetime-local" className="w-full p-1 border rounded" />
                  </td>
                  <td className="p-2">
                    {locationInputTypes[2] === 'select' ? (
                      <select 
                        className="w-full p-1 border rounded"
                        onChange={(e) => handleLocationChange(2, e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="midland">Midland Texas</option>
                        <option value="williston">Williston North Dakota</option>
                        <option value="minot">Minot North Dakota</option>
                        <option value="south-texas">South Texas</option>
                        <option value="oklahoma">Oklahoma</option>
                        <option value="manual">Other (Manual Input)</option>
                      </select>
                    ) : (
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter location"
                          className="w-full p-1 border rounded" 
                        />
                        <button 
                          onClick={() => handleLocationChange(2, 'select')}
                          className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                        >
                          ←
                        </button>
                      </div>
                    )}
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

export default NewPage
