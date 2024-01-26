
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import logo from "../assets/hero.png"


export default function Home() {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Tarefas+ | Organize suas tarefas de maneira fácil</title>
      </Head>
        <main className={styles.main}>
          <div className={styles.logoImage}>
            <Image
            className={styles.logo}
            alt="logo tarefas +"
            src={logo}
            priority
            />
          </div>

          <h1>Sistema feito para você organizar <br /> seus estudos e terefas</h1>

          <div className={styles.infoContents}>
            <section className={styles.box}>
              <span>+ 7mil posts</span>
            </section>
            <section className={styles.box}>
              <span>+ 1 mil comentários</span>
            </section>
          </div>


        </main>

       </div>
      );
}
            
            

            
            

         
    
