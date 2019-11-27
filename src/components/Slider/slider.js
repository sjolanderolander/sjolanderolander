import React from "react";
import SmartSlider from "react-smart-slider";

const Slide = ({ caption }) => (
  <div className="slideDiv" style={{
    right: 'center',
    top: 'center',
    margin: 70,
    lineHeight: '1.2',
    }}>
    <h2>Historien om oss</h2>
    <p>{caption}</p>
  </div>
)

function Slider() {
  const slidesArray = [
    {
        url: "https://www.colorhexa.com/ffeb9a.png",
        childrenElem: <Slide caption="Det är lite lustigt att Max och Linda inte träffades tidigare än vad de gjorde, för de rörde sig i samma områden och kretsar redan som aftonåringar. Gröndal och Västertorp må ligga en bit ifrån varandra, men det var många tillfällen på både Hirschenkeller och Sjöberget som deras vägar korsats som unga." />
      },
      {
        url: "https://www.colorhexa.com/87a797.png",
        childrenElem: <Slide caption="Det var först på en nyårsafton 2010/2011 som Linda fick syn på den långa mörka killen i blå kostym och randig skjorta. Josefine hade ett par veckor tidigare berättat att ”hon träffat ett sånt härlig gäng som ni bara måste få träffa” - och på den vägen är det. När klockan slagit midnatt hade Nina fått en blåtå och Josefines date somnat, så Linda och Max kunde inte prata särskilt länge till." />
      },
      {
        url: "https://www.colorhexa.com/688394.png",
        childrenElem: <Slide caption="Efter nyårsafton tog de mod till sig och kontaktade varandra på facebook. Men plikten kallade och Max var borta mycket under våren. När Linda sökte chaufförer till Modeveckan tog han dock tillfället i akt. Jag kan ställa upp! Vilket jättebra sätt att lära känna henne, tänkte han. Inte visste han att de var pälsklädda damer med snorkig uppsyn som skulle skjutsas, och inte Linda." />
      },
      {
        url: "https://www.colorhexa.com/f7c8be.png",
        childrenElem: <Slide caption="Resten är historia. Livet tillsammans började med pendlande fram och tillbaka från Uppsala, sedan i ett renoveringsprojekt tillsammans på Hägerstensåsen, i en flytande sommarstuga och till sist en fabrikslokal i Järla Sjö." />
      }
  ];
  return (
    <div>
      <SmartSlider
        slides={slidesArray}
        buttonShape="square"
      />
    </div>
  );
}

export default Slider;
