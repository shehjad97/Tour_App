export default function Container({ children, className }) {
    return (
        <div className={`px-4 md:px-8 mx-auto  flex flex-col lg:max-w-[70rem] ${className}`}>
            {children}
        </div>
    )
}