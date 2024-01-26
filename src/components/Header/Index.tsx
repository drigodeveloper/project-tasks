import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link"
import styles from "./styles.module.css"

export function Header() {
  const { data: session, status } = useSession();

    return(
        <header className={styles.header}>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>Tarefas
                        <span>+</span>
                        </h1>
                    </Link>
                    <Link href="/dashboard" className={styles.buttonLogo}>Meu painel</Link>
                </nav>
            </section>

                    {
                    status === "loading" ? (<></>) : session ? (
                    <button className={styles.buttonHeader} onClick={() => signOut()}>
                        Olá, {session?.user?.name}
                    </button>
                    ) : 
                    <button className={styles.buttonHeader} onClick={() => signIn("google")}>
                        Acessar
                    </button>
                    }
                    
        </header>

                        
    )
}