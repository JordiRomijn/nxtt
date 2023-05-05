import Layout from "../components/layout/Main";
import Services from "../components/services/services";

function index() {
  return (
    <div>
      <Layout title="Services">
        <div className="container hero-main">
          <h2>
            Wij bieden op maat gemaakte oplossingen voor uw branding, design,
            development en SEO, met meetbaar resultaat.
          </h2>
        </div>
        <Services />
      </Layout>
    </div>
  );
}
export default index;
