import Layout from "../../components/layout/Main";
import DevelopmentDesign from "../../components/services/development-detail";

function Design() {
  return (
    <Layout title="Design detail">
      <div className="container">
        <div className="detail">
          <h1>Unieke oplossingen voor op maat gemaakte ontwikkeling.</h1>
          <h3>
            We luisteren naar onze klanten als het gaat om het ontwikkelen van
            hun website.
          </h3>
          <h3>
            Onze developers bedenken vervolgens een plan en bieden aangepaste
            webdesign services met modulaire, hoogwaardige en stijlvolle
            ontwerpen.
          </h3>
        </div>
      </div>
      <DevelopmentDesign />
      <div className="container">
        <div className="proces">
          <h2>Proces</h2>
          <div className="proces__inner">
            <div className="proces__inner-main">
              <div className="main__text">
                <span>Gesprek</span>
                <p>
                  Als eerst gaan wij met u in gesprek, om te kijken naar uw
                  wensen.
                </p>
              </div>
              <div className="main__text">
                <span>Onderzoek</span>
                <p>
                  Daarna gaan wij op onderzoek uit, de haalbaarheid van uw
                  plannen, wat de concurentie doet. Alles koppelen we terug naar
                  u en stellen een offerte op.
                </p>
              </div>
              <div className="main__text">
                <span>Development</span>
                <p>
                  Nu gaan we het product bouwen en wordt alles in elkaar gezet.
                </p>
              </div>
              <div className="main__text">
                <span>Testen</span>
                <p>
                  Als laatste stap voor de oplevering wordt alles uitvoerig
                  getest op alles, zodat het product na oplevering direct
                  gebruikt kan worden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Design;
