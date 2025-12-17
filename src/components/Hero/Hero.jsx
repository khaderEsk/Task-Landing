import "./Hero.css";


export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>Manage Your Tasks Smarter</h1>
                <p>A simple task management software to boost productivity.</p>
                <button className="hero-btn">Get Started</button>
                <button className="hero-btn btn-free">Try for Free</button>
            </div>
        </section>
    );
}