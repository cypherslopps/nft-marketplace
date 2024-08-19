import Image from "next/image";
import NFTCategoryContainer from "./components/NFTCategoryContainer";

export default function Home() {
  return (
    <main className="pb-3">
      <section className="py-12 flex justify-center">
        <div className="w-11/12 grid grid-cols-2 items-center gap-x-5">
          <div className="flex flex-col gap-y-6">
            <div className="space-y-4">
              <span className="py-1.5 px-2.5 rounded-full text-[.75rem] bg-slate-800 font-bold uppercase">nft marketplace</span>
              <h1 className="text-6xl tracking-tight font-extrabold uppercase">Discover, collect, and sell nfts</h1>
            </div>
            <p className="text-white/80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias, soluta ut vitae molestias repellat, eligendi numquam autem magnam vel dignissimos impedit! Expedita nisi cupiditate quos quae, corporis non ipsa.</p>
          </div>
          <div>Images</div>
        </div>
      </section>

      <main className="w-11/12 mx-auto">
        <section className="w-full space-y-3.5">
          <h1 className="text-xl font-bold">Categories</h1>

          <div className="flex items-center gap-x-2">
            <NFTCategoryContainer title="Art" />
            <NFTCategoryContainer title="Technology" />
            <NFTCategoryContainer title="Memes" />
          </div>
        </section>
      </main>
    </main>
  );
}
