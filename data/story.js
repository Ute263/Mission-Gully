const storyData = [
  {
    id: "01-start",
    title: "Mission Gully - Die verschwundene Flasche",
    image: "images/01-start.jpg",
    text: "Regen prasselt auf den Schulhof der Antonius Grundschule. Eine Plastikflasche liegt neben dem Gully.",
    infoText: "Regenwasser läuft auf Straßen und Schulhöfen oft direkt in den Gully. Müll kann dabei mitgespült werden.",
    choices: [
      { label: "A: Die Flasche aufheben", target: "02-flasche-aufheben" },
      { label: "B: Weitergehen", target: "03-weitergehen" },
      { label: "C: Den Gully genauer untersuchen", target: "05-der-gully" }
    ]
  },
  {
    id: "02-flasche-aufheben",
    title: "Flasche aufheben",
    image: "images/02-flasche-aufheben.jpg",
    text: "Toll, dass ihr euch für das Beseitigen des Mülls entschieden habt. Ihr hebt die Flasche auf und werft sie in den Mülleimer. Für diese Flasche endet die Reise hier. Doch die Geschichte kann auch einen ganz anderen Verlauf nehmen. Was passiert, wenn eine Flasche nicht aufgehoben wird und durch den Regen in den Gully und weiter in das Rohr gelangt?",
    infoText: "Müll aufheben hilft sofort. Eine Flasche, die richtig entsorgt wird, kann nicht mehr in Bach, Fluss oder Meer gelangen.",
    ending: "good",
    choices: [
      { label: "Anderen Verlauf ansehen", target: "04-das-rohr" },
      { label: "Zurück zum Anfang", target: "01-start" }
    ]
  },
  {
    id: "03-weitergehen",
    title: "Weitergehen",
    image: "images/03-weitergehen.jpg",
    text: "Ihr geht weiter. Der Regen wird stärker. Das Wasser fließt zum Gully. Die Flasche gerät in Bewegung und wird mitgerissen.",
    infoText: "Schon ein kurzer Regenschauer kann leichten Müll bewegen. Plastikflaschen schwimmen besonders leicht mit.",
    choices: [
      { label: "A: Durch das Rohr", target: "04-das-rohr" },
      { label: "B: Zur Niers", target: "07-die-niers" },
      { label: "C: Zum Gully", target: "05-der-gully" }
    ]
  },
  {
    id: "04-das-rohr",
    title: "Das Rohr",
    image: "images/04-das-rohr.jpg",
    text: "Die Flasche wird vom Wasser erfasst. Sie verschwindet in einem Rohr unter der Schule.",
    infoText: "Unter Straßen und Schulhöfen gibt es viele Rohre. Sie leiten Regenwasser weiter, oft bis in Bäche oder Flüsse.",
    choices: [
      { label: "A: Zur Niers", target: "07-die-niers" },
      { label: "B: Zur Kläranlage", target: "08-klaeranlage" },
      { label: "C: Zur Nordsee", target: "19-nordsee" }
    ]
  },
  {
    id: "05-der-gully",
    title: "Der Gully",
    image: "images/05-der-gully.jpg",
    text: "Der Deckel ruckelt. Es kommt ein seltsames Geräusch von unten. Da bewegt sich etwas.",
    infoText: "Ein Gully ist kein Mülleimer. Was dort hineinfällt, kann in der Natur wieder auftauchen.",
    choices: [
      { label: "Weiter", target: "06-gully-offen" }
    ]
  },
  {
    id: "06-gully-offen",
    title: "Gully offen",
    image: "images/06-gully-offen.jpg",
    text: "Im Gully liegt schon Müll. Das Wasser kann alles mitnehmen und weiterschieben. Alles, was hier hinein fällt, kann bis ins Meer gelangen.",
    infoText: "Blätter, Sand und Müll können Gullys verstopfen. Dann läuft Wasser schlechter ab und Müll wird weitergespült.",
    choices: [
      { label: "Weiter ins Rohr", target: "04-das-rohr" }
    ]
  },
  {
    id: "07-die-niers",
    title: "Die Niers",
    image: "images/07-die-niers.jpg",
    text: "Die Flasche rauscht durch das Rohr und kommt im Bach heraus. Sie ist nicht mehr aufzuhalten. Sie treibt mit der Strömung.",
    infoText: "Die Niers ist ein Fluss in Nordrhein-Westfalen. Kleine Flüsse können Müll in größere Flüsse weitertragen.",
    choices: [
      { label: "A: Jemand findet sie", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Weiter zum Rhein", target: "09-im-rhein" },
      { label: "C: Zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "08-klaeranlage",
    title: "Kläranlage",
    image: "images/08-klaeranlage.jpg",
    text: "Die Flasche wird mit dem Wasser in die Kläranlage gespült. Hier wird das Wasser gereinigt. Zuerst fließt es durch große Metallgitter. Diese Gitter halten Müll fest, bevor das Wasser weiterfließt. Die Flasche bleibt im Gitter hängen. Die Flasche wird aus dem Wasser geholt und richtig entsorgt.",
    infoText: "Eine Kläranlage kann viel Schmutz aus dem Wasser holen. Müll sollte trotzdem nie in den Gully gelangen.",
    ending: "good",
    choices: [
      { label: "Grobgitter ansehen", target: "33-klaeranlage-grobgitter" },
      { label: "Rechen ansehen", target: "34-klaeranlage-rechen" },
      { label: "Becken ansehen", target: "35-klaeranlage-becken" },
      { label: "Sauberes Wasser ansehen", target: "36-klaeranlage-sauberes-wasser" },
      { label: "Gutes Ende", target: "32-ende" }
    ]
  },
  {
    id: "09-im-rhein",
    title: "Im Rhein",
    image: "images/09-im-rhein.jpg",
    text: "Die Flasche ist in den Rhein gelangt. Der Fluss ist sehr breit und tief. Es fahren große Schiffe darauf und das Wasser fließt schnell.",
    infoText: "Der Rhein fließt bis in die Nordsee. Deshalb kann Müll aus dem Inland am Ende im Meer landen.",
    choices: [
      { label: "A: Jemand findet sie", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Zum Hafen", target: "13-im-hafen" },
      { label: "C: Weiter treiben", target: "12-flasche-treibt-weiter" }
    ]
  },
  {
    id: "10-jemand-entdeckt-die-flasche",
    title: "Kinder finden die Flasche am Ufer",
    image: "images/10-jemand-entdeckt-die-flasche.jpg",
    text: "Die Flasche bleibt an Ästen am Ufer hängen. Ein paar Tage später entdecken zwei Kinder sie bei einer Aufräumaktion. Sie nehmen die Flasche mit und entsorgen sie richtig.",
    infoText: "Aus einer Plastikflasche kann zum Beispiel eine neue Flasche, eine Fleecejacke oder sogar eine Spielfigur werden.",
    ending: "good",
    choices: [
      { label: "Weiter zum Ende", target: "32-ende" }
    ]
  },
  {
    id: "11-sturm-loest-die-flasche",
    title: "Sturm löst die Flasche",
    image: "images/11-sturm-loest-die-flasche.jpg",
    text: "Ein starker Sturm zieht auf. Der Wind reißt an den Ästen und Zweigen. Die Flasche wird losgerissen und wieder mit der Strömung mitgerissen.",
    infoText: "Bei Sturm bewegen sich Wasser und Äste stärker. Festhängender Müll kann dadurch wieder losgerissen werden.",
    choices: [
      { label: "Weiter zum Rhein", target: "09-im-rhein" }
    ]
  },
  {
    id: "12-flasche-treibt-weiter",
    title: "Flasche treibt weiter",
    image: "images/12-flasche-treibt-weiter.jpg",
    text: "Die Strömung nimmt die Flasche mit. Sie treibt den Fluss weiter hinab. Auf ihrem Weg kommt sie an Städten, Feldern und Wäldern vorbei. Niemand bemerkt sie. Die Reise geht weiter.",
    infoText: "Müll im Wasser ist schwer zu finden. Je länger er unterwegs ist, desto schwieriger wird das Einsammeln.",
    choices: [
      { label: "A: Jemand findet sie", target: "10-jemand-entdeckt-die-flasche" },
      { label: "B: Zur Nordsee", target: "19-nordsee" },
      { label: "C: Zum Hafen", target: "13-im-hafen" }
    ]
  },
  {
    id: "13-im-hafen",
    title: "Im Hafen",
    image: "images/13-im-hafen.jpg",
    text: "Die Strömung treibt die Flasche in einen Hafen. Hier legen große Schiffe an und entladen ihre Fracht. Im Hafenwasser sammelt sich leider auch viel Müll. Die Flasche kann hier lange treiben.",
    infoText: "In Häfen treffen Flüsse, Schiffe und Strömungen zusammen. Dort kann sich Müll leicht sammeln.",
    choices: [
      { label: "A: Hafenarbeiter hilft", target: "14-hafenarbeiter" },
      { label: "B: Weiter hinaus", target: "15-hafen-weiter" },
      { label: "C: Bleibt hängen", target: "16-hafen-flasche-haengt-fest" }
    ]
  },
  {
    id: "14-hafenarbeiter",
    title: "Hafenarbeiter",
    image: "images/14-hafenarbeiter.jpg",
    text: "Ein Hafenarbeiter sieht die Flasche im Wasser treiben. Er fischt sie mit einer Zange heraus. Die Flasche wirft er in den Mülleimer. So kann sie recycelt werden und die Reise endet hier.",
    infoText: "Wer Müll sicher aus dem Wasser holt und richtig entsorgt, schützt Tiere und hält den Hafen sauber.",
    ending: "good",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "15-hafen-weiter",
    title: "Hafen weiter",
    image: "images/15-hafen-weiter.jpg",
    text: "Die Strömung und die Wellen eines großen Schiffes ziehen die Flasche aus dem Hafen hinaus. Sie verlässt den Hafen und gelangt auf das offene Wasser.",
    infoText: "Große Schiffe erzeugen Wellen. Diese Wellen können schwimmenden Müll wieder in Bewegung bringen.",
    choices: [
      { label: "A: Zur Nordsee", target: "19-nordsee" },
      { label: "B: Ins Fischernetz", target: "17-fischernetz" },
      { label: "C: Zum Strand", target: "20-am-strand-entscheidung" }
    ]
  },
  {
    id: "16-hafen-flasche-haengt-fest",
    title: "Flasche hängt fest",
    image: "images/16-hafen-flasche-haengt-fest.jpg",
    text: "Die Flasche bleibt im Hafen stecken. Sie kann sich nicht weiterbewegen und treibt an Ort und Stelle.",
    infoText: "Auch wenn Müll festhängt, ist er nicht harmlos. Sonne und Wellen können Plastik langsam beschädigen.",
    choices: [
      { label: "A: Im Hafen gefunden", target: "24-hafen-gefunden" },
      { label: "B: Sturm löst sie", target: "11-sturm-loest-die-flasche" },
      { label: "C: Wird Mikroplastik", target: "25-hafen-mikroplastik" }
    ]
  },
  {
    id: "17-fischernetz",
    title: "Fischernetz",
    image: "images/17-fischernetz.jpg",
    text: "Starke Wellen und Strömungen spülen die Flasche in ein Fischernetz. Beim Einholen des Netzes entdecken die Fischer sie zwischen Algen und Fischen.",
    infoText: "Fischernetze holen nicht nur Fische aus dem Wasser. Manchmal bleibt darin auch Müll hängen.",
    choices: [
      { label: "A: Richtig entsorgen", target: "18-fischer-gut" },
      { label: "B: Zurück ins Wasser", target: "21-fischer-flasche-weiter" },
      { label: "C: Mit an Land nehmen", target: "18-fischer-gut" }
    ]
  },
  {
    id: "18-fischer-gut",
    title: "Fischer gut",
    image: "images/18-fischer-gut.jpg",
    text: "Die Fischer bringen die Flasche an Land und entsorgen sie im richtigen Behälter. So kann sie recycelt werden und die Reise endet hier.",
    infoText: "Wenn Müll an Land gebracht wird, kann er sortiert und richtig behandelt werden. Im Meer geht das nicht.",
    ending: "good",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "19-nordsee",
    title: "Nordsee",
    image: "images/19-nordsee.jpg",
    text: "Nach einer langen Reise durch Flüsse und den Hafen treibt die Flasche hinaus aufs offene Meer. Die Nordsee ist rau und weit. Strömungen, Wind und Wellen bestimmen nun ihren Weg.",
    infoText: "Plastik braucht sehr lange, um zu zerfallen. In dieser Zeit kann es viele Tiere und Lebensräume im Meer gefährden.",
    choices: [
      { label: "A: An den Strand", target: "20-am-strand-entscheidung" },
      { label: "B: In den Müllstrudel", target: "26-muellstrudel-positiv" },
      { label: "C: Weiter aufs Meer", target: "22-weiter-offenes-meer" }
    ]
  },
  {
    id: "20-am-strand-entscheidung",
    title: "Am Strand",
    image: "images/20-am-strand-entscheidung.jpg",
    text: "Die Strömung und der Wind tragen die Flasche bis an den Strand der Nordsee. Hier bleibt sie im Sand liegen.",
    infoText: "An Stränden wird sichtbar, was im Meer schwimmt. Viel Müll kommt mit Wind, Wellen und Strömung an Land.",
    choices: [
      { label: "A: Strandreinigung", target: "23-am-strand-gutes-ende" },
      { label: "B: Flut nimmt sie mit", target: "40-flut" },
      { label: "C: Liegen lassen", target: "31-flasche-bleibt-liegen" }
    ]
  },
  {
    id: "21-fischer-flasche-weiter",
    title: "Fischer: Flasche weiter",
    image: "images/21-fischer-flasche-weiter.jpg",
    text: "Die Flasche treibt im Meer. Sie kann von Meeresströmungen weit weg getragen werden. Tiere können sie mit Nahrung verwechseln oder sich daran verletzen.",
    infoText: "Meerestiere können Plastik verschlucken oder sich darin verfangen. Beides kann gefährlich für sie sein.",
    choices: [
      { label: "A: Offenes Meer", target: "22-weiter-offenes-meer" },
      { label: "B: Zum Strand", target: "20-am-strand-entscheidung" }
    ]
  },
  {
    id: "22-weiter-offenes-meer",
    title: "Weiter offenes Meer",
    image: "images/22-weiter-offenes-meer.jpg",
    text: "Die Flasche treibt weiter hinaus aufs offene Meer. Hier ist das Wasser tief und weit. Die Strömungen sind stark und ziehen die Flasche immer weiter von der Küste weg.",
    infoText: "Auf dem offenen Meer gibt es keine einfache Müllabfuhr. Was dort landet, bleibt oft sehr lange unterwegs.",
    choices: [
      { label: "A: Noch weiter hinaus", target: "28-offenes-meer" },
      { label: "B: Zum Müllteppich", target: "29-muellteppich" },
      { label: "C: Mikroplastik", target: "37-mikroplastik" }
    ]
  },
  {
    id: "23-am-strand-gutes-ende",
    title: "Strandreinigung",
    image: "images/23-am-strand-gutes-ende.jpg",
    text: "Ein Mensch entdeckt die Flasche bei einer Strandreinigung. Die Flasche gelangt in den Recyclingmüll. Aus ihr können neue Produkte werden.",
    infoText: "Strandreinigungen helfen sofort. Noch besser ist es, Müll schon vorher richtig zu entsorgen.",
    ending: "good",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "24-hafen-gefunden",
    title: "Hafen gefunden",
    image: "images/24-hafen-gefunden.jpg",
    text: "Die Flasche bleibt zwischen Pfählen und Seilen hängen. Die Zeit vergeht. Eines Tages wird die Flasche entdeckt. Ein Mensch nimmt sie mit und wirft sie in den Mülleimer.",
    infoText: "Auch spät gefundener Müll kann noch richtig entsorgt werden. Jede eingesammelte Flasche zählt.",
    ending: "good",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "25-hafen-mikroplastik",
    title: "Hafen: Mikroplastik",
    image: "images/25-hafen-mikroplastik.jpg",
    text: "Sturm und Wellen zersetzen die Plastikflasche in immer kleinere Teile. Aus kleinen Teilen wird Mikroplastik. Mikroplastik ist winzig klein. Tiere verwechseln es mit Nahrung. Es kann in der Natur und am Ende auch in uns Menschen landen.",
    infoText: "Mikroplastik ist so klein, dass man es oft kaum sehen kann. Gerade deshalb ist es schwer wieder einzusammeln.",
    ending: "warning",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "26-muellstrudel-positiv",
    title: "Müllstrudel: Gefunden",
    image: "images/26-muellstrudel-positiv.jpg",
    text: "Viele Strömungen im Meer ziehen die Flasche in einen großen Müllstrudel. Manchmal entdecken Forscher oder Fischer die Flasche bei ihren Einsätzen im Meer. Sie sammeln den Müll ein und bringen ihn an Land.",
    infoText: "Aufräumaktionen im Meer sind wichtig. Sie sind aber viel schwieriger als Müll direkt an Land zu vermeiden.",
    ending: "good",
    choices: [
      { label: "Gutes Ende", target: "32-ende" },
      { label: "Anderer Verlauf", target: "27-muellstrudel-negativ" }
    ]
  },
  {
    id: "27-muellstrudel-negativ",
    title: "Müllstrudel: Weiter",
    image: "images/27-muellstrudel-negativ.jpg",
    text: "Viele Strömungen im Meer ziehen die Flasche in einen großen Müllstrudel. Dort bleibt sie und treibt immer weiter. Sonne, Wellen und Zeit machen das Plastik brüchig. Mit der Zeit wird es zu Mikroplastik.",
    infoText: "In Müllstrudeln sammeln sich viele kleine und große Plastikteile. Für Meerestiere kann das gefährlich werden.",
    ending: "warning",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "28-offenes-meer",
    title: "Offenes Meer",
    image: "images/28-offenes-meer.jpg",
    text: "Die Flasche entkommt dem Fluss und treibt hinaus aufs offene Meer. Der Wind und die Strömungen tragen sie immer weiter fort. Niemand sieht sie. Niemand holt sie heraus. Sie ist jetzt jahrelang unterwegs.",
    infoText: "Meeresströmungen können Dinge über sehr weite Strecken tragen. Darum wird Müll manchmal weit weg von der Stelle gefunden, an der er ins Wasser gefallen ist.",
    choices: [
      { label: "Weiter", target: "38-jahrelang" }
    ]
  },
  {
    id: "29-muellteppich",
    title: "Müllteppich",
    image: "images/29-muellteppich.jpg",
    text: "Die Flasche wird Teil eines riesigen Müllteppichs im Ozean. Hier sammelt sich Plastik aus der ganzen Welt. Tiere halten es für Nahrung oder verheddern sich darin.",
    infoText: "Ein Müllteppich ist keine feste Insel. Viele Teile schwimmen im Wasser und verteilen sich über große Flächen.",
    choices: [
      { label: "Weiter", target: "39-muellteppich-zusatz" }
    ]
  },
  {
    id: "30-sturm",
    title: "Sturm",
    image: "images/30-sturm.jpg",
    text: "Ein Sturm zieht auf. Starke Wellen reißen die Flasche los. Sie wird wieder mitgerissen und treibt weiter hinaus. Der Weg geht zurück aufs offene Meer.",
    infoText: "Stürme verteilen Müll im Meer immer wieder neu. Dadurch ist er noch schwerer einzusammeln.",
    choices: [
      { label: "Weiter", target: "40-flut" }
    ]
  },
  {
    id: "31-flasche-bleibt-liegen",
    title: "Flasche bleibt liegen",
    image: "images/31-flasche-bleibt-liegen.jpg",
    text: "Die Flasche bleibt am Strand liegen. Sonne, Wind und Wellen setzen ihr mit der Zeit zu. Stück für Stück zerfällt sie in kleine Teile. Aus Plastik wird Mikroplastik.",
    infoText: "Wenn Müll draußen liegen bleibt, verschwindet er nicht einfach. Er verändert sich und kann der Natur lange schaden.",
    choices: [
      { label: "Weiter", target: "37-mikroplastik" }
    ]
  },
  {
    id: "32-ende",
    title: "Mission beendet",
    image: "images/32-ende.jpg",
    text: "Jede Entscheidung verändert die Reise. Kleine Entscheidungen können große Wirkung haben. Wirf Müll in den Mülleimer, vermeide Plastik, wenn möglich, und recycle richtig.",
    infoText: "Jede Gruppe, jede Familie und jedes Kind kann helfen: weniger Müll machen, Müll trennen und nichts in die Natur werfen.",
    ending: "neutral",
    choices: [
      { label: "Zurück zum Anfang", target: "01-start" }
    ]
  },
  {
    id: "33-klaeranlage-grobgitter",
    title: "Kläranlage: Grobgitter",
    image: "images/33-klaeranlage-grobgitter.jpg",
    text: "Großer Müll wird zuerst herausgeholt.",
    infoText: "Das Grobgitter hält größere Dinge zurück. So werden die nächsten Reinigungsstufen geschützt.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "34-klaeranlage-rechen",
    title: "Kläranlage: Rechen",
    image: "images/34-klaeranlage-rechen.jpg",
    text: "Danach werden auch kleinere Teile aus dem Wasser entfernt.",
    infoText: "Der Rechen arbeitet wie ein großer Kamm. Er fischt kleinere feste Stoffe aus dem Wasser.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "35-klaeranlage-becken",
    title: "Kläranlage: Becken",
    image: "images/35-klaeranlage-becken.jpg",
    text: "Im Wasser leben kleine Helfer. Sie reinigen das Wasser weiter.",
    infoText: "Diese kleinen Helfer sind Bakterien. Sie bauen Schmutzstoffe im Wasser ab.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "36-klaeranlage-sauberes-wasser",
    title: "Kläranlage: Sauberes Wasser",
    image: "images/36-klaeranlage-sauberes-wasser.jpg",
    text: "Am Ende fließt sauberes Wasser zurück in die Natur.",
    infoText: "Gereinigtes Wasser wird kontrolliert, bevor es zurück in Flüsse oder Bäche fließt.",
    choices: [
      { label: "Zurück zur Kläranlage", target: "08-klaeranlage" }
    ]
  },
  {
    id: "37-mikroplastik",
    title: "Mikroplastik",
    image: "images/37-mikroplastik.jpg",
    text: "Mikroplastik ist kleiner als fünf Millimeter. Es ist so winzig, dass Tiere es leicht fressen können. So gelangt es in die Nahrungskette und kann auch uns Menschen erreichen.",
    infoText: "Fünf Millimeter ist ungefähr so klein wie ein Reiskorn. Viele Mikroplastikteilchen sind sogar noch kleiner.",
    ending: "warning",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "38-jahrelang",
    title: "Jahrelang unterwegs",
    image: "images/38-jahrelang.jpg",
    text: "Die Flasche treibt mit den Meeresströmungen kreuz und quer über die Ozeane. Sie ist monatelang, jahrelang und vielleicht sogar jahrzehntelang unterwegs.",
    infoText: "Plastik kann sehr lange im Meer bleiben. Deshalb ist jede vermiedene Flasche ein Gewinn für die Umwelt.",
    ending: "warning",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "39-muellteppich-zusatz",
    title: "Müllteppich: Zusatz",
    image: "images/39-muellteppich-zusatz.jpg",
    text: "Im Meer gibt es riesige Gebiete, in denen sich Plastik sammelt. Dort bleibt die Flasche im Müllteppich und zerfällt langsam in immer kleinere Teile.",
    infoText: "Viele Plastikteile kommen über Flüsse ins Meer. Was am Schulhof richtig entsorgt wird, kann gar nicht erst dort landen.",
    ending: "warning",
    choices: [
      { label: "Ende", target: "32-ende" }
    ]
  },
  {
    id: "40-flut",
    title: "Flut",
    image: "images/40-flut.jpg",
    text: "Die Flut nimmt die Flasche wieder mit hinaus ins Meer. Ihre Reise geht weiter.",
    infoText: "Ebbe und Flut bewegen Wasser an der Küste hin und her. Dabei kann Müll vom Strand zurück ins Meer gelangen.",
    choices: [
      { label: "Weiter", target: "22-weiter-offenes-meer" }
    ]
  }
];

window.storyData = storyData;
