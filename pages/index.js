import { useEffect, useState } from "react";
import Head from "next/head";
import { siteTitle } from "../next.config";
const API_BASE = process.env.API_BASE;

import Layout from "../components/layout/Home";
import Diensten from "../components/home/diensten";
import About from "../components/home/about";

import Link from "next/link";
import Image from "next/image";
import Pijl from "../public/assets/pijl.svg";

function index() {
  return (
    <div>
      <Layout title="Home">
        <Diensten />
        <About />
        <div className="afspraak">
          <div className="container">
            <div className="afspraak__inner">
              <h2>
                Kunnen wij iets voor <span>jou betekenen?</span>
              </h2>
              <p>
                Wil jij jouw online positie versterken, handmatige systemen
                automatiseren of een website die mee gaat met de tijd? 
              </p>
              <div className="afspraak__inner-button">
                <div className="button-full">
                  <Link href="/contact">
                    Stuur ons een bericht
                    <Image src={Pijl} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default index;
