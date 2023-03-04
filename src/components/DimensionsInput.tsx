export default function DimensionsInput({label, placeholder = '', handleInput, lead=null, tail=null}) {
  return (
    <div>
      <label htmlFor="dimensionInput" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {lead && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{lead}</span>
        </div>}
        <input
          type="number"
          name="dimensionInput"
          onChange={handleInput}
          id="dimensionInput"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        {tail && <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{tail}</span>
        </div>}
      </div>
    </div>
  )
}