
<template>
  <div
    class="impressum"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">

      <h2 class="visually-hidden">
        Impressum
      </h2>

      <h3 class="no-margin-top">
        Kontaktadresse
      </h3>

      <p>
        Tina Beerli<br>
        Psychologische Beratung &amp; Coaching<br>
        Albisriederstrasse 100<br>
        8003 Zürich
      </p>

      <p>
        +41 79 614 26 18<br>
        <a href="mailto:hallo@tinabeerli.ch" target="_blank">hallo@tinabeerli.ch</a>
      </p>

      <h3>
        Haftungsausschluss
      </h3>

      <p>
        Der Webseitenbetreiber übernimmt keine Gewähr bezüglich der inhaltlichen Korrektheit, Exaktheit, Aktualität, Vollständigkeit oder Zuverlässigkeit der veröffentlichten Informationen.
      </p>

      <p>
        Haftungsansprüche gegen den Webseitenbetreiber wegen materieller oder immaterieller Schäden jeglicher Art, welche aus dem Besuch, der Nutzung oder auch Nichtnutzung der zur Verfügung gestellten Daten, durch einen falschen Gebrauch der Internetverbindung oder durch eventuelle technische Fehler entstanden sind, werden ausgeschlossen.
      </p>

      <p>
        Alle veröffentlichten Angebote haben einen unverbindlichen Charakter. Der Webseitenbetreiber hat das Recht, Teile von Webseiten oder auch den gesamten Inhalt ohne vorherige Ankündigung zu ändern, zu ergänzen, zu löschen oder die Publikation teilweise oder komplett einzustellen.
      </p>

      <h3>
        Haftung für Links
      </h3>

      <p>
        Links auf Webseiten von Drittanbietern, sowie Verweise darauf, liegen außerhalb des Verantwortungsbereichs des Webseitenbetreibers. Jegliche Verantwortung für die Inhalte dieser Webseiten wird abgelehnt. Wer auf Links von Drittanbietern zugreift, diese besucht oder nutzt, tut dies auf eigene Gefahr.
      </p>

      <h3>
        Urheberrechte
      </h3>

      <p>
        Das Urheberrecht sowie alle anderen Rechte an Texten, Bildern, Fotos oder Dateien auf der Webseite gehören ausschließlich den Webseitenbetreiber oder den angeführten Rechteinhabern. Die Reproduktion von Elementen bedarf der schriftlichen Zustimmung der Urheberrechtsträger.
      </p>

      <p>
        Diese Impressum wurde erstellt mit <a href="https://impressumgeneratorschweiz.de/" target="_blank">impressumgeneratorschweiz.de</a>.
      </p>

    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },

    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

