"use client"
import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Products Management Web App",
        description: (
            `<div>
        Implemented user registration and login.<br />
        Integrated email and SMS OTP verification using Node-mailer.<br />
        Enabled creation of products only for logged-in users with proper authentication and authorization.<br />
        Displayed user-specific products with pagination.
        </div>`
        ),
        image: "/images/projects/mern.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/mern-task/tree/mern-app",
    },
    {
        id: 2,
        title: "News Website",
        description: (
            `<div>
                Developed frontend and backend for a real-time news app tailored to user interests.<br />
                Utilized React.js, CSS for the frontend, and Node.js, Express, MongoDB, and JavaScript for
                the backend.<br />
                Implemented features to fetch and display news articles based on user preferences.
            </div>`
        ),
        image: "/images/projects/news.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/news_app",
    },
    {
        id: 3,
        title: "Authentication and CRUD operations",
        description: (
            `<div>
                Developed the backend of an eCommerce website with multiple Rest APIs for users, products,
                orders, and cart.<br />
                Utilized AWS S3 for storing profile & product images, implemented Bcrypt for secured password
                storage, and JWT for protected APIs.
            </div>`
        ),
        image: "/images/projects/product.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/Shopping-Cart-Project",
    },
    {
        id: 4,
        title: "User Application",
        description: (
            `<div>
                Developed the frontend of a user management system using React.js, CSS, and HTML.<br />
                Implemented features allowing users to add, edit, view, and delete user records.<br />
                Utilized modern UI techniques for an intuitive user experience.
            </div>`
        ),
        image: "/images/projects/shopping_cart.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/Rim2703/User-App/tree/master",
    },
    {
        id: 5,
        title: "URL Shortener",
        description: (
            `<div>
                In this Project developed backend Website like Tinyurl where user can put the longurl and get the shorturl.<br />
                Using Redis & Caching for low latency network and improve the user experience time.
            </div>`
        ),
        image: "/images/projects/urlshortener.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/URL-Shortner",
    },
    {
        id: 6,
        title: "Open to Intern",
        description: (
            `<div>
                Websites like internshala.com developed the Backend as well as working with the Frontend creating the
                college & intern API's where interns can apply for particular college with college name.
            </div>`
        ),
        image: "/images/projects/intern.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/Open-to-Intern",
    },
    {
        id: 7,
        title: "Cards UI",
        description: (
            `<div>
                Developed frontend and backend for a user cards system with search field and pagination.<br />
                Utilized React.js, CSS for the frontend and Node.js, Express, and MongoDB for the backend.<br />
                Implemented features allowing users to search for user cards and navigate through pages.
            </div>`
        ),
        image: "/images/projects/cards.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Rim2703/web-app",
    },
    {
        id: 8,
        title: "Full-stack Admin Dashboard",
        description: (
            `<div>
            Developed centralized interface for overseeing users, products, merchants, and orders. <br />
            It provides comprehensive insights and tools for efficient management and monitoring,
            With user-friendly controls and real-time data updates.<br />
            </div>`
        ),
        image: "/images/projects/dashboard.png",
        tag: ["All", "Web"],
        gitUrl: "/",

    },
];

const Projects = () => {
    return (
        <section className="lg:py-10" id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {
                    projectsData.map((project) => (
                        <ProjectCard key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Projects


