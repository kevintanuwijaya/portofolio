import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import skill1 from '../public/skills/clock.png'
import skill2 from '../public/skills/web.png'
import skill3 from '../public/skills/mobile.png'
import skill4 from '../public/skills/leader.png'
import skill5 from '../public/skills/support.png'
import skill6 from '../public/skills/language.png'
import skill7 from '../public/skills/thinking.png'

export default function Home(){
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Tanuwijaya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
            <div>
              <span className={styles.navtitle}>
                K
              </span>
            </div>
            <div className={styles.navitems}>
                <a href='/' className={styles.nav_item}>
                  <span>Home</span>
                </a>
                <a href='/' className={styles.nav_item}>
                  <span>Project</span>
                </a>
                <a href='/' className={styles.nav_item}>
                  <span>Award</span>
                </a>
            </div>
        </nav>
      </header>

      <main className={styles.main}>
          <div className={styles.main_top_section}>
            <div className={styles.main_intro}>
              <div className={styles.main_intro_detail}>
                <span className={styles.main_intro_name}>KEVIN</span>
                <br></br>
                <span className={styles.main_intro_name}>TANUWIJAYA</span>
                <div className={styles.main_intro_categories}>
                    <span className={styles.main_intro_categorie_item}>Computer Science</span>
                    <span className={styles.main_intro_categorie_item}>Software Engineer</span>
                </div>
                <a href='https://drive.google.com/file/d/14eWqzdXuqkjdFEZsfykyQzWphezPfdfr/view?usp=sharing' className={styles.link_remove_decoration}>
                  <div className={styles.main_intro_buttons}>
                    <button className={styles.main_into_resume}>Download Resume</button>
                  </div>
                </a>
              </div>
              <div className={styles.main_intro_picture}>
                <img src='vercel.svg' />
              </div>
            </div>
            <div className={styles.main_skills}>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill1}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Time Management</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill2}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Web Developer</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill3}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Mobile Developer</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill4}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Leadership</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill5}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Teamwork</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill6}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Languange</div>
              </div>
              <div className={styles.main_skills_item}>
                  <div className={styles.main_skills_image}>
                    <Image 
                      src={skill7}
                      sizes={500}
                      />
                  </div>
                  <div className={styles.main_skills_title}>Languange</div>
              </div>
            </div>
            <div className={styles.main_about_section}>
                <div className={styles.main_about_image}>
                  <img src='/skills/thinking.png' className={styles.main_about_image_img} />
                </div>
                <span className={styles.main_about_title}>About Me</span>
                <div className={styles.main_about_description}>
                    <p className={styles.main_about_description_detail}>
                      I am a collage student who is pursing my computer science degree in BINUS. During my study, I manage to maintain my GPA well and also participate in Keluarga Mahasiswa Katolik BINUS University. In Keluarga Mahasiswa Katolik Organization, I was promoted as a coordinator division and arrange some virtual events with my team. In my last semester in BINUS, I applied as a Software Laboratory Instructor who is in charge of teaching 4 regular classes and 1 international class about SQL and ArcMap Software. I believe that learning foreign language is important nowadays. Apart of mastering my English I also mastering my Mandarin by attending classes every week. My Achievement was I passed Chinese Proficient Test 4.
                    </p>
                </div>
            </div>
          </div>
            <div className={styles.main_project_section_odd}>
                <div className={styles.main_project_detail}>
                  <h1>First Web Project</h1>
                  <p className={styles.main_project_detail_description}>
                      This is my first website project called Zunder Zifflin. The project consisted of 3 people and I was responsible to handle the home page. Language that I used are HTML, CSS, JavaScript.
                  </p>
                  <div className={styles.main_project_detail_categories}>
                      <div className={styles.main_project_detail_categorie_item}>
                          HTML
                      </div>
                      <div className={styles.main_project_detail_categorie_item}>
                          CSS
                      </div>
                      <div className={styles.main_project_detail_categorie_item}>
                          JavaScript
                      </div>
                      <div className={styles.main_project_detail_categorie_item}>
                          Web
                      </div>
                  </div>
                  <div className={styles.main_project_github_section}>
                      <a href='https://github.com/mtirtapradja/project-hci-lab' className={styles.link_remove_decoration}>
                        <div className={styles.main_project_github_item}>
                            <span className={styles.main_project_github_item_name}>Visit the GitHub Project</span><i class="bi bi-github" style={{fontSize:20}}></i>
                        </div>
                      </a>
                  </div>
                </div>
                <div className={styles.main_project_image_section}>
                    <img src='/zunder/zunder zifflin.png' className={styles.main_project_image, styles.main_project_image_landscape} />
                </div>
            </div>
            <div className={styles.main_project_section_even}>
                <div className={styles.main_project_image_section}>
                    <img src='/bilocker/bilocker (1).jpg' className={styles.main_project_image, styles.main_project_image_portrait} />
                    <img src='/bilocker/bilocker (2).jpg' className={styles.main_project_image, styles.main_project_image_portrait} />
                </div>
                <div className={styles.main_project_detail}>
                  <h1>On Going Mobile Project</h1>
                  <p className={styles.main_project_detail_description}>
                      This is my on going project called BiLocker. Bilocker is a small company that provides locker borrowing service to customer so every customer can store their belonging safely. The project is consist of 5 people and I am responsible to develop the android app. Language that I use in this project are Java using Android Studio
                  </p>
                  <div className={styles.main_project_detail_categories}>
                      <div className={styles.main_project_detail_categorie_item}>
                          Andorid Studio
                      </div>
                      <div className={styles.main_project_detail_categorie_item}>
                          Java
                      </div>
                      <div className={styles.main_project_detail_categorie_item}>
                          Mobile
                      </div>
                  </div>
                  <div className={styles.main_project_github_section}>
                      <a href='https://github.com/kevintanuwijaya/Project-BiLocker' className={styles.link_remove_decoration}>
                        <div className={styles.main_project_github_item}>
                            <span className={styles.main_project_github_item_name}>Visit the GitHub Project</span><i class="bi bi-github" style={{fontSize:20}}></i>
                        </div>
                      </a>
                  </div>
                </div>
            </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footericon}>
            <a href='https://www.linkedin.com/in/kevin-tanuwijaya-23a2771a3/'>
              <i class="bi bi-linkedin" style={{fontSize:30}} ></i>
            </a>
            <a href='https://github.com/kevintanuwijaya'>
              <i class="bi bi-github" style={{fontSize:30}}></i>
            </a>
          <i class="bi bi-facebook" style={{fontSize:30}}></i>
          <i class="bi bi-whatsapp" style={{fontSize:30}}></i>
        </div>
        <span>©2021 Kevin Tanuwijaya</span>
      </footer>
    </div>
  )
}
