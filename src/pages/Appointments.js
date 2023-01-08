import React, { useEffect } from 'react'
import { setToggle } from '../features/navSlice'
import { useDispatch, useSelector } from 'react-redux'

const Appointments = () => {
	const dispatch = useDispatch()

	const toggle = useSelector((state) => state.Toggle.toggle.value)

	useEffect(() => {
		dispatch(setToggle({ value: !toggle }))
	}, [])
	return (
		<>
			<div className='bg-wht absolute top-0 w-full font-space'>
				<div className='px-[1.25rem] pt-20 pb-10 lg:pl-[21.5rem] lg:pr-[1.5rem] xl:pl-[22.5rem] xl:pr-[3rem] lg:pt-40 lg:pb-10 z-10'>
					
				</div>
			</div>
		</>
	)
}

export default Appointments