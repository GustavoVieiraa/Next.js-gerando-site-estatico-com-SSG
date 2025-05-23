import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function getProduto(slug) {
  const res = await fetch(
    "https://api.npoint.io/bbc2b6cef885e96d161a/produtos/"
  );

  const produtos = await res.json();

  const produto = produtos.find((produto) => produto.id.toString() === slug);

  return produto;
}

export default async function ProdutoPage({ params }) {
  const produto = await getProduto(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.npoint.io/bbc2b6cef885e96d161a/produtos/"
  );

  const produtos = await res.json();

  const result = produtos.map((produto) => ({
    slug: produto.id.toString(),
  }));

  return result;
}
