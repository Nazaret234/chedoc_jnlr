import styles from "@/css/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          Home | Terms and Conditions | Privacy Policy | Collection Statement |
          Help | Manage Account
        </p>
        <p>Copyright © 2024 Streaming. All Rights Reserved</p>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            alt="Facebook"
            className={styles.image}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
            alt="Twitter"
            className={styles.image}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="Instagram"
            className={styles.image}
          />
        </div>
      </div>
    </footer>
  );
}
