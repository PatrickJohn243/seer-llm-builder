"use client"

import { AnimationMode, Container, DestroyType, MoveDirection, StartValueType } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import type { IOutModes } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


const ParticlesComponent = (props: any) => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = (container?: Container): Promise<void> => {
        console.log(container)
        return Promise.resolve();
    }

    const options = useMemo(
        () => ({
            autoPlay: true,
            background: {
                color: {
                    value: "#1b1b1b",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: true,
                            force: 120,
                            smooth: 10
                        }
                    },
                    resize: {
                        delay: 0.5,
                        enable: true
                    }
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                }
            },
            particles: {
                color: {
                    value: "#cb78ff",
                },
                links: {
                    color: "#cb78ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: "bounce",
                    } as IOutModes,
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                    animation: {
                        enable: true,
                        speed: 1,
                        mode: AnimationMode.auto,
                        startValue: StartValueType.random,
                        destroy: DestroyType.none
                    }
                },
            }

        }),
        []
    )

    return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;
}

export default ParticlesComponent