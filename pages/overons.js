import Layout from "../components/layout/Main";
import MissieVisie from "../components/overons/missievisie";
import Team from "../components/overons/team";

function index() {
  return (
    <div>
      <Layout title="Over ons">
        <div className="about">
          <div className="container about__hero">
            <h2>Over ons</h2>
            <p>
              Wij zijn NXTT, wij zijn een team van 3 experts in
              webontwikkeling. Onze focus ligt op het bouwen van aantrekkelijke
              en gebruiksvriendelijke websites die passen bij de visie en doelen
              van onze klanten. Of je nu een start-up bent of een gevestigd
              bedrijf, wij hebben de ervaring en expertise om jouw online
              aanwezigheid te verbeteren. We bieden op maat gemaakte oplossingen
              voor webdesign, webapplicatie-ontwikkeling, e-commerce en
              CMS-implementatie. Neem vandaag nog contact met ons op en ontdek
              hoe wij jouw bedrijf online kunnen laten groeien.
            </p>
          </div>
          <MissieVisie />
          <Team />
        </div>
      </Layout>
    </div>
  );
}
export default index;
