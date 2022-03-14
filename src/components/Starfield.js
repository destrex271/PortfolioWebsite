
import Particles from "react-tsparticles";


function Field(){
    return(
        <Particles
            id="tsparticles"
            options={{
                background: {
                color: {
                    value: "transparent",
                },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.3,
                    size: 40,
                    },
                    repulse: {
                    distance: 80,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#09dee6",
                },
                links: {
                    // color: "#00ffa1",
                    color: "#09dee6",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Field;