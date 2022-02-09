import PrivateRoute from "@/providers/PrivateRoute";

const layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <PrivateRoute>
                {children}
            </PrivateRoute>
        </div>
    );
};

export default layout;