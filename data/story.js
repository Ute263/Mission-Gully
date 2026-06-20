const storyData = [
  {
    id: "01-start",
    title: "Mission Gully - Die verschwundene Flasche",
    image: "images/01-start.jpg",
    audio: "audio/01-start.mp3",
    text: "Regen prasselt auf den Schulhof der Antonius Grundschule. Eine Plastikflasche liegt neben dem Gully. Was macht ihr?",
    choices: [
      { label: "A: Die Flasche aufheben", target: "02-flasche-aufheben" },
      { label: "B: Weitergehen", target: "03-weitergehen" },
      { label: "C: Den Gully genauer untersuchen", target: "05-der-gully" }
    ]
  },
  {
    id: "02-flasche-aufheben",
    title: "Die Flasche aufheben",
    image: "images/02-flasche-aufheben.jpg",
    audio: "audio/02-flasche-aufheben.mp3",
    text: "Ihr hebt die Flasche auf und bringt sie dorthin, wo sie richtig entsorgt werden kann. So gelangt sie nicht in den Gully.",
    choices: [
      { label: "🏠 Zurück zum Anfang", target: "01-start" }
    ]
  },
  {
    id: "03-weitergehen",
    title: "Weitergehen",
    image: "images/03-weitergehen.jpg",
    audio: "audio/03-weitergehen.mp3",
    text: "Ihr geht weiter. Der Regen wird stärker. Die Flasche rutscht langsam näher an den Gully.",
    choices: [
      { label: "A: Zum Rohr schauen", target: "04-das-rohr" },
      { label: "B: Zur Niers gehen", target: "07-die-niers" },
      { label: "C: Den Gully genauer untersuchen", target: "05-der-gully" }
    ]
  },
  {
    id: "04-das-rohr",
    title: "Das Rohr",
    image: "images/04-das-rohr.jpg",
    audio: "audio/04-das-rohr.mp3",
    text: "Im Rohr fließt Wasser. Die Flasche kann mitgerissen werden und an ganz verschiedenen Orten wieder auftauchen.",
    choices: [
      { label: "A: Zur Niers folgen", target: "07-die-niers" },
      { label: "B: Zur Kläranlage folgen", target: "08-klaeranlage" },
      { label: "C: Bis zur Nordsee treiben lassen", target: "19-nordsee" }
    ]
  },
  {
    id: "05-der-gully",
    title: "Der Gully",
    image: "images/05-der-gully.jpg",
    audio: "audio/05-der-gully.mp3",
    text: "Ihr schaut genau hin. Der Gully ist ein Eingang für Regenwasser. Was dort hineinfällt, kann weit weggespült werden.",
    choices: [
      { label: "Weiter", target: "06-gully-offen" }
    ]
  },
  {
    id: "06-gully-offen",
    title: "Gully offen",
    image: "images/06-gully-offen.jpg",
    audio: "audio/06-gully-offen.mp3",
    text: "Die Flasche verschwindet im Gully. Unter der Straße beginnt ihre Reise durch Rohre und Wasserwege.",
    choices: [
      { label: "Weiter", target: "04-das-rohr" }
    ]
  },
  {
    id: "07-die-niers",
    title: "Die Niers",
    image: "images/07-die-niers.jpg",
    audio: "audio/07-die-niers.mp3",
    text: "Die Flasche erreicht die Niers. Jetzt kommt es darauf an, ob jemand sie bemerkt oder ob sie weiter treibt.",
    choices: [
      { label: "A: Jemand entdeckt die Flasche", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Sie treibt in den Rhein", target: "09-im-rhein" },
      { label: "C: Sie gelangt zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "08-klaeranlage",
    title: "Kläranlage",
    image: "images/08-klaeranlage.jpg",
    audio: "audio/08-klaeranlage.mp3",
    text: "In der Kläranlage kann viel Schmutz aus dem Wasser geholt werden. Plastik gehört trotzdem nicht ins Wasser.",
    choices: [
      { label: "A: Die Flasche wird herausgeholt", target: "32-ende" }
    ]
  },
  {
    id: "09-im-rhein",
    title: "Im Rhein",
    image: "images/09-im-rhein.jpg",
    audio: "audio/09-im-rhein.mp3",
    text: "Der Rhein ist groß und stark. Die Flasche kann nun viele Kilometer weitergetragen werden.",
    choices: [
      { label: "A: Jemand entdeckt sie", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Sie landet im Hafen", target: "13-im-hafen" },
      { label: "C: Sie treibt weiter", target: "12-die-flasche-treibt-weiter" }
    ]
  },
  {
    id: "10-jemand-entdeckt-die-flasche",
    title: "Jemand entdeckt die Flasche",
    image: "images/10-jemand-entdeckt-die-flasche.jpg",
    audio: "audio/10-jemand-entdeckt-die-flasche.mp3",
    text: "Jemand sieht die Flasche und sammelt sie ein. So kann aus einem kleinen Moment etwas Gutes werden.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "11-der-sturm-loest-die-flasche",
    title: "Der Sturm löst die Flasche",
    image: "images/11-der-sturm-loest-die-flasche.jpg",
    audio: "audio/11-der-sturm-loest-die-flasche.mp3",
    text: "Ein Sturm bewegt das Wasser. Die Flasche löst sich und wird wieder mitgerissen.",
    choices: [
      { label: "Weiter", target: "09-im-rhein" }
    ]
  },
  {
    id: "12-die-flasche-treibt-weiter",
    title: "Die Flasche treibt weiter",
    image: "images/12-die-flasche-treibt-weiter.jpg",
    audio: "audio/12-die-flasche-treibt-weiter.mp3",
    text: "Die Flasche dreht sich im Wasser. Noch kann sie gefunden werden, aber die Reise geht weiter.",
    choices: [
      { label: "A: Jemand entdeckt sie", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Sie erreicht die Nordsee", target: "19-nordsee" },
      { label: "C: Sie gelangt in den Hafen", target: "13-im-hafen" }
    ]
  },
  {
    id: "13-im-hafen",
    title: "Im Hafen",
    image: "images/13-im-hafen.jpg",
    audio: "audio/13-im-hafen.mp3",
    text: "Im Hafen ist viel los. Zwischen Schiffen, Seilen und Wellen kann die Flasche leicht übersehen werden.",
    choices: [
      { label: "A: Ein Hafenarbeiter sieht sie", target: "14-hafenarbeiter" },
      { label: "B: Sie treibt weiter", target: "15-hafen-weiter" },
      { label: "C: Sie hängt fest", target: "16-hafen-flasche-haengt-fest" }
    ]
  },
  {
    id: "14-hafenarbeiter",
    title: "Hafenarbeiter",
    image: "images/14-hafenarbeiter.jpg",
    audio: "audio/14-hafenarbeiter.mp3",
    text: "Ein Hafenarbeiter sammelt die Flasche ein. Sie bleibt nicht im Wasser und kann richtig entsorgt werden.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "15-hafen-weiter",
    title: "Hafen weiter",
    image: "images/15-hafen-weiter.jpg",
    audio: "audio/15-hafen-weiter.mp3",
    text: "Die Flasche verlässt den Hafen. Wind und Strömung entscheiden, wohin sie als Nächstes gelangt.",
    choices: [
      { label: "A: Zur Nordsee", target: "19-nordsee" },
      { label: "B: In ein Fischernetz", target: "17-fischernetz" },
      { label: "C: An den Strand", target: "20-am-strand" }
    ]
  },
  {
    id: "16-hafen-flasche-haengt-fest",
    title: "Hafen: Flasche hängt fest",
    image: "images/16-hafen-flasche-haengt-fest.jpg",
    audio: "audio/16-hafen-flasche-haengt-fest.mp3",
    text: "Die Flasche hängt zwischen Steinen und Holz fest. Dort kann sie gefunden werden oder langsam zerbrechen.",
    choices: [
      { label: "A: Sie wird gefunden", target: "24-hafen-gefunden" },
      { label: "B: Ein Sturm löst sie", target: "11-der-sturm-loest-die-flasche" },
      { label: "C: Sie zerfällt zu Mikroplastik", target: "25-hafen-microplastik" }
    ]
  },
  {
    id: "17-fischernetz",
    title: "Fischernetz",
    image: "images/17-fischernetz.jpg",
    audio: "audio/17-fischernetz.mp3",
    text: "Die Flasche verfängt sich in einem Fischernetz. Jetzt kommt es darauf an, was die Fischer damit machen.",
    choices: [
      { label: "A: Die Fischer entsorgen sie richtig", target: "18-fischer-gut" },
      { label: "B: Sie fällt wieder ins Wasser", target: "21-fischer-flasche-weiter" },
      { label: "C: Die Fischer nehmen sie mit", target: "18-fischer-gut" }
    ]
  },
  {
    id: "18-fischer-gut",
    title: "Fischer gut",
    image: "images/18-fischer-gut.jpg",
    audio: "audio/18-fischer-gut.mp3",
    text: "Die Fischer bringen die Flasche an Land und entsorgen sie richtig. Das Meer bleibt ein Stück sauberer.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "19-nordsee",
    title: "Nordsee",
    image: "images/19-nordsee.jpg",
    audio: "audio/19-nordsee.mp3",
    text: "Die Flasche erreicht die Nordsee. Sie kann an den Strand gespült werden oder noch weiter ins Meer treiben.",
    choices: [
      { label: "A: An den Strand", target: "20-am-strand" },
      { label: "B: In einen Müllstrudel", target: "26-muellstrudel-pos" },
      { label: "C: Weiter aufs offene Meer", target: "28-offenes-meer" }
    ]
  },
  {
    id: "20-am-strand",
    title: "Am Strand",
    image: "images/20-am-strand.jpg",
    audio: "audio/20-am-strand.mp3",
    text: "Die Flasche liegt am Strand. Menschen können sie einsammeln, aber eine Flut kann sie auch wieder mitnehmen.",
    choices: [
      { label: "A: Jemand sammelt sie ein", target: "23-am-strand" },
      { label: "B: Die Flut nimmt sie mit", target: "40-flut" },
      { label: "C: Sie bleibt liegen", target: "31-flasche-bleibt-liegen" }
    ]
  },
  {
    id: "21-fischer-flasche-weiter",
    title: "Fischer: Flasche weiter",
    image: "images/21-fischer-flasche-weiter.jpg",
    audio: "audio/21-fischer-flasche-weiter.mp3",
    text: "Die Flasche fällt wieder ins Meer. Jetzt treibt sie weiter und kann noch schwerer gefunden werden.",
    choices: [
      { label: "A: Aufs offene Meer", target: "28-offenes-meer" },
      { label: "B: An den Strand", target: "20-am-strand" }
    ]
  },
  {
    id: "22-weiter-offenes-meer",
    title: "Weiter offenes Meer",
    image: "images/22-weiter-offenes-meer.jpg",
    audio: "audio/22-weiter-offenes-meer.mp3",
    text: "Weit draußen im Meer bleibt Plastik oft sehr lange unterwegs. Es kann zerbrechen und Tiere gefährden.",
    choices: [
      { label: "A: Jahrelang treiben", target: "38-jahrelang" },
      { label: "B: Zum Müllteppich", target: "39-muellteppich" },
      { label: "C: Zu Mikroplastik werden", target: "37-mikroplastik" }
    ]
  },
  {
    id: "23-am-strand",
    title: "Am Strand gefunden",
    image: "images/23-am-strand.jpg",
    audio: "audio/23-am-strand.mp3",
    text: "Jemand sammelt die Flasche am Strand ein. So gelangt sie nicht zurück ins Meer.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "24-hafen-gefunden",
    title: "Hafen gefunden",
    image: "images/24-hafen-gefunden.jpg",
    audio: "audio/24-hafen-gefunden.mp3",
    text: "Die Flasche wird im Hafen gefunden. Richtig entsorgt ist sie keine Gefahr mehr für Tiere und Wasser.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "25-hafen-microplastik",
    title: "Hafen: Mikroplastik",
    image: "images/25-hafen-microplastik.jpg",
    audio: "audio/25-hafen-microplastik.mp3",
    text: "Die Flasche wird spröde und zerfällt in winzige Teile. Diese kleinen Stücke nennt man Mikroplastik.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "26-muellstrudel-pos",
    title: "Müllstrudel positiv",
    image: "images/26-muellstrudel-pos.jpg",
    audio: "audio/26-muellstrudel-pos.mp3",
    text: "Die Flasche wird aus dem Wasser geholt. Aufräumen hilft, aber am besten kommt Plastik gar nicht erst hinein.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "27-muellstrudel-neg",
    title: "Müllstrudel negativ",
    image: "images/27-muellstrudel-neg.jpg",
    audio: "audio/27-muellstrudel-neg.mp3",
    text: "Die Flasche treibt mit anderem Müll weiter. Im Meer ist es sehr schwer, alles wieder einzusammeln.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "28-offenes-meer",
    title: "Offenes Meer",
    image: "images/28-offenes-meer.jpg",
    audio: "audio/28-offenes-meer.mp3",
    text: "Auf dem offenen Meer ist die Flasche weit weg vom Ufer. Wind, Wellen und Strömungen tragen sie weiter.",
    choices: [
      { label: "A: Sie wird entdeckt", target: "32-ende" },
      { label: "B: Sie treibt jahrelang weiter", target: "38-jahrelang" }
    ]
  },
  {
    id: "29-muellteppich",
    title: "Müllteppich",
    image: "images/29-muellteppich.jpg",
    audio: "audio/29-muellteppich.mp3",
    text: "Viele Plastikteile sammeln sich an einer Stelle. Das sieht gefährlich aus und ist es auch für Tiere.",
    choices: [
      { label: "A: Aufräumen hilft", target: "32-ende" },
      { label: "B: Der Müll treibt weiter", target: "39-muellteppich" }
    ]
  },
  {
    id: "30-sturm",
    title: "Sturm",
    image: "images/30-sturm.jpg",
    audio: "audio/30-sturm.mp3",
    text: "Ein Sturm wirbelt das Meer auf. Die Flasche kann an Land gespült oder noch weiter hinausgetragen werden.",
    choices: [
      { label: "A: Sie wird gefunden", target: "32-ende" },
      { label: "B: Die Flut trägt sie weiter", target: "40-flut" }
    ]
  },
  {
    id: "31-flasche-bleibt-liegen",
    title: "Flasche bleibt liegen",
    image: "images/31-flasche-bleibt-liegen.jpg",
    audio: "audio/31-flasche-bleibt-liegen.mp3",
    text: "Die Flasche bleibt liegen. Sonne, Sand und Zeit machen das Plastik brüchig.",
    choices: [
      { label: "A: Jemand sammelt sie später ein", target: "32-ende" },
      { label: "B: Sie wird zu Mikroplastik", target: "37-mikroplastik" }
    ]
  },
  {
    id: "32-ende",
    title: "Ende",
    image: "images/32-ende.jpg",
    audio: "audio/32-ende.mp3",
    text: "Die Mission zeigt: Jede Flasche zählt. Wenn Müll richtig entsorgt wird, schützt ihr Bach, Fluss und Meer.",
    choices: [
      { label: "🏠 Zurück zum Anfang", target: "01-start" }
    ]
  },
  {
    id: "33-zusatz-klaranlage-1",
    title: "Zusatz: Kläranlage 1",
    image: "images/33-zusatz-klaranlage-1.jpg",
    audio: "audio/33-zusatz-klaranlage-1.mp3",
    text: "Zusatzseite zur Kläranlage. Hier kann später genauer erklärt werden, wie grober Schmutz aus dem Wasser geholt wird.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "34-zusatz-klaranlage-2",
    title: "Zusatz: Kläranlage 2",
    image: "images/34-zusatz-klaranlage-2.jpg",
    audio: "audio/34-zusatz-klaranlage-2.mp3",
    text: "Zusatzseite zur Kläranlage. Hier kann später stehen, welche Stoffe im Wasser bleiben können.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "35-zusatz-klaranlage-3",
    title: "Zusatz: Kläranlage 3",
    image: "images/35-zusatz-klaranlage-3.jpg",
    audio: "audio/35-zusatz-klaranlage-3.mp3",
    text: "Zusatzseite zur Kläranlage. Hier kann später erklärt werden, warum Müll nie in den Gully gehört.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "36-zusatz-klaranlage-4",
    title: "Zusatz: Kläranlage 4",
    image: "images/36-zusatz-klaranlage-4.jpg",
    audio: "audio/36-zusatz-klaranlage-4.mp3",
    text: "Zusatzseite zur Kläranlage. Diese Szene ist vorbereitet und kann später einfach verlinkt werden.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "37-mikroplastik",
    title: "Mikroplastik",
    image: "images/37-mikroplastik.jpg",
    audio: "audio/37-mikroplastik.mp3",
    text: "Aus großem Plastik werden winzige Teile. Mikroplastik ist schwer zu sehen und sehr schwer wieder zu entfernen.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "38-jahrelang",
    title: "Jahrelang",
    image: "images/38-jahrelang.jpg",
    audio: "audio/38-jahrelang.mp3",
    text: "Die Flasche kann jahrelang im Meer treiben. Plastik verschwindet nicht einfach.",
    choices: [
      { label: "Zurück aufs offene Meer", target: "28-offenes-meer" }
    ]
  },
  {
    id: "39-muellteppich",
    title: "Müllteppich",
    image: "images/39-muellteppich.jpg",
    audio: "audio/39-muellteppich.mp3",
    text: "Viele Teile sammeln sich im Meer. Für Tiere kann das gefährlich werden, weil sie Plastik mit Nahrung verwechseln.",
    choices: [
      { label: "Ende ansehen", target: "32-ende" }
    ]
  },
  {
    id: "40-flut",
    title: "Flut",
    image: "images/40-flut.jpg",
    audio: "audio/40-flut.mp3",
    text: "Die Flut kommt und nimmt die Flasche wieder mit. So kann Müll vom Strand zurück ins Meer gelangen.",
    choices: [
      { label: "A: Weiter aufs offene Meer", target: "28-offenes-meer" },
      { label: "B: Ein Sturm kommt auf", target: "30-sturm" }
    ]
  }
];

window.storyData = storyData;
