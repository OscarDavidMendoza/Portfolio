import Loading from "Components/Loading";
import { NavBar } from "Components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Footer } from "Components/Footer";
import { About } from "pages/About";

function App() {
    const [loading, setLoading] = useState(true);
    const appEl = useRef(null);

    // gsap plugin register
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        setLoading(false);
        gsap.to(appEl.current, 0, { css: { visibility: "visible" } });
    }, []);

    return (
        <div className="App">
            {loading ? (
                <Loading />
            ) : (
                <div ref={appEl}>
                    <Router>
                        <NavBar />
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
