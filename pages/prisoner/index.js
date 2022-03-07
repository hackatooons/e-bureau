import React from 'react'
import { Menu, Stack, Input, Textarea, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import Navbar from '../../components/Navbar/Navbar'
import prisonerImg from '../../asset/Images/prisoner.png'
import prisonerChain from '../../asset/Images/chain.png'
import icon from '../../asset/Images/icon.png'


const Prisoner = () => {

    const [file, setFile] = React.useState([])
    const [preview, setPreview] = React.useState('')

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        const ALLOWED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg']
        if (fileUploaded && ALLOWED_FILE_TYPES.includes(fileUploaded.type)) {
            let reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(fileUploaded)
            setFile(fileUploaded)
        }
        else {
            setError(true)
        }
    };


    console.table(preview)

    return (
        <>
            <Navbar />
            {/* <Box bg='black' w='100%' p={4} color='white' className='text-3xl font-Fredoka'>
                E-Bureau
            </Box> */}
            <div className='bg-black h-full text-3xl text-white flex flex-col items-center relative'>
                <div className='absolute top-0 left-0' >
                    <Image src={prisonerChain} height={200} width={200} />
                </div>
                <div className='absolute bottom-0 right-0'>
                    <Image src={prisonerImg} layout={'fixed'} alt="feif" height={300} width={200} />
                </div>

                <h1 className='text-white text-5xl text-center mt-4 font-bold'>Add a <span className='text-green-500'>Prisoner</span></h1>
                <div className='w-3/4 rounded'>
                    <div className='flex flex-col justify-center items-center space-y-7 mt-8 w-full p-10'>
                        <Stack padding='10' bg='whiteAlpha.300' className='w-full' spacing={'7'}>
                            <div className='flex justify-center items-center flex-col space-y-5'>
                                <div style={{
                                    background: preview ? `url(${preview}) repeat center/cover` : ``
                                }} className='h-52 w-52 bg-gray-500 rounded flex justify-center items-center p-10 text-center'>
                                    {<div className={preview == '' ? 'flex justify-center items-center' : 'hidden'}> <Image src={icon} height={500} width={500} /></div>}
                                </div>
                                <span className='text-sm'>{preview == '' ? 'Upload a Image' : file.name}</span>
                                <Button className='text-black' onClick={handleClick}>Add an Image</Button>
                                <Input type='file' className='m-6 hidden' ref={hiddenFileInput} onChange={handleChange} accept="image/*" />
                            </div>
                            <div className='flex space-x-7'>
                                <Input placeholder='First Name' className='border-none bg-black' />
                                <Input placeholder='Last Name' className='border-none bg-black' />
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

export default Prisoner
