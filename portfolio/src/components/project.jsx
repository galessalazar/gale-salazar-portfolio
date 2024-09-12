import PropTypes from 'prop-types';

const Project = ({ title, imageUrl, deployedLink, repoLink }) => { 
    return (
        <div className="project">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <a href={deployedLink} target='_blank' rel='noopener noreferrer'>Deployed App</a><br></br>
            <a href={repoLink} target='_blank' rel='noopener noreferrer'>View on Github</a>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    deployedLink: PropTypes.string,
    repoLink: PropTypes.string.isRequired
};

export default Project;