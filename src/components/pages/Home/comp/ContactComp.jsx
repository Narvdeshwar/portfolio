import { PhoneIcon } from 'lucide-react'
import { MdEmail } from 'react-icons/md'

function ContactComp() {
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-6 p-5">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Title */}
                <div className="flex items-center flex-1 min-w-[150px]">
                    <p className="text-[clamp(1.5rem,5vw,3rem)] font-semibold">
                        <span className="text-[#cb42c3] italic"># </span>Contacts
                    </p>
                    <div className="flex-1 h-1 ml-2 bg-[#cb42c3]"></div>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-6">
                {/* Left side text */}
                <div className="p-4 sm:p-6 md:p-10 text-gray-400 text-base sm:text-lg md:text-[20px]">
                    I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me!
                </div>

                {/* Right side contact box */}
                <div className="flex justify-center">
                    <div className="border border-gray-500 w-full sm:w-fit p-4 sm:p-6 rounded-md flex flex-col gap-4 text-gray-500">
                        <p className="font-medium">Message me here!</p>
                        <p className="flex items-center gap-3 break-all">
                            <MdEmail className="size-6 sm:size-8" />
                            <a href="mailto:narvdeshwaar@gmail.com" className="hover:underline">
                                narvdeshwaar@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-3">
                            <PhoneIcon className="size-5 sm:size-6" />
                            <a href="tel:8787205784" className="hover:underline">
                                8787205784
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp
