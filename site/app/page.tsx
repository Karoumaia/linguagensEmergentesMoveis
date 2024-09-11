import { InputPesquisa } from "./components/InputPesquisa"
import { ItemMoveis } from "./components/ItemMoveis";

export default function Home() {
  return (
    <main>
      <InputPesquisa />

      <section className="max-w-screen-xl mx-auto">
        <h1 className="mb-5 mt-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Móveis <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">em destaque</span></h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <ItemMoveis />
          <ItemMoveis />
          <ItemMoveis />
          <ItemMoveis />
          <ItemMoveis />
          <ItemMoveis />
        </div>

      </section>

    </main>
  );
}
