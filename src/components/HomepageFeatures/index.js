import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Task Management",
    Svg: require("/static/img/Service/Task_Management.svg").default,
    description: (
      <>Plan and management work with project to your team's needs.</>
    ),
  },
  {
    title: "Notifications",
    Svg: require("/static/img/Service/Notifications.svg").default,
    description: (
      <>Notify when tasks are overdue and Follow up activitys from tasks.</>
    ),
  },
  {
    title: "Reminder",
    Svg: require("/static/img/Service/Reminder.svg").default,
    description: (
      <>Reminder when task is overdue and track time of your tasks.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center" style={{ marginBottom: 5 }}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
