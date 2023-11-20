import React from 'react';

const AboutUs = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #5a8d68, #2e604e)',
                fontFamily: 'Times New Roman, serif',
                color: 'white',
                fontSize: '1.5em',

                padding: '20px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h1>ABOUT BIKE ROOM!</h1>
            <p>
                Bike Room is your premier destination for the latest and finest bikes. We take pride in being an online bike
                showroom committed to providing top-notch bicycles for enthusiasts, commuters, and adventure seekers.
            </p>
            <p>
                At Bike Room, we believe that cycling is not just a mode of transportation but a lifestyle. Our extensive
                selection includes sleek road bikes, rugged mountain bikes, stylish commuter bikes, and more. We ensure that
                each bike meets our standards for performance, durability, and style.
            </p>
            <p>
                Our passionate team, composed of avid cyclists, understands the thrill of the ride. We meticulously curate our
                collection to offer a diverse range of bicycles to suit your needs.
            </p>
            <p>
                Explore our online showroom to discover the perfect ride for your next adventure. From cutting-edge technology to
                classic designs, Bike Room has it all.
            </p>
            <p>
                We invite you to join us on your cycling journey. Ride with Bike Room and experience the joy of cycling like
                never before!
            </p>
            <p>
                Whether you are a seasoned cyclist or just starting, Bike Room is here to cater to all your biking needs. Our
                commitment is to enhance your biking experience and make every ride memorable.
            </p>
        </div>
    );
};

export default AboutUs;