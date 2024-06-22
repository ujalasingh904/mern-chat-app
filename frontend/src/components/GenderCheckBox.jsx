import React from 'react'

const GenderCheckBox = ({ formData, setformData }) => {
	const handleFemale = (e) => {
		setformData({ ...formData, gender: 'female' })
	}
	const handleMale = (e) => {
		setformData({ ...formData, gender: 'male' })
	}
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-white'>Male</span>
					<input 
						onChange={handleMale}
						type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer `}>
					<span className='label-text text-white'>Female</span>
					<input 
						onClick={handleFemale}
						type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
		</div>
	)
}

export default GenderCheckBox