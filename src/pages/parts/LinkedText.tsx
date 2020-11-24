import React from "react";

type Props = {
  text: string,
  textLinks: { [key: string]: string },
};

const LinkedText = ({ text, textLinks }: Props) => {
  const wordDelemiter = /[^.,\/#!$%\^&\*;:{}=\-_`~() ]+/g;
  
  const tokens = (text.match(wordDelemiter) || []).map(match => {
    const link = textLinks[match];
    if (link) return <a href={link}>{match}</a>;
    return <>{match}</>;
  });
  
  const parts = text.split(wordDelemiter)?.map((e, idx) => [<>{e}</>, tokens[idx]])?.flat() || [];

  return parts.reduce((all, e) => <>{all}{e}</>);
}

export default LinkedText;