import '../style/loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-spinner">
                <video className="loader-spinner-video" autoPlay loop muted>
                    <source src="/assets/spirale.mp4" type="video/mp4" />
                </video>
            </div>

        </div>
    );
};

export default Loader;
