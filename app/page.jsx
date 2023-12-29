import Link from "next/link"

import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Semantic HTML Tags</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>The Importance of Semantic HTML</h2>
          <p>Semantic HTML tags give meaning to your content...</p>
        </section>

        <section className={styles.wrapper}>
          <article className={styles.article}>
            <h2>Examples of Semantic Tags</h2>

            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"
                target="_blank"
                rel="noopener noreferrer"
              >
                &lt;header&gt;
              </a>
              : Defines a header for a document or a section.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sectionable}
              >
                &lt;nav&gt;
              </a>
              : Defines a set of navigation links.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sectionable}
              >
                &lt;section&gt;
              </a>
              : Defines a section in a document.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sectionable}
              >
                &lt;article&gt;
              </a>
              : Defines an independent, self-contained content.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sectionable}
              >
                &lt;aside&gt;
              </a>
              : Defines content aside from the page content (like a sidebar).
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                &lt;footer&gt;
              </a>
              : Defines a footer for a document or a section.
            </p>
            <p>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"
                target="_blank"
                rel="noopener noreferrer"
              >
                &lt;time&gt;
              </a>
              : Represents a specific period in time.
            </p>
          </article>

          <aside className={styles.aside}>
            <h3>More Information</h3>
            <p>
              Check out more about HTML5 semantic elements at{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs
              </a>
              .
            </p>

            <h4>Exercises</h4>
            <ul>
              <li>
                <Link href="/first-exercise">Excercise 1</Link>
              </li>
              <li>
                <Link href="/second-exercise">Excercise 2</Link>
              </li>
              <li>
                <Link href="/third-exercise">Excercise 3</Link>
              </li>
            </ul>
          </aside>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2023 Your Website</p>
      </footer>
    </>
  )
}
