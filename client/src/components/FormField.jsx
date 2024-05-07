import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {/* specify the id of the form field the label should be bound to  */}
        <lable for={name} className="block text-sm font-medium text-gray-900">{labelName}</lable>

      </div>
      <input
        type={type}
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
    />
      
    </div>
  )
}

export default FormField
