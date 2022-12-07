import Image from "next/image";
import styles from "./page.module.css";
import { El_Messiri, Mountains_of_Christmas } from "@next/font/google";

const ChristmasFont = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: "400",
});

const MessiriFont = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type IGift = {
  name: string;
  link: string;
};

const myGifts = [
  {
    name: "Bebedero para Azu",
    link: "https://articulo.mercadolibre.com.ar/MLA-1128585130-bebedero-catit-pixi-fountain-gatos-automatico-25-l-filtro-_JM?searchVariation=174324960770#is_advertising=true&searchVariation=174324960770&position=9&search_layout=stack&type=pad&tracking_id=be3180db-8a69-4ee2-9e97-1dee2d329076&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=9&ad_click_id=OWVmODA3ZmYtYWFhNC00ODRiLTg2OTctN2E5MGE4MmJmYzFm",
  },
  {
    name: "Cajón de salto",
    link: "",
  },
];

const mySisterGifts = [
  {
    name: "Remera",
    link: "https://www.cibelesonline.com.ar/productos/remera-deep/",
  },
  {
    name: "Bikini",
    link: "https://www.cibelesonline.com.ar/productos/bikini-aries/",
  },
];

export default function Home() {
  return (
    <main className="h-screen p-14">
      <div className={ChristmasFont.className}>
        <h1 className="text-red-500 text-5xl">
          Nuestros deseos para familiares y amigues
        </h1>
      </div>
      <div className={MessiriFont.className}>
        <div className="gifts-list-container text-2xl font-bold">
          <h2 className="mt-16">Yo</h2>
          <div className="pl-8 font-normal text-3xl">
            <ol>
              {myGifts.map((gift: IGift, i) => (
                <li key={i}>
                  <a href={gift.link} target="_blank" rel="noreferrer">
                    {gift.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <h2 className="mt-16">Magui</h2>
          <div className="pl-8 font-normal text-3xl">
            <ol>
              {mySisterGifts.map((gift: IGift, i) => (
                <li key={i}>
                  <a href={gift.link} target="_blank" rel="noreferrer">{gift.name}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
