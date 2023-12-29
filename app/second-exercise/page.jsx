import styles from "./page.module.css"

export default function SecondExercise() {
  return (
    <>
      <div className={styles.header}>
        <h1>My Blog</h1>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.film_review}>
          <h2>Jurassic Park</h2>

          <div className={styles.main_review}>
            <h3>Review</h3>
            <p>Dinos were great!</p>
          </div>

          <div className={styles.user_reviews}>
            <h3>User reviews</h3>

            <div className={styles.user_review}>
              <h4>Too scary!</h4>

              <p>Way too scary for me.</p>

              <div className={styles.footer}>
                <p>
                  Posted on <span className={styles.time}>May 16</span> by Lisa.
                </p>
              </div>
            </div>

            <div className={styles.user_review}>
              <h4>Love the dinos!</h4>

              <p>I agree, dinos are my favorite.</p>

              <div className={styles.footer}>
                <p>
                  Posted on <span className={styles.time}>May 17</span> by Tom.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footer_staff}>
            <p>
              Posted on <span className={styles.time}>May 15</span> by Staff.
            </p>
          </div>
        </div>

        <div className={styles.aside}>
          <div className={styles.widget}>
            <h3>Recent Posts</h3>

            <ul>
              <li>
                <a href="#post1">The Future of Artificial Intelligence</a>
              </li>

              <li>
                <a href="#post2">5G Networks and Beyond</a>
              </li>

              <li>
                <a href="#post3">Virtual Reality in Education</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>&copy; 2023 My Blog. All Rights Reserved.</p>
      </div>
    </>
  )
}
