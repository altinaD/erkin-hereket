const GoogleMap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1554.7424962139817!2d58.406236709128045!3d37.96918347486611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDU4JzA5LjIiTiA1OMKwMjQnMjQuNiJF!5e0!3m2!1sen!2s!4v1752945193350!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ borderRadius: "17px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
