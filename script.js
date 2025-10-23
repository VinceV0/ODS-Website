// Objects in Orbit
// Vince Vagay 30036567
// Reference used from Murray's in-class demo from Moodle
// I must acknowledge the use of BLACKBOXAI an agentic AI for rapid application development

// Points to the according HTML class for each floating object
document.addEventListener('DOMContentLoaded', () => {
    const satellite1 = document.querySelector('.satellite1');
    const satellite2 = document.querySelector('.satellite2');
    const satellite3 = document.querySelector('.satellite3');
    
    // 'Radius' isn't a great name, but I was messing it them to set the distances to creat an elipse-like orbit

    const radius1 = 1200; // The distance from the center of the planet to the first satellite
    const radius2 = 500; // Second radius for first satellite
    const radius3 = 1200; // The distance from the center of the planet to the second satellite
    const radius4 = 500; // Second radius for second satellite
    const radius5 = 500; // The distance from the center of the planet to the third satellite
    const radius6 = 1200; // Third radius for third satellite
    const duration = 10000; // Duration of one complete orbit in milliseconds

    // Seems like starting points at the circumference
    let angle1 = 270;
    let angle2 = 90;
    let angle3 = 40;
    const orbitSpeed = 2 * Math.PI / duration; // Speed at which the angle should increment (radians per millisecond)

    function animate() {
        angle1 += orbitSpeed * (1000 / 45); // Increment angle for first satellite
        angle2 += orbitSpeed * (1200 / 30); // Increment angle for second satellite
        angle3 += orbitSpeed * (1500 / 60); // Increment angle for third satellite

        // First satellite position and rotation
        const x1 = radius1 * Math.cos(angle1);
        const y1 = radius3 * Math.sin(angle1);
        const rotation1 = angle1 * (180 / Math.PI);

        // Second satellite position and rotation
        const x2 = radius2 * Math.cos(angle2);
        const y2 = radius4 * Math.sin(angle2);
        const rotation2 = angle2 * (180 / Math.PI);

        // Third satellite position and rotation
        const x3 = radius5 * Math.cos(angle3);
        const y3 = radius6 * Math.sin(angle3);
        const rotation3 = angle3 * (180 / Math.PI);

        // Position and rotate the first satellite in its elliptical orbit
        satellite1.style.transform = `translate(-10%, -5%) translate(${x1}px, ${y1}px) rotate(${rotation1}deg)`;

        // Position and rotate the second satellite in its elliptical orbit
        satellite2.style.transform = `translate(-10%, -5%) translate(${x2}px, ${y2}px) rotate(${rotation2}deg)`;

        // Position and rotate the third satellite in its elliptical orbit
        satellite3.style.transform = `translate(-50%, -50%) translate(${x3}px, ${y3}px) rotate(${rotation3}deg)`;

        requestAnimationFrame(animate);
    }

    animate();
});
