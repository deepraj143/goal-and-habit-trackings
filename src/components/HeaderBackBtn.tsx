import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const HeaderBackBtn = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <IoArrowBack className='size-8' onClick={() => navigate(-1)}/>
        </div>
    )
}

export default HeaderBackBtn