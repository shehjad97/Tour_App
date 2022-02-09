
export const PrimaryLoading = ({ height, color }) => {
    return (
        <>
            <div className="h-[90vh] absolute w-full bg-transparent flex flex-col items-center justify-center ">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    );
};
