import styles from "./page.module.css"

export default function FirstExercise() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navigation}>
          <div>
            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.article}>
          <div className={styles.title}>
            <h1>The Future of Web Development</h1>
          </div>
          <div className={styles.content}>
            <p>
              Web development is an ever-evolving field, with new technologies
              and approaches emerging regularly. In recent years, we have seen a
              significant shift towards more interactive and dynamic web
              experiences, powered by frameworks like React, Angular, and
              Vue.js. The importance of mobile-first design and accessibility
              has also been increasingly recognized, leading to more inclusive
              and user-friendly web applications.
            </p>
            <p>
              Looking ahead, we can expect further advancements in areas such as
              progressive web apps (PWAs), API-driven development, and the
              growing use of artificial intelligence and machine learning in web
              design and user experience optimization. The future of web
              development is undoubtedly exciting and full of potential for both
              developers and end-users.
            </p>
          </div>
        </div>

        <div className={styles.sidebar}>
          <h3>Latest Posts</h3>
          <div>
            <a href="#post1">Exploring Node.js in 2024</a>
            <a href="#post2">Understanding CSS Grid Layouts</a>
            <a href="#post3">How to use the new Dialog tag?</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>&copy; 2023 WebDev Blog. All rights reserved.</p>
      </div>
    </>
  )
}
