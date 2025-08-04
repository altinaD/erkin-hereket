const GoogleMap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: 'ffffff01'
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.5742289954176!2d58.40397387432292!3d37.97175814209386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff033fba745b%3A0x719064e374f4887e!2z0JDQstGC0L7QtNC40LDQs9C90L7RgdGC0LjQutCwIEcuS1VMWVlFVw!5e0!3m2!1sen!2s!4v1754290010880!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ borderRadius: "17px", backgroundColor: 'ffffff01' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};
export default GoogleMap;