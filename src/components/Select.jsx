import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    // The useId() hook is used to generate a unique id for the <select> element and the <label> element. This ensures that the label and select box are properly associated.
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)