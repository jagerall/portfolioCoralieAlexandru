import '../style/loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-spinner">
                <img className="loader-spinner-image" src='../assets/spirale.gif' alt="Illustration Coralie"></img>
            </div>
        </div>
    );
};

export default Loader;
