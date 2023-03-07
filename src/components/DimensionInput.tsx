export default function DimensionInput({label, handleInputHeight, handleInputWidth, vertical, horizontal}) {
  return (
    <div className="mt-10">
      <label htmlFor="dimensionInput" className="block text-lg font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="flex items-center">
      {horizontal && 
      <div className="relative mt-2 rounded-md shadow-sm">
	<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
	  <span className="text-gray-500 sm:text-sm">H</span>
	</div>
	<input onChange={handleInputHeight} type="number" name="height" id="height" className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigi-600 sm:text-sm sm:leading-6" />
      </div>}
      {vertical && horizontal && <span className="text-lg mx-2">x</span>}
      {vertical && <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">W</span>
        </div>
        <input
          type="number"
          name="width"
          onChange={handleInputWidth}
          id="width"
          className="block w-full rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>}
      </div>
    </div>
  )
}
