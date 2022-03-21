<script setup>
import { mdiArrowLeft, mdiClockEditOutline } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import TitleBar from '@/components/TitleBar.vue'
import { ref } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import JbButton from '@/components/JbButton.vue'
import Icon from '@/components/Icon.vue'

const titleStack = ref(['Extra', 'Aufgaben'])

</script>

<template>
  <title-bar :title-stack="titleStack">
    <template #right>
      <jb-button
        label="Zurück"
        :icon="mdiArrowLeft"
        color="info"
        to="/status"
      />
    </template>
  </title-bar>
  <main-section>
    <div class="text-xl my-2">
      <p class="font-bold text-blue-400">
        Dies ist ein Zusatzangebot. Schließen Sie zuerst Ihre Konfiguration ab.
      </p>
      <p class="flex gap-2 my-2 items-center">
        <icon
          :path="mdiClockEditOutline"
          size="24"
        /><span> Lesen Sie sich den Text zum Hotspot durch.</span>
      </p>
    </div>
    <card-component
      title="Was ist ein Hotspot?"
      class="bg-gray-200"
    >
      <div class="text-lg">
        <div>
          <p>
            Hotspots sind zu einem grundlegend Bestandteil der öffentlichen Infrastruktur und unserer Interneterfahrung geworden.
            Sie sind äußerst praktisch um die eigenen mobilen Daten des Smartphones zu schonen.
            Millionen von Menschen stellen jeden Tag eine Verbindungen mit öffentlichen Hotspots her.
            Auch hier an der Schule steht mit dem Bayern-WLAN ein öffentlicher Hotspot zur Verfügung.
          </p>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <p class="font-bold my-2">
            Begriffe:
          </p>
          <p>
            <b>Hotspot:</b>
            Ein Hotspot ist ein physischer Ort, an dem Menschen in der Regel per WLAN und einem mit dem Internetprovider verbundenen Router kabellos auf das Internet zugreifen können.
            Ein Hotspot kann sich an einem privaten oder öffentlichen Ort befinden, wie z. B. in einem Café, einem Hotel, einem Flughafen oder sogar einem Flugzeug.
            Während viele öffentliche Hotspots kostenlosen kabellosen Zugriff auf ein offenes Netzwerk bieten, ist für andere eine Bezahlung fällig.
          </p>
          <p>
            <b>mobiler Hotspot:</b>
            Ein mobiler Hotspot (manchmal auch als tragbarer Hotspot bezeichnet) ist ein Hotspot, der genau das ist: mobil!
            Während ein „normaler“ WLAN-Hotspot mit einem physischen Ort verbunden ist, können Sie einen mobilen Hotspot dadurch herstellen, dass Sie die Datenverbindung Ihres Smartphones nutzen, um Ihr Notebook mit dem Internet zu verbinden.
            Dieses Verfahren wird auch als Anbinden oder engl. Tethering bezeichnet.
          </p>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <p class="font-bold my-2">
            Hotspot-Sicherheit
          </p>
          <p>
            Eines der Risiken einer Internetverbindung ist, dass die Technologien, mit denen wir weiter arbeiten und mit unseren Lieben verbunden bleiben können, gegenüber Hackern und Identitätsdieben anfällig sind.
            Wenn Sie einen öffentlichen WLAN-Hotspot suchen, stellen Sie sicher, dass Ihr Smartphone oder Notebook nur mit seriösen Anbietern verbunden werden, z. B. dem WLAN des Hotels oder Cafés. Seien Sie vorsichtig, wenn Sie Hotspots mit falsch buchstabierten Namen wie Bongo statt Boingo sehen, weil Hacker diese manchmal unschuldig klingenden Namen nutzen, um Nutzer anzulocken, die nicht richtig aufpassen.
            Hacker können über eine ungesicherte WLAN-Verbindung auch Malware (Software, die Ihren Computer schädigt oder deaktiviert) verteilen, insbesondere wenn Sie ein File-Sharing-Programm über das gleiche Netzwerk nutzen.
            Es empfielt sich daher der Einsatz eines <a
              href="https://www.netzwelt.de/vergleich/vpn-anbieter-vergleich-2022-20-besten-vpn-dienste-test.html"
              class="text-blue-500"
            >VPN-Dienstes</a>.
          </p>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <p class="font-bold my-2">
            Ihr Smartphone als mobilen Hotspot verwenden
          </p>
          <p>
            Wenn Sie sich an einem Ort ohne Hotspot befinden und Ihr Notebook mit dem Internet verbinden möchten, können Sie mittels Anbindung oder „Tethering“ Ihr Telefon als mobilen WLAN-Hotspot verwenden. Dadurch kann Ihr Notebook auf das Internet zugreifen, wobei die Datenverbindung Ihres Smartphones genutzt wird.
          </p>
          <p>
            Die Einrichtungsschritte hängen vom jeweiligen Smartphone und Internetprovider ab. In der Regel finden Sie die Anweisungen dazu im Einstellungsmenü oder Verbindungsverwaltungsmenü Ihres Telefons. Aus Sicherheitsgründen sollten Sie sicherstellen, dass Sie ein WLAN-Passwort verwenden, damit in der Nähe befindliche Internetnutzer nicht auf Ihr Telefon oder Notebook zugreifen können. Beachten Sie auch, dass das Anbinden Ihres Laptops an Ihr Telefon das Datenkontingent Ihres Handys verbraucht. Achten Sie also genau auf Ihre Nutzungsdaten, um Überschreitungsgebühren zu verhindern.
          </p>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <p class="font-bold my-2">
            Den Router-Sim als Hotspot einrichten:
          </p>
          <p>
            Sie können den Router-Sim auch als Hotspot betreiben. Dazu Konfigurieren sie den Router wie soeben auch.
            In der aktuellen Version unterstützt der Router-Sim jedoch keine Einschränkung des Netzwerkverkehrs (Filter), daher empfielt sich der Einsatz einer zusätzliche Firewall.
            Moderne WLAN-Router integrieren diese Funktionen und bieten die Möglichkeit einen privaten WLAN-Zugang und einen öffentlichen Hotspot gleichzeitig zu betreiben.
            Als Beispiel sehen sie <a
              href="https://avm.de/service/wissensdatenbank/dok/FRITZ-Box-7490/294_WLAN-Gastzugang-in-FRITZ-Box-einrichten/"
              class="font-bold text-red-600"
            > hier </a> die Einrichtung eines Hotspots mit einer FritzBox.
          </p>
        </div>
      </div>
    </card-component>
  </main-section>
</template>
