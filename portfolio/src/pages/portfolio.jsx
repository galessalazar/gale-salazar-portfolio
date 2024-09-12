import Project from "../components/project";

const projects = [
    {
        title: 'Social Network API',
        imageUrl: '/SNapi.png',
        deployedLink: '',
        repoLink: 'https://github.com/galessalazar/social_network_api'
    },
    {
        title: 'Weather Dashboard',
        imageUrl: '/image.png',
        deployedLink: '',
        repoLink: 'https://github.com/galessalazar/galeweathersdashboard'
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            {projects.map(project => (
                <Project
                key={project.title}
                title={project.title}
                imageUrl={project.imageUrl}
                deployedLink={project.deployedLink}
                repoLink={project.repoLink}
                />
            ))}
        </section>
    );
};

export default Portfolio;