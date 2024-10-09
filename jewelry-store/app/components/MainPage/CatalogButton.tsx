import Link from "next/link";
import styles from "./CatalogueButton.module.css";

export default function CatalogButton() {
  return (
    <Link href="/" className="mx-auto">
      <button className={`${styles.button} text-l font-bold uppercase p-4`}>
        To the catalog
      </button>
    </Link>
  );
}
