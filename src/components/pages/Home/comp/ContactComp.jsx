import { PhoneIcon } from 'lucide-react'

import { MdEmail } from 'react-icons/md'

function ContactComp() {
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-6 p-5">
            {/* Header */}
            <div className="flex items-center w-full">
                <p className="text-5xl font-bold">
                    <span className="text-[#cb42c3] italic"># </span>Contacts
                </p>
                <p className="w-[50%] bg-[#cb42c3] h-1 ml-2"></p>
            </div>
            <div className='grid grid-cols-2 place-content-center gap-6'>
                <div className='p-10 text-gray-400 text-[20px]'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me!</div>
                <div className='flex justify-center'>
                    <div className='border border-gray-500 w-fit p-6 rounded-md flex flex-col gap-2 text-gray-500'>
                        <p>Message me here!</p>
                        <p className='flex items-center gap-3'><MdEmail className='size-8' /> <a href="mailto:narvdeshwaar@gmail.com">narvdeshwaar@gmail.com</a></p>
                        <p className='flex items-center gap-3 pl-1'><PhoneIcon className='size-6' /> <a href="tel:8787205784">8787205784</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp
