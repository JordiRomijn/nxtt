import Layout from "../../components/layout/Main";
import SeoDetail from "../../components/services/seo-detail";

function Design() {
  return (
    <Layout title="Design detail">
      <div className="container">
        <div className="detail">
          <h1>Wij bieden op resultaat gerichte oplossingen voor uw merk.</h1>
          <h3>
            Meer dan 3,5 miljard zoekopdrachten worden dagelijks verwerkt door
            Google. Hiervan zijn 500 miljoen vragen die nog nooit eerder in de
            zoekbalk zijn ingevoerd.
          </h3>
          <h3>
            Deze aantallen hebben een enorme impact op de manier waarop wij
            informatie zoeken en vinden op het internet.
          </h3>
        </div>
      </div>
      <SeoDetail />
    </Layout>
  );
}

export default Design;
