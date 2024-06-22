import React from 'react'

const GenderCheckBox = ({ formData, setformData }) => {
	const handleGender = (e,genderValue) => {
		setformData({ ...formData, [e.target.id]: genderValue })
	}
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${formData.gender==="male" ? "selected":""}`}>
					<span className='label-text text-white'>Male</span>
					<input
					    id='gender'
						checked={formData.gender === "male"}
						onChange={(e)=>handleGender(e,'male')}
						type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${formData.gender==="female" ? "selected":""}`}>
					<span className='label-text text-white'>Female</span>
					<input
					    id='gender'
						checked={formData.gender === "female"}
						onChange={(e)=>handleGender(e,'female')}
						type='checkbox' className='checkbox border-slate-900' />
				</label>
			</div>
		</div>
	)
}

export default GenderCheckBox