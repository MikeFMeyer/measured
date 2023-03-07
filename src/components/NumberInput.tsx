export default function NumberInput({label, placeholder = '', handleInput, helpText = null}) {
  return (
    <div>
      <label htmlFor="numberInput" className="block text-lg font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="number"
          onChange={handleInput}
          name="numberInput"
          id="numberInput"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      {helpText && 
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        {helpText}
      </p>}
    </div>
  )
}
