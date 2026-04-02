/**
 * 3DELTA — ÜRÜN YÖNETİM DOSYASI
 * ================================
 * Yeni ürün eklemek için bu dosyayı düzenle.
 * Her ürün için { } bloğu kopyala ve bilgileri doldur.
 * Kategori seçenekleri: "oto" | "elek" | "hobi" | "ev" | "ozel"
 * Rozet seçenekleri: "pop" | "new" | "sale" | "" (boş = rozet yok)
 */

const URUNLER = [
  {
    id: 1,
    kategori: "oto",
    ad: "Araba İç Aksesuar",
    aciklama: "Direksiyon göbek kapak, torpido bölmesi, kablo yönetici, vites topuzu muhafazası. Araç modeline özel ölçü ve renk seçeneği.",
    fiyat: "₺180",
    fiyat_max: "₺450",
    malzeme: ["PETG", "Isıya dayanıklı", "Özel renk"],
    rozet: "pop",
    icon: "car"
  },
  {
    id: 2,
    kategori: "oto",
    ad: "Telefon & Tablet Tutucu",
    aciklama: "Havalandırma ve vantuz montajlı seçenekler. PETG malzeme, titreşim ve ısıya dayanıklı. Her araç modeliyle uyumlu.",
    fiyat: "₺120",
    fiyat_max: "₺280",
    malzeme: ["PETG", "Titreşim dayanıklı", "Evrensel uyum"],
    rozet: "new",
    icon: "phone"
  },
  {
    id: 3,
    kategori: "elek",
    ad: "Arduino / Raspberry Pi Kutu",
    aciklama: "Her model için özel ölçüde muhafaza. Havalandırma delikli, kablo çıkışlı, vida montajlı. Proje sunum kutusu da yapılır.",
    fiyat: "₺90",
    fiyat_max: "₺220",
    malzeme: ["PLA/PETG", "Özel boyut", "DIN ray"],
    rozet: "pop",
    icon: "cpu"
  },
  {
    id: 4,
    kategori: "elek",
    ad: "Özel Proje Muhafazası",
    aciklama: "Tamamen özel boyut ve delik düzeni. DIN ray, duvar tipi, masa üstü seçenekleri. Her PCB boyutuna ve konektör tipine uyar.",
    fiyat: "₺75",
    fiyat_max: "₺350",
    malzeme: ["PLA/PETG", "Özel tasarım", "Her PCB"],
    rozet: "new",
    icon: "box"
  },
  {
    id: 5,
    kategori: "hobi",
    ad: "RC Araba Yedek Parça",
    aciklama: "Servo braketi, tekerlek göbeği, şasi parçası, bodywork. Kırılan orijinal parça yerine geçer. Tamiya, HPI, Traxxas uyumlu.",
    fiyat: "₺45",
    fiyat_max: "₺180",
    malzeme: ["PLA/PETG", "Yüksek dayanım", "Tam uyum"],
    rozet: "new",
    icon: "wheel"
  },
  {
    id: 6,
    kategori: "hobi",
    ad: "Oyun Figürü & Miniature",
    aciklama: "DnD miniatureleri, koleksiyon figürleri, özel karakter baskısı. Boyama hazır yüzey. Reçine kalitesi detay, FDM fiyatı.",
    fiyat: "₺60",
    fiyat_max: "₺400",
    malzeme: ["Reçine/PLA", "Yüksek detay", "Boyama hazır"],
    rozet: "pop",
    icon: "star"
  },
  {
    id: 7,
    kategori: "ev",
    ad: "Ev Aksesuar & Dekor",
    aciklama: "Raf tutucu, kablo yönetici, duvar dekoru, saksı, anahtar askısı, kapı stopu. Özel renk ve boyutla sipariş.",
    fiyat: "₺80",
    fiyat_max: "₺300",
    malzeme: ["PLA", "Renkli seçenek", "Kişisel tasarım"],
    rozet: "",
    icon: "home"
  },
  {
    id: 8,
    kategori: "ozel",
    ad: "Tam Özel Tasarım",
    aciklama: "Fikrin var, dosyan var ya da sadece açıklaman var — bize yeter. Sıfırdan tasarlar, basarız. Her boyut, her malzeme.",
    fiyat: "Teklif Al",
    fiyat_max: "",
    malzeme: ["Tüm malzemeler", "3D modelleme", "Prototip"],
    rozet: "ozel",
    icon: "edit"
  }
];

/* YENİ ÜRÜN EKLEMEK İÇİN:
   Aşağıdaki şablonu kopyala, URUNLER dizisine ekle:

  {
    id: 9,                          // bir öncekinden 1 fazla
    kategori: "oto",                // oto | elek | hobi | ev | ozel
    ad: "Ürün Adı",
    aciklama: "Ürün açıklaması...",
    fiyat: "₺100",
    fiyat_max: "₺200",             // tek fiyatsa "" bırak
    malzeme: ["Özellik 1", "Özellik 2", "Özellik 3"],
    rozet: "new",                   // pop | new | sale | ozel | ""
    icon: "car"                     // car | phone | cpu | box | wheel | star | home | edit
  },
*/
