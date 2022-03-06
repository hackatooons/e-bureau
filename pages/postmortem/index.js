import React, { useState } from 'react'
import { Stack, Input, Textarea, Button } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import Navbar from '../../components/Navbar/Navbar'


const PostMortem = () => {

    const [file, setFile] = React.useState([])
    const [preview, setPreview] = React.useState()
    const [error, setError] = useState(false)

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        const ALLOWED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf']
        if (fileUploaded && ALLOWED_FILE_TYPES.includes(fileUploaded.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setPreview(fileUploaded)
            }
            reader.readAsDataURL(fileUploaded)
        }
        else {
            setError(true)
            console.error("File Not Supported ")
        }
        setFile(fileUploaded)
        console.table(file)
    };


    console.table(file)

    return (
        <>
            <Navbar />
            <div className='bg-black h-full text-3xl text-white flex flex-col items-center relative'>
                <h1 className='text-white text-5xl text-center mt-4 font-bold'>Post <span className='text-green-400'>Mortem</span></h1>
                <div className='w-3/4 rounded'>
                    <div className='flex flex-col justify-center items-center space-y-7 mt-8 w-full p-10'>
                        <Stack padding='10' bg='whiteAlpha.300' className='w-full' spacing={'7'}>
                            <div className='flex space-x-7'>
                                <Input placeholder='First Name' className='bg-black text-white' />
                                <Input placeholder='Last Name' className='bg-black text-white' />
                            </div>
                            <div className='flex space-x-6'>
                                <Input placeholder='' type="date" className='bg-black' />
                                <Input placeholder='' type="time" className='bg-black' />
                            </div>
                            <select name="Select Crime" id="" className='bg-black rounded'>
                                <option value="" disabled>Select Crime</option>
                                <option value="">Theft</option>
                                <option value="">Rape</option>
                                <option value="">Fraud</option>
                            </select>
                            <div className='bg-gray-500 rounded w-full h-44 flex justify-around items-center'>
                                <Input type='file' className='m-6 hidden' ref={hiddenFileInput} onChange={handleChange} accept="image/*" />
                                <Button className='text-black' onClick={handleClick} >Upload Document</Button>
                                <div>
                                    {file.name == null || !file.name ?
                                        <div className='flex flex-col justify-center items-center'>
                                            <AiOutlineCloudUpload className='text-4xl text-white' />
                                            <p className='font-bold text-lg'>Upload Forensic Report</p>
                                        </div> :
                                        <div>
                                            <h1 className='text-md'>{file.name}</h1>
                                        </div>
                                    }
                                </div>
                            </div>
                            <Textarea placeholder='Description' className='bg-black' />
                            <div className='flex justify-center items-center space-x-16 '>
                                <Button variant="solid" colorScheme='gray' textColor='blackAlpha.700'>Save</Button>
                                <Button variant="outline" colorScheme='gray'>Cancel</Button>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostMortem
