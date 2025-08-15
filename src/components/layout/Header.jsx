import { Link } from 'react-router-dom'
import navdata from '../../constants/navdata'

function Header() {
    return (
        <div className=' h-[70px] flex justify-between items-center w-[90%] mx-auto'>
            <div className='flex items-baseline'>
                <p className='text-2xl italic font-semibold border-[#cb42c3] border-b-4 rounded-xl shadow-2xl'>
                    &nbsp;Narvdeshwar&nbsp;</p>
            </div>
            <div className="flex gap-6 items-center">
                {navdata.map((item, index) => (
                    <Link to={item.link} key={index} className="text-white hover:text-[C778DD] transition-all italic">
                        <span className='text-[#cb42c3] font-bold'>#</span>{item.title}
                    </Link>
                ))}
                <select className="bg-[#cb42c3] text-white px-2 py-1 rounded outline-none cursor-pointer font-bold">
                    <option value="english" className='cursor-pointer'>EN</option>
                    <option value="hindi">HI</option>
                </select>

            </div>

        </div>
    )
}

export default Header
