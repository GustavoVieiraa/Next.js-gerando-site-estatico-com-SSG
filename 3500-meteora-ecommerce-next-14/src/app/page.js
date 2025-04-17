import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch("https://api.npoint.io/bbc2b6cef885e96d161a/produtos");

  if (!res.ok) {
    throw new Error("Não foi possível obter os dados");
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch("https://api.npoint.io/23b1d283c7c61bdf9356/categorias");

  if(!res.ok) {
    throw new Error("Não foi possível obter os dados");
  }

  const categorias = await res.json();

  return categorias;
}

export default async function Home() {
  const produtos  = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
