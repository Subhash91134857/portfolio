import { animated } from '@react-spring/web';
import { useEffect, useState, useMemo } from 'react';

interface Skill {
    name: string;
    x: number;
    y: number;
    size: number;
    color: string;
}

const skills: Skill[] = [
    { name: 'React', x: 5, y: 10, size: 1.2, color: '#61DAFB' },
    { name: 'Node.js', x: 15, y: 25, size: 1.1, color: '#68A063' },
    { name: 'TypeScript', x: 25, y: 15, size: 1.3, color: '#3178C6' },
    { name: 'MongoDB', x: 35, y: 30, size: 1.0, color: '#47A248' },
    { name: 'PostgreSQL', x: 45, y: 20, size: 1.1, color: '#336791' },
    { name: 'AWS', x: 55, y: 35, size: 1.2, color: '#FF9900' },
    { name: 'Docker', x: 65, y: 15, size: 1.0, color: '#2496ED' },
    { name: 'Git', x: 75, y: 25, size: 1.1, color: '#F05032' },
    { name: 'Python', x: 85, y: 40, size: 1.2, color: '#3776AB' },
    { name: 'JavaScript', x: 95, y: 30, size: 1.3, color: '#F7DF1E' },
    { name: 'HTML5', x: 10, y: 50, size: 1.1, color: '#E34F26' },
    { name: 'CSS3', x: 20, y: 60, size: 1.2, color: '#1572B6' },
    { name: 'Redux', x: 30, y: 70, size: 1.1, color: '#764ABC' },
    { name: 'Tailwind', x: 60, y: 75, size: 1.1, color: '#06B6D4' },
    { name: 'Socket.io', x: 5, y: 85, size: 1.1, color: '#010101' },
];

const FloatingSkills = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const animatedStyles = useMemo(() => {
        return skills.map((skill, index) => {
            const offsetX = Math.sin(time * 0.03 + index * 0.5) * 5;
            const offsetY = Math.cos(time * 0.04 + index * 0.3) * 5;
            const scale = 1 + Math.sin(time * 0.1 + index) * 0.1;
            const opacity = Math.min(1, Math.max(0.7, 0.8 + Math.sin(time * 0.1 + index) * 0.2));
            const rotate = Math.sin(time * 0.02 + index) * 5;

            return {
                left: `${skill.x + offsetX}%`,
                top: `${skill.y + offsetY}%`,
                transform: `scale(${scale}) rotate(${rotate}deg)`,
                opacity,
            };
        });
    }, [time]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-visible z-0">
            {skills.map((skill, index) => (
                <animated.div
                    key={skill.name}
                    style={{
                        position: 'absolute',
                        ...animatedStyles[index],
                        transition: 'all 0.3s ease-out',
                    }}
                    className="transform-gpu"
                >
                    <div
                        className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm whitespace-nowrap"
                        style={{
                            backgroundColor: `${skill.color}33`,
                            color: skill.color,
                            border: `1px solid ${skill.color}`,
                            boxShadow: `0 0 12px ${skill.color}66`,
                        }}
                    >
                        {skill.name}
                    </div>
                </animated.div>
            ))}
        </div>
    );
};

export default FloatingSkills;
