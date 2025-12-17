import "./Features.css";


export default function Features() {
    return (
        <section>
            <div className="container">
                <h2 className="title">Features</h2>
                <div className="features">
                    <div className="card">🗂️<h3>Task Organization</h3><p>Organize tasks easily.</p></div>
                    <div className="card">👥<h3>Team Collaboration</h3><p>Work together smoothly.</p></div>
                    <div className="card">✅<h3>Progress Tracking</h3><p>Track goals efficiently.</p></div>
                </div>
            </div>
        </section>
    );
}