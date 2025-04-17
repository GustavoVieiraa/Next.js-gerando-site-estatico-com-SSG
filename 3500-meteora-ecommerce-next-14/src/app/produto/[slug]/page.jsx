import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function getProduto(slug) {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`);

  const produto = await res.json();

  return produto;
}

export default async function ProdutoPage({ params }) {
  const { produto } = await getProduto(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}
