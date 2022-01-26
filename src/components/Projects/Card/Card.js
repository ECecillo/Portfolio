// Inspired : https://codepen.io/ececillo/pen/mdqdmmK?editors=0010

import React from "react";
import { usePerspective } from "../../../hooks/Card/hooks";

export default function Card ({ data }) {
    let styles = usePerspective(20);
    let { type, title, list } = useI18n(data, I18nContext); // Data.
  
    return (
      <>
        <div className="cards" style={styles.frame}>
          <h3>{type}</h3>
          <h1>{title}</h1>
          {list.map(item => (
              // Loop throught the array of list element (could be project here) and generate our cards elements with key as name, data => data of Project element.
            <CardItem key={item.name} data={item} styles={styles} />
          ))}
        </div>
      </>
    );
  };