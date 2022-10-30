import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { BsHandIndex, BsDownload } from "react-icons/bs";
import mobile from '/static/img/Mobile.png';
import listDetail from '/static/img/ListDetail.png';
import appika from '/static/img/Appika_Workspace_Logo.png'

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <img src={mobile} className={styles.imageMobile} />
        <img src={listDetail} className={styles.imageMobile} />
          <div className={styles.LayOutLog}>

          <img src={appika} width={'65%'} className={styles.logoBackground} />
            <div style={{position:'relative'}}>
              <div className="container">
                <h1 className={styles.titleText}>{siteConfig.title}</h1>
                <p className={styles.subTitleText}>{siteConfig.tagline}</p>
              </div>

              <div className={styles.layOutButtons}>
                  <a href="/docs/hello" style={{ marginRight: 10 }} className={styles.btnTutorial}>Tutorial<BsHandIndex style={{ marginLeft: 10 }} /></a>
                  <a href="#" style={{ marginLeft: 10 }} className={styles.btnDownLoad}>Download <BsDownload style={{ marginLeft: 10 }} /></a>
              </div>
            </div>
              
        </div>
      </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
