import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-siteGray text-siteGreen">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-xl mt-4 text-center">
                {`Oops! The page you're looking for doesn't exist.`}
            </p>
            <button
                className="mt-6 px-6 py-3 bg-siteYellow rounded-lg focus:ring-2"
                onClick={() => navigate(-1)}
            >
                <u>Go Back</u>
            </button>
        </div>
    );
};

export default ErrorPage;
