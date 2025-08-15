function Button({ title, className = '', onClick, variant = 'default', children }) {
    const variants = {
        primary:
            'bg-white/10 border border-[#cb42c3] text-white backdrop-blur-md shadow-[inset_0_2px_6px_rgb(203, 66, 195)]',
        default:
            'bg-white/10 border border-white/20 text-gray-300 backdrop-blur-md shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]',
    };

    return (
        <button
            onClick={onClick}
            className={`${variants[variant]} px-6 py-2 rounded-xl cursor-pointer transition duration-300 hover:scale-105 ${className}`}
        >
            {children}
            {title}
        </button>
    );
}
export default Button