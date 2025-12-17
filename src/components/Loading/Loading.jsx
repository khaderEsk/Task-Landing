import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <div className="card">
                <div className="spinner"></div>
                <h1>Task Management</h1>
                <p>Preparing your workspace...</p>
            </div>
        </div>
    );
}
