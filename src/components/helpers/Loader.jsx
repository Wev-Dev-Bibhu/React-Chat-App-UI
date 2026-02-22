import React from 'react'
import { CircularProgress } from '@mui/material'

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <CircularProgress color="primary" />
        </div>
    )
}

export default Loader