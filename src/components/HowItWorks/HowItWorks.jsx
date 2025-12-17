import "./HowItWorks.css";


export default function HowItWorks() {
    return (
        <section className="how">
            <div className="container">
                <h2 className="title">How It Works</h2>
                <div className="steps">
                    <div className="step">1<br />Create Account</div>
                    <div className="step">2<br />Add Tasks</div>
                    <div className="step">3<br />Track Progress</div>
                </div>
            </div>
        </section>
    );
}