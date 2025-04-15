import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { getCategorias, getTodosProdutos } from "../lib/api";

export default async function Home() {
  const produtos = getTodosProdutos();
  const categorias = getCategorias();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
