<template>
  <div class="rules">
    <h1>Regeln</h1>
    <div class="rules-container">
      <p>
        Ziel des Spiels ist es, herauszufinden, was die Verbindung zwischen vier
        angegebenen Clues ist.
      </p>
      <p>
        In der BBC-Sendung <i>Only Connect</i> spielen zwei dreiköpfige Teams
        gegeneinander, die abwechselnd versuchen, die Rätsel zu lösen. Je
        weniger Clues sie sich zeigen lassen, desto mehr Punkte erhalten sie (5
        Punkte nach dem ersten, nach dem zweiten 3, nach dem dritten 2 und 1
        Punkt bei vier aufgedeckten Clues)<sup><a href="#footnote01">[1]</a></sup>. Voraussetzung dafür ist, dass sie vor Ablauf von 40 Sekunden ihren
        Buzzer betätigen. Gelingt ihnen das nicht oder stellen sie eine
        inkorrekte Verbindung her, hat das gegnerische Team die Möglichkeit,
        einen Bonuspunkt erringen; dafür werden noch verbleibende Clues
        aufgedeckt.
      </p>
      <p>
        Die Verbindungen können absolut jeglicher Natur sein, "thematisch,
        linguistisch, sachlich, mathematisch etc."<sup><a href="#footnote02">[2]</a></sup>, abrupte Wechsel zwischen Politik, Wissenschaft, Populär- und
        Hochkultur sind die Regel. Ein Beispiel aus der englischsprachigen
        Wikipedia:
      </p>
      <img
        src="@/assets/img/Only_Connect_Round_1.png"
        alt="Vier aufgedeckte Clues, von links nach rechts: 'A hammer and a feather', 'Six US flags', 'Eugene Shoemakers ashes', 'Two golf balls'. Die gesuchte Verbindung ist 'Items left on the Moon'."
        srcset=""
      >
      <p>
        Diese App war erster Linie ein Projekt, den Umgang mit Vue.js zu
        erlernen, seine Anfänge liegen im legendären ersten Lockdown 2020. Meine
        Freude an dem Quiz hat wesentlich dazu beigetragen, die App stetig zu
        erweitern und in andere Bereiche in der Programmierung vorzudringen. So
        werden die Inhalte über eine API geladen, die mit PHP und MySQL erstellt
        wurde; das dazugehörige CMS ist ebenfalls eine Vue-App.
      </p>
      <p>
        Elemente wie der Buzzer oder der Timer sind natürlich relativ sinnfrei,
        wenn man allein vor <i>Copy Connect</i> sitzt, haben mir aber weitere
        Konzepte nahegebracht und sollten daher ihren Eingang finden.
      </p>
      <p>Weiterführende Links:</p>
      <ul>
        <li>
          <a
            href="https://en.m.wikipedia.org/wiki/Only_Connect"
          >Artikel in der englischsprachigen Wikipedia</a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/wheelsongenius"
          >Enorme Sammlung vollständiger Episoden von Youtube-User
            <i>wheelsongenius</i></a>
        </li>
        <li>
          <a
            href="https://ocdb.cc/"
          >OCDB, eine fan-geführte Datenbank mit gesammelten Fragen aus 264
            Episoden<br>(Stand: 19.12.21)</a>
        </li>
        <li>
          <a
            href="https://github.com/msq-dev/copy-connect"
          ><IconGithub
             class="icon-github"
             :size="15"
           />
            <i>Copy Connect</i> Code
          </a>
        </li>
      </ul>
      <div class="footnotes">
        <ol>
          <li
            id="footnote01"
            class="ftn"
          >
            Diese Regel und <i>Copy Connect</i> stellen nur die erste von vier
            Runden dar, in der zweiten beispielsweise bilden die Clues eine
            Abfolge und die Teams sind aufgefordert, das vierte Element selbst
            zu erschließen.
          </li>
          <li
            id="footnote02"
            class="ftn"
          >
            nach
            <a
              href="https://en.m.wikipedia.org/wiki/Only_Connect"
            >https://en.m.wikipedia.org/wiki/Only_Connect</a>, abgerufen am 19.12.21
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import IconGithub from "@/components/IconGithub.vue"

export default {
  name: "Rules",
  components: {
    IconGithub,
  },
}
</script>

<style>
.rules-container {
  align-self: flex-start;
  padding: 1em 1em 5em;
  margin: 2em 0 5em;
  background-color: var(--blue-100);
  border-radius: var(--bor-rad);
}

.rules-container > * + * {
  margin-top: 1em;
}

.rules-container ul {
  list-style: none;
  margin-left: 1em;
}

.rules-container ul > li {
  margin-bottom: 0.5em;
}

.rules-container a,
.footnotes a {
  color: var(--blue-700);
}

.footnotes {
  font-size: 0.85rem;
  margin-top: 3em;
}

.footnotes > * + * {
  margin-top: 0.5em;
}

.footnotes ol {
  margin-left: 1em;
}

.icon-github {
  display: inline-block;
  transform: translateY(2px);
}
</style>
