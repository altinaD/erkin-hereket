const GoogleMap = () => {
    return (
        <div style={{
            width: '100%', height: '100%'
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.8355433658827!2d58.37553814644386!3d37.922436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd096273235d%3A0x20c23ef83b2dcda3!2sCaspy%20Creative!5e0!3m2!1sen!2s!4v1740559444574!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{borderRadius: '17px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default GoogleMap;