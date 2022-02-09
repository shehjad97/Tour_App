

const FormTemplate = ({ data, register }) => {
    //some reusable styles
    const borderPrimaryColor = 'p-1 px-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40'
    const borderErrorColor = 'border-red-700 focus:ring-red-300'
    const borderSuccessColor = 'focus:border-blue-400 focus:ring-blue-300'

    return (
        <div className="form-control ">
            <span className="label-text uppercase">{data?.placeholder}</span>
            <div className="flex flex-col ">
                <input
                    type={data?.type}
                    placeholder={data?.placeholder}
                    defaultValue={data?.def}
                    className={`${borderPrimaryColor}  ${data?.error ? borderErrorColor : borderSuccessColor}`}
                    {...register(data?.name, {
                        required: ` ${data?.name} must required`,
                    })}
                />
                <div className="h-4">
                    {data?.error && (
                        <p className=" text-red-400 text-xs">
                            {data?.error.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormTemplate;