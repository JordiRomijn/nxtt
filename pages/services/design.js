import Layout from "../../components/layout/Main";
import DetailDesign from "../../components/services/design-detail";

function Design() {
  return (
    <Layout title="Design detail">
      <div className="container">
        <div className="detail">
          <h1>Creatieve branding op maat gemaakt</h1>
          <h3>
            Het ontwerp en de uitstraling van een website of app zijn heel
            belangrijk om duidelijk te maken waar het voor staat.
          </h3>
          <h3>
            Bij ons staat de gebruiker centraal bij het maken van een mooi en
            modern ontwerp.
          </h3>
          <h3>
            Zo zorgen we ervoor dat jouw bezoekers een goede ervaring hebben
            tijdens het gebruik van jouw website of app.
          </h3>
        </div>
      </div>
      <DetailDesign />
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
                <span>Wireframes</span>
                <p>
                  Als eerst maken we Wireframes, waarmee we inplannen wat er
                  waar en op welke pagina komt te staan.
                </p>
              </div>
              <div className="main__text">
                <span>Design</span>
                <p>
                  Vervolgens gaan we het desgin maken, waarbij we alles afmaken
                </p>
              </div>
              <div className="main__text">
                <span>Aanpassen</span>
                <p>
                  Als het design af is koppelen we het terug naar u, na uw
                  feedback passen wij het desgin aan. Dit herhaald zich een
                  aantal keer tot het design helemaal na wens is.
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
