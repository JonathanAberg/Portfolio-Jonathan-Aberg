import { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className={styles.content}>
          <div className={styles.infoContainer}>
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <FaEnvelope className={styles.icon} />
              </div>
              <h3>Email</h3>
              <p>Jonathan.aberg@hotmail.com</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <FaMapMarkerAlt className={styles.icon} />
              </div>
              <h3>Location</h3>
              <p>Gothenburg, Sweden</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconContainer}>
                <FaPhone className={styles.icon} />
              </div>
              <h3>Phone</h3>
              <p>+46 730 87 55 32</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
