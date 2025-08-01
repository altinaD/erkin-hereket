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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0115937293913!2d58.362648989882885!3d37.93015959961336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f70020138439af1%3A0x2b2fac98a837c2f!2zQXRhbXlyYXQgTnnDvWF6b3cgxZ5hw71vbHkgMTc0LCBBxZ9nYWJhdCwgVHVya21lbmlzdGFu!5e0!3m2!1sen!2s!4v1753943181201!5m2!1sen!2s" 
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