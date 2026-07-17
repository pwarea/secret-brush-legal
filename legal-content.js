(function attachSecretBrushLegal(global) {
  "use strict";

  const UPDATED = "17 July 2026";
  const UPDATED_TR = "17 Temmuz 2026";
  const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

  const documents = {
    en: {
      privacy: {
        title: "Privacy Notice",
        updated: `Effective and last updated: ${UPDATED}`,
        intro: [
          "This notice explains how Secret Brush works on one device and between devices on the same local network. It applies to the iOS app distributed by the seller identified on the app’s App Store product page (the “Developer”).",
          "The current app has no developer account system, cloud game server, advertising SDK, analytics SDK, tracking SDK, or third-party crash-reporting SDK. The Developer does not receive gameplay or local-network data from the app. Data exchanged directly with nearby players is still described below so you can make an informed choice."
        ],
        sections: [
          {
            title: "1. Who is responsible and how to contact us",
            paragraphs: [
              "The person or legal entity shown as Seller on the App Store product page is responsible for this app. Use the App Support link on that page for the Developer’s current contact method."
            ]
          },
          {
            title: "2. Information used on your device",
            bullets: [
              "Preferences: selected language and game settings.",
              "Single-device game data: player nicknames, colors, scores, round state, virtual coins/paint inventory, and drawings needed to continue or show the game.",
              "Local-multiplayer session data: room code, player identifier, and a random session token used to reconnect to the current room.",
              "The room password is used in memory to authenticate and establish encryption. The app does not intentionally save the room password to persistent storage."
            ],
            paragraphs: [
              "This information remains in the app’s storage or volatile memory on the relevant device. The Developer cannot remotely view, retrieve, correct, or delete it."
            ]
          },
          {
            title: "3. Information shared with nearby players",
            paragraphs: [
              "When you choose Local Multiplayer, devices you invite on the same local network exchange the information required to play: player and room names, room code, roles, category, secret word or clue as appropriate, drawing strokes, colors, votes, scores, virtual items, connection status, and session credentials. The host device temporarily holds the authoritative room state. Other devices receive only the game state needed for their player and the shared canvas."
            ],
            bullets: [
              "Bonjour discovery advertises the app’s service type, a random service/host identifier, the room code, and protocol version. The room name and room password are not advertised through Bonjour.",
              "Local Multiplayer uses an encrypted, password-protected connection. Use a unique room password of at least eight characters and share it only with intended players.",
              "Nearby players can see content you intentionally submit to the room. Do not use real names or draw, type, or share personal, confidential, illegal, or harmful information."
            ]
          },
          {
            title: "4. Local Network permission",
            paragraphs: [
              "iOS asks for Local Network permission so the app can discover and connect to a nearby host using Bonjour and Network.framework. If you deny it, Local Multiplayer will not work; Play on One Device remains available. The app does not request access to your camera, microphone, precise location, photos, contacts, or advertising identifier for its current features."
            ]
          },
          {
            title: "5. Purposes and legal grounds",
            bullets: [
              "Run the game and remember your choices at your request.",
              "Set up and maintain a local room you choose to host or join.",
              "Reduce unauthorized access and disruptive traffic within that room.",
              "Respond to a support or privacy message you choose to send outside the app."
            ],
            paragraphs: [
              "Where data-protection law applies, on-device and peer-to-peer operations are performed to provide the feature you request. Information you separately send to support is handled to answer your request, protect users and the app, comply with law, and, where required, on the basis of consent or another applicable legal ground."
            ]
          },
          {
            title: "6. Collection, sale, tracking, and advertising",
            paragraphs: [
              "The current iOS build does not transmit gameplay data, identifiers, diagnostics, or usage analytics to the Developer or an advertising partner. The Developer does not sell or share personal information for cross-context behavioural advertising and does not track you across apps or websites."
            ]
          },
          {
            title: "7. Recipients and third parties",
            paragraphs: [
              "Gameplay data is disclosed only to the nearby devices participating in the local room, as described above. Apple independently processes App Store downloads, purchases, device diagnostics you choose to share with Apple, and related account information under Apple’s own terms and privacy policy. Your network operator and device platform may process ordinary network or system logs outside the Developer’s control."
            ]
          },
          {
            title: "8. Retention and deletion",
            bullets: [
              "Volatile host room state is intended to end when hosting stops or the host app closes.",
              "Saved preferences and single-device progress remain until you reset the game, clear the app’s data where iOS permits, or uninstall the app.",
              "A saved local-room session token remains until the session is cleared, you are removed, or the app is uninstalled; the token is invalid once the host room no longer recognises it.",
              "A support message is retained only as reasonably necessary to respond, protect the app, establish legal claims, or meet legal obligations."
            ]
          },
          {
            title: "9. Security and your choices",
            paragraphs: [
              "Use a trusted, password-protected local network; choose a unique room password; share the room code and password through separate trusted channels; keep iOS and the app updated; and leave a room if you do not trust a participant. The host can clear the shared canvas and remove a participant. No technical measure can make a network or device completely risk-free, and a participant can still photograph or otherwise record what appears on their own screen."
            ]
          },
          {
            title: "10. Children and families",
            paragraphs: [
              "Secret Brush is a general-audience group game and is not designed to solicit personal information from children. There is no account registration or age profiling. A parent or guardian should supervise a minor where required by local law, use nicknames rather than real names, and ensure that participants do not submit personal or inappropriate content. Contact App Support if you believe personal information was sent to the Developer outside the app by a child."
            ]
          },
          {
            title: "11. Your privacy rights",
            paragraphs: [
              "Depending on your location, you may have rights to information, access, correction, deletion, restriction, objection, portability, withdrawal of consent, and complaint to a data-protection authority. For data stored only on your device or a nearby host, use the in-app reset/removal controls or uninstall the app; the Developer has no copy to retrieve or erase. For information you sent to support, use the contact method on the App Support page. Turkish users may also exercise the rights in Article 11 of Law No. 6698; EEA/UK users may contact their competent supervisory authority."
            ]
          },
          {
            title: "12. International transfers",
            paragraphs: [
              "The app itself does not send gameplay data to the Developer or a cloud service. Apple or a communication service you choose when contacting support may process information in other countries under its own privacy terms and safeguards."
            ]
          },
          {
            title: "13. Changes",
            paragraphs: [
              "This notice will be updated before the app begins using materially different data, cloud services, analytics, advertising, accounts, or other third parties. Material changes will be presented in the app or App Store listing as appropriate."
            ]
          }
        ]
      },
      terms: {
        title: "Terms of Use",
        updated: `Effective and last updated: ${UPDATED}`,
        intro: [
          "These supplemental rules apply to your use of Secret Brush. Your licence to the iOS app is also governed by Apple’s Standard Licensed Application End User License Agreement (“Apple Standard EULA”). Nothing here limits mandatory consumer or privacy rights."
        ],
        links: [{ label: "Apple Standard EULA", href: APPLE_EULA }],
        sections: [
          {
            title: "1. Provider and acceptance",
            paragraphs: [
              "The app is provided by the person or legal entity identified as Seller on its App Store product page. By installing or using the app, you agree to these rules and the Apple Standard EULA. If you do not agree, do not use the app. A parent or guardian should approve and supervise use by a minor where local law requires it."
            ]
          },
          {
            title: "2. What the app provides",
            paragraphs: [
              "Secret Brush is a party drawing game for one shared device or nearby devices on the same local network. Local Multiplayer depends on compatible devices, Local Network permission, a functioning network, and the host keeping the app open. No cloud matchmaking, account, remote backup, or guaranteed continuous service is included in the current version."
            ]
          },
          {
            title: "3. Licence",
            paragraphs: [
              "Subject to the Apple Standard EULA and these rules, you receive a personal, limited, non-exclusive, non-transferable, revocable licence to use the app on Apple-branded products you own or control as permitted by Apple. You receive no ownership in the app, artwork, code, name, or other protected materials. Mandatory rights to interoperability, backup, or lawful analysis remain unaffected where they cannot be waived."
            ]
          },
          {
            title: "4. Fair and safe use",
            bullets: [
              "Do not submit unlawful, threatening, hateful, sexually explicit, exploitative, privacy-invasive, infringing, or otherwise harmful names or drawings.",
              "Do not harass participants, impersonate another person, reveal personal or confidential information, or use the app to contact strangers unsafely.",
              "Do not attempt unauthorised access, disrupt another participant’s device or connection, or use the app to distribute malicious software."
            ]
          },
          {
            title: "5. Player content and room moderation",
            paragraphs: [
              "You retain any rights you have in names and drawings you create. You give the other devices in your chosen room a temporary permission to receive, display, and process that content only to run the session. The Developer does not receive or host current gameplay content and cannot retrospectively inspect or recover it.",
              "The room host can clear the canvas and remove a participant. Participants may leave at any time. Use these controls for inappropriate content or behaviour. A removal blocks that session from continuing in the current room, but it cannot prevent a person with a new invitation from attempting to join a later room."
            ]
          },
          {
            title: "6. Local-network responsibility",
            paragraphs: [
              "Host or join only with people and networks you trust. The host chooses the room password and controls the session. Participants are responsible for their device, network charges, and what they voluntarily show to other room members. Encryption reduces network interception risk but cannot stop another participant from recording their screen or re-sharing content."
            ]
          },
          {
            title: "7. Updates and availability",
            paragraphs: [
              "The Developer may update, secure, change, or discontinue features, subject to applicable law and App Store rules. Older versions may stop interoperating after a security or protocol update. Back up anything important outside the app; gameplay state is not a storage or archival service."
            ]
          },
          {
            title: "8. Third-party terms",
            paragraphs: [
              "Apple’s terms apply to the App Store, Apple devices, and related services. Your internet or local-network provider may impose separate terms. You must comply with applicable third-party agreements when using the app. Apple and its subsidiaries are third-party beneficiaries of the Apple Standard EULA as provided there."
            ]
          },
          {
            title: "9. Support, warranties, and liability",
            paragraphs: [
              "Use the App Support link on the App Store product page for support. The app is provided with the warranties that cannot lawfully be excluded. To the maximum extent permitted by applicable law, the Developer is not responsible for indirect or unforeseeable loss, another participant’s conduct, unsafe networks, content recorded by participants, or loss caused by using the app contrary to these instructions. Nothing excludes liability or remedies that cannot legally be excluded, including mandatory consumer guarantees, fraud, wilful misconduct, or liability for death or personal injury where applicable. Apple’s warranty and support allocation is governed by the Apple Standard EULA."
            ]
          },
          {
            title: "10. Suspension and termination",
            paragraphs: [
              "Your licence ends if you materially violate these terms or the Apple Standard EULA, subject to any notice or remedy required by law. You may stop using the app and uninstall it at any time. Terms that logically survive termination—including ownership, lawful limitations of liability, and dispute provisions—continue to apply."
            ]
          },
          {
            title: "11. Law and disputes",
            paragraphs: [
              "The law and courts that apply depend on the Developer’s legal location and your residence. Mandatory consumer protections and your right to bring a claim in a competent local forum are not displaced. Contact App Support first so the parties can try to resolve a concern informally."
            ]
          },
          {
            title: "12. General",
            paragraphs: [
              "If part of these terms is unenforceable, the remainder stays effective to the extent permitted by law. A failure to enforce a term is not a waiver. The Developer may transfer these terms only as permitted by law and without reducing mandatory rights. The current Privacy Notice explains data handling. The English and Turkish versions are intended to have the same meaning; mandatory local-law interpretation controls if they differ."
            ]
          }
        ]
      }
    },
    tr: {
      privacy: {
        title: "Gizlilik Aydınlatma Metni",
        updated: `Yürürlük ve son güncelleme: ${UPDATED_TR}`,
        intro: [
          "Bu metin, Gizli Fırça’nın tek cihazda ve aynı yerel ağdaki cihazlar arasında nasıl çalıştığını açıklar. App Store ürün sayfasında Satıcı (Seller) olarak belirtilen kişi veya tüzel kişi (“Geliştirici”) tarafından dağıtılan iOS uygulaması için geçerlidir.",
          "Mevcut uygulamada geliştirici hesabı, bulut oyun sunucusu, reklam, analiz, takip veya üçüncü taraf çökme raporlama SDK’sı yoktur. Geliştirici oyun veya yerel ağ verisini uygulamadan almaz. Yine de yakındaki oyuncularla doğrudan paylaşılan veriler, bilinçli seçim yapabilmeniz için aşağıda açıklanır."
        ],
        sections: [
          {
            title: "1. Veri sorumlusu ve iletişim",
            paragraphs: [
              "App Store ürün sayfasındaki Satıcı alanında görünen kişi veya tüzel kişi uygulamadan sorumludur. Geliştiricinin güncel iletişim yöntemi için bu sayfadaki Uygulama Desteği bağlantısını kullanın."
            ]
          },
          {
            title: "2. Cihazınızda kullanılan bilgiler",
            bullets: [
              "Tercihler: seçilen dil ve oyun ayarları.",
              "Tek cihaz oyun verisi: oyuncu takma adları, renkler, puanlar, tur durumu, sanal altın/boya envanteri ve oyunu sürdürmek veya göstermek için gereken çizimler.",
              "Yerel multiplayer oturumu: mevcut odaya yeniden bağlanmak için oda kodu, oyuncu kimliği ve rastgele oturum anahtarı.",
              "Oda şifresi, kimlik doğrulamak ve şifrelemeyi kurmak için bellekte kullanılır; uygulama şifreyi bilerek kalıcı depolamaya kaydetmez."
            ],
            paragraphs: [
              "Bu bilgiler ilgili cihazın uygulama deposunda veya geçici belleğinde kalır. Geliştirici bunları uzaktan göremez, alamaz, düzeltemez veya silemez."
            ]
          },
          {
            title: "3. Yakındaki oyuncularla paylaşılan bilgiler",
            paragraphs: [
              "Yerel Multiplayer seçildiğinde aynı yerel ağdaki davet ettiğiniz cihazlar; oyuncu ve oda adları, oda kodu, rol, kategori, oyuncuya göre gizli kelime veya ipucu, çizgi verileri, renkler, oylar, puanlar, sanal öğeler, bağlantı durumu ve oturum kimlik bilgileri gibi oyun için gerekli verileri paylaşır. Host cihazı, oda durumunu geçici olarak yönetir. Diğer cihazlar yalnızca kendi oyuncuları ve ortak tuval için gereken durumu alır."
            ],
            bullets: [
              "Bonjour keşfi; uygulamanın servis türünü, rastgele servis/host kimliğini, oda kodunu ve protokol sürümünü yayınlar. Oda adı ve şifresi Bonjour ile yayınlanmaz.",
              "Yerel Multiplayer, şifreli ve parola korumalı bir bağlantı kullanır. En az sekiz karakterli, benzersiz bir oda şifresi seçin ve yalnızca davet ettiğiniz oyuncularla paylaşın.",
              "Odaya bilerek gönderdiğiniz içerik yakındaki oyuncularca görülebilir. Gerçek ad kullanmayın; kişisel, gizli, hukuka aykırı veya zararlı bilgi çizmeyin, yazmayın ya da paylaşmayın."
            ]
          },
          {
            title: "4. Yerel Ağ izni",
            paragraphs: [
              "iOS, uygulamanın Bonjour ve Network.framework ile yakındaki hostu bulup bağlanabilmesi için Yerel Ağ izni ister. Reddederseniz Yerel Multiplayer çalışmaz; Tek Cihazda Oyna kullanılabilir. Uygulama mevcut özellikleri için kamera, mikrofon, hassas konum, fotoğraflar, kişiler veya reklam kimliği erişimi istemez."
            ]
          },
          {
            title: "5. Amaçlar ve hukuki sebepler",
            bullets: [
              "Talebiniz üzerine oyunu çalıştırmak ve tercihlerinizi hatırlamak.",
              "Kurmayı veya katılmayı seçtiğiniz yerel odayı oluşturmak ve sürdürmek.",
              "Odadaki yetkisiz erişimi ve bağlantıyı bozan trafiği azaltmak.",
              "Uygulama dışında göndermeyi seçtiğiniz destek veya gizlilik talebini yanıtlamak."
            ],
            paragraphs: [
              "Veri koruma hukuku uygulandığında cihaz içi ve eşler arası işlemler, talep ettiğiniz özelliği sunmak için yapılır. Desteğe ayrıca gönderdiğiniz bilgiler; talebinizi yanıtlamak, kullanıcıları ve uygulamayı korumak, hukuki yükümlülükleri yerine getirmek ve gerektiğinde açık rıza veya başka bir geçerli hukuki sebebe dayanmak amacıyla işlenir. Aydınlatma ile açık rıza gerekiyorsa ayrı ayrı sunulur."
            ]
          },
          {
            title: "6. Toplama, satış, takip ve reklam",
            paragraphs: [
              "Mevcut iOS paketi oyun verisini, tanımlayıcıları, tanılama verisini veya kullanım analizini Geliştiriciye ya da reklam ortağına iletmez. Geliştirici kişisel verileri satmaz, davranışsal reklam için paylaşmaz ve sizi uygulamalar veya siteler arasında takip etmez."
            ]
          },
          {
            title: "7. Alıcılar ve üçüncü taraflar",
            paragraphs: [
              "Oyun verisi yalnızca yukarıda açıklanan yerel odadaki yakındaki cihazlara aktarılır. Apple; App Store indirmeleri, satın almalar, Apple ile paylaşmayı seçtiğiniz cihaz tanılama verileri ve ilgili hesap bilgilerini kendi koşulları ve gizlilik politikası kapsamında bağımsız olarak işler. Ağ işletmeciniz ve cihaz platformu, Geliştiricinin kontrolü dışındaki olağan ağ veya sistem günlüklerini işleyebilir."
            ]
          },
          {
            title: "8. Saklama ve silme",
            bullets: [
              "Hosttaki geçici oda durumu, hostluk durduğunda veya host uygulaması kapandığında sona ermek üzere tasarlanmıştır.",
              "Kaydedilen tercihler ve tek cihaz ilerlemesi; oyunu sıfırlayana, iOS izin veriyorsa uygulama verisini temizleyene veya uygulamayı kaldırana kadar kalır.",
              "Yerel oda oturum anahtarı; oturum temizlenene, odadan çıkarılana veya uygulama kaldırılana kadar kalabilir; host oda artık tanımıyorsa geçersizdir.",
              "Destek mesajı yalnızca yanıt, uygulama güvenliği, hukuki talepler veya yasal yükümlülükler için makul ölçüde gerekli süre tutulur."
            ]
          },
          {
            title: "9. Güvenlik ve seçimleriniz",
            paragraphs: [
              "Güvendiğiniz, şifreli bir yerel ağ kullanın; benzersiz oda şifresi seçin; oda kodu ile şifreyi güvenilir ve mümkünse ayrı kanallardan paylaşın; iOS ile uygulamayı güncel tutun; katılımcıya güvenmiyorsanız odadan ayrılın. Host tuvali temizleyebilir ve oyuncuyu çıkarabilir. Hiçbir teknik önlem ağı veya cihazı tamamen risksiz yapamaz; katılımcı kendi ekranını fotoğraflayabilir veya kaydedebilir."
            ]
          },
          {
            title: "10. Çocuklar ve aileler",
            paragraphs: [
              "Gizli Fırça genel kitleye yönelik bir grup oyunudur ve çocuklardan kişisel veri istemek üzere tasarlanmamıştır. Hesap açma veya yaş profilleme yoktur. Yerel hukuk gerektiriyorsa ebeveyn/vasi küçüğün kullanımını gözetmeli, gerçek ad yerine takma ad kullanmalı ve kişisel ya da uygunsuz içerik girilmemesini sağlamalıdır. Bir çocuğun kişisel veriyi uygulama dışında Geliştiriciye gönderdiğini düşünüyorsanız Uygulama Desteğine başvurun."
            ]
          },
          {
            title: "11. Haklarınız",
            paragraphs: [
              "Bulunduğunuz yere göre bilgi alma, erişim, düzeltme, silme, kısıtlama, itiraz, taşınabilirlik, rızayı geri çekme ve yetkili veri koruma kurumuna şikâyet haklarınız olabilir. Yalnızca cihazınızda veya yakındaki hostta tutulan veri için uygulama içi sıfırlama/çıkarma kontrollerini kullanın veya uygulamayı kaldırın; Geliştiricide alınabilecek ya da silinebilecek bir kopya yoktur. Desteğe gönderdiğiniz bilgi için Uygulama Desteği sayfasındaki iletişim yöntemini kullanın. Türkiye’deki ilgili kişiler 6698 sayılı Kanun’un 11. maddesindeki haklarını da kullanabilir."
            ]
          },
          {
            title: "12. Yurt dışına aktarım",
            paragraphs: [
              "Uygulama oyun verisini Geliştiriciye veya bulut hizmetine göndermez. Apple ya da destek için kullanmayı seçtiğiniz iletişim hizmeti, bilgileri kendi gizlilik koşulları ve güvenceleri altında başka ülkelerde işleyebilir."
            ]
          },
          {
            title: "13. Değişiklikler",
            paragraphs: [
              "Uygulama önemli ölçüde farklı veri, bulut hizmeti, analiz, reklam, hesap veya başka üçüncü taraf kullanmaya başlamadan önce bu metin güncellenir. Önemli değişiklikler uygun şekilde uygulamada veya App Store kaydında bildirilir."
            ]
          }
        ]
      },
      terms: {
        title: "Kullanım Koşulları",
        updated: `Yürürlük ve son güncelleme: ${UPDATED_TR}`,
        intro: [
          "Bu ek kurallar Gizli Fırça kullanımınıza uygulanır. iOS uygulama lisansınız ayrıca Apple Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesine (“Apple Standart EULA”) tabidir. Buradaki hiçbir hüküm emredici tüketici veya gizlilik haklarını sınırlandırmaz."
        ],
        links: [{ label: "Apple Standart EULA", href: APPLE_EULA }],
        sections: [
          {
            title: "1. Sağlayıcı ve kabul",
            paragraphs: [
              "Uygulama, App Store ürün sayfasında Satıcı olarak belirtilen kişi veya tüzel kişi tarafından sunulur. Uygulamayı yükleyerek veya kullanarak bu kuralları ve Apple Standart EULA’yı kabul edersiniz. Kabul etmiyorsanız uygulamayı kullanmayın. Yerel hukuk gerektiriyorsa küçüğün kullanımını ebeveyn/vasi onaylamalı ve gözetmelidir."
            ]
          },
          {
            title: "2. Sunulan özellik",
            paragraphs: [
              "Gizli Fırça, tek ortak cihazda veya aynı yerel ağdaki yakındaki cihazlarda oynanan bir çizim oyunudur. Yerel Multiplayer; uyumlu cihazlara, Yerel Ağ iznine, çalışan bir ağa ve hostun uygulamayı açık tutmasına bağlıdır. Mevcut sürümde bulut eşleştirme, hesap, uzaktan yedekleme veya kesintisiz hizmet garantisi yoktur."
            ]
          },
          {
            title: "3. Lisans",
            paragraphs: [
              "Apple Standart EULA ve bu kurallara tabi olarak, Apple’ın izin verdiği biçimde sahibi olduğunuz veya kontrol ettiğiniz Apple markalı ürünlerde uygulamayı kullanmanız için kişisel, sınırlı, münhasır olmayan, devredilemez ve geri alınabilir lisans verilir. Uygulama, görseller, kod, ad veya korunan materyaller üzerinde mülkiyet edinmezsiniz. Feragat edilemeyen birlikte çalışabilirlik, yedekleme veya hukuka uygun inceleme hakları saklıdır."
            ]
          },
          {
            title: "4. Adil ve güvenli kullanım",
            bullets: [
              "Hukuka aykırı, tehditkâr, nefret içeren, cinsel açıdan açık, sömürücü, mahremiyeti veya fikrî hakkı ihlal eden ya da başka şekilde zararlı ad veya çizim göndermeyin.",
              "Katılımcıları taciz etmeyin, başkasını taklit etmeyin, kişisel/gizli bilgi açıklamayın ve uygulamayı yabancılarla güvensiz temas kurmak için kullanmayın.",
              "Yetkisiz erişim denemeyin, başka katılımcının cihazını veya bağlantısını bozmayın ve uygulamayı zararlı yazılım dağıtmak için kullanmayın."
            ]
          },
          {
            title: "5. Oyuncu içeriği ve oda yönetimi",
            paragraphs: [
              "Oluşturduğunuz ad ve çizimler üzerindeki haklarınız sizde kalır. Seçtiğiniz odadaki diğer cihazlara, yalnızca oturumu yürütmek için içeriği geçici olarak alma, gösterme ve işleme izni verirsiniz. Geliştirici mevcut oyun içeriğini almaz/barındırmaz; sonradan inceleyemez veya kurtaramaz.",
              "Host tuvali temizleyebilir ve katılımcıyı çıkarabilir; herkes istediği zaman ayrılabilir. Uygunsuz içerik veya davranışta bu kontrolleri kullanın. Çıkarma, ilgili oturumun mevcut odada devam etmesini engeller; yeni davet alan kişinin sonraki bir odaya katılma denemesini kalıcı olarak engellemez."
            ]
          },
          {
            title: "6. Yerel ağ sorumluluğu",
            paragraphs: [
              "Yalnızca güvendiğiniz kişi ve ağlarla hostluk yapın veya odaya katılın. Oda şifresini host seçer ve oturumu yönetir. Katılımcılar cihazlarından, ağ ücretlerinden ve diğer oda üyelerine bilerek gösterdiklerinden sorumludur. Şifreleme ağdan dinleme riskini azaltır fakat katılımcının ekran kaydı almasını veya içeriği yeniden paylaşmasını engelleyemez."
            ]
          },
          {
            title: "7. Güncellemeler ve kullanılabilirlik",
            paragraphs: [
              "Geliştirici, uygulanabilir hukuk ve App Store kurallarına tabi olarak özellikleri güncelleyebilir, güvenli hâle getirebilir, değiştirebilir veya sonlandırabilir. Güvenlik/protokol güncellemesinden sonra eski sürümler birlikte çalışmayabilir. Önemli veriyi uygulama dışında saklayın; oyun durumu bir arşiv hizmeti değildir."
            ]
          },
          {
            title: "8. Üçüncü taraf koşulları",
            paragraphs: [
              "App Store, Apple cihazları ve ilgili hizmetlere Apple koşulları uygulanır. İnternet/yerel ağ sağlayıcınızın ayrı koşulları olabilir. Uygulamayı kullanırken geçerli üçüncü taraf sözleşmelerine uymalısınız. Apple ve bağlı ortaklıkları, Apple Standart EULA’da belirtilen ölçüde bu lisansın üçüncü taraf lehtarıdır."
            ]
          },
          {
            title: "9. Destek, garantiler ve sorumluluk",
            paragraphs: [
              "Destek için App Store ürün sayfasındaki Uygulama Desteği bağlantısını kullanın. Uygulama, hukuken kaldırılamayan garantilerle birlikte sunulur. Uygulanabilir hukukun izin verdiği azami ölçüde Geliştirici; dolaylı veya öngörülemeyen zarar, diğer katılımcının davranışı, güvensiz ağ, katılımcının kaydettiği içerik ya da talimatlara aykırı kullanım nedeniyle sorumlu değildir. Emredici tüketici güvenceleri, hile, kasıtlı davranış veya uygulanabildiği yerde ölüm/bedensel zarara ilişkin kaldırılamayan sorumluluk ve başvuru yolları sınırlandırılmaz. Apple’ın garanti ve destek sorumluluğu Apple Standart EULA’ya tabidir."
            ]
          },
          {
            title: "10. Askıya alma ve sona erme",
            paragraphs: [
              "Bu koşulları veya Apple Standart EULA’yı esaslı ihlal ederseniz, hukuken gereken bildirim/düzeltme hakkı saklı olmak üzere lisansınız sona erebilir. Uygulamayı kullanmayı bırakıp istediğiniz zaman kaldırabilirsiniz. Mülkiyet, hukuka uygun sorumluluk sınırları ve uyuşmazlık hükümleri gibi niteliği gereği devam eden hükümler yürürlükte kalır."
            ]
          },
          {
            title: "11. Hukuk ve uyuşmazlık",
            paragraphs: [
              "Uygulanacak hukuk ve mahkeme, Geliştiricinin yasal yerleşimine ve ikamet ettiğiniz yere göre belirlenir. Emredici tüketici korumaları ve yetkili yerel mercide başvuru hakkınız ortadan kalkmaz. Önce Uygulama Desteğiyle iletişime geçerek çözüm aranabilir."
            ]
          },
          {
            title: "12. Genel hükümler",
            paragraphs: [
              "Bir hüküm uygulanamazsa kalan hükümler hukukun izin verdiği ölçüde yürür. Hakkın kullanılmaması feragat değildir. Geliştirici bu koşulları yalnızca hukuken izin verildiğinde ve emredici hakları azaltmadan devredebilir. Veri işleme Gizlilik Aydınlatma Metninde açıklanır. Türkçe ve İngilizce sürümlerin aynı anlamı taşıması amaçlanır; farklılıkta emredici yerel hukuk yorumu geçerlidir."
            ]
          }
        ]
      }
    }
  };

  function get(type, language) {
    if (type !== "privacy" && type !== "terms") return null;
    const languageKey = String(language || "").toLowerCase().split("-")[0] === "tr" ? "tr" : "en";
    return documents[languageKey]?.[type] || null;
  }

  global.SecretBrushLegal = Object.freeze({
    get,
    supportedTypes: Object.freeze(["privacy", "terms"]),
    lastUpdated: "2026-07-17"
  });
})(typeof window !== "undefined" ? window : globalThis);
