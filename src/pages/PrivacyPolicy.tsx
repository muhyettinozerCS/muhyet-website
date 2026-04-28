import React from "react";

export default function PrivacyPolicy() {
    return (
        <div style={{ padding: "2rem", lineHeight: 1.6, maxWidth: 920, margin: "0 auto" }}>
            <h1>Gizlilik Politikasi</h1>
            <p><strong>Son guncelleme tarihi:</strong> 28 Nisan 2026</p>
            <p>
                <strong>Web sitesi:</strong>{" "}
                <a
                    href="https://www.muhyettinozer.com/privacy-policy-hamurbeydenetim"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.muhyettinozer.com/privacy-policy-hamurbeydenetim
                </a>
            </p>
            <p><strong>Iletisim e-posta adresi:</strong> muhyettinozer@gmail.com</p>
            <p><strong>Gelistirici:</strong> Muhyettin Ozer</p>

            <h2>1. Uygulama Hakkinda</h2>
            <p>
                HammurBey Denetim, kurum ici denetim ve egitim sureclerini yurutmek amaciyla
                gelistirilmis bir mobil uygulamadir. Uygulama; yetkili kullanicilarin sube
                secmesi, denetim formlarini doldurmasi, egitim kayitlari olusturmasi, fotograf
                eklemesi, rapor olusturmasi ve ilgili kisilere e-posta ile rapor gondermesi icin
                kullanilir.
            </p>

            <h2>2. Islenen Veriler</h2>
            <p>
                Uygulama, yalnizca uygulama islevlerini saglamak ve kurum ici surecleri kayit
                altina almak icin gerekli verileri isler. Bu kapsamda asagidaki veriler
                islenebilir:
            </p>
            <ul>
                <li>Kullanici e-posta adresi, gorunen ad ve rol/yetki bilgileri</li>
                <li>Sube bilgileri, sube e-posta adresleri ve sube yoneticisi e-posta adresleri</li>
                <li>Denetim yanitlari, notlar, puanlar, tarih bilgisi ve denetim durumu</li>
                <li>Egitim kayitlari, egitim notlari ve ilgili aksiyon bilgileri</li>
                <li>Kullanici tarafindan eklenen denetim fotograflari</li>
                <li>Imza ekraninda girilen ad ve unvan bilgileri</li>
                <li>Sube yakinlik kontrolu icin cihaz konumu</li>
            </ul>

            <h2>3. Verilerin Kullanilma Amaci</h2>
            <p>Islenen veriler su amaclarla kullanilir:</p>
            <ul>
                <li>Kullanici girisi ve yetkilendirme islemlerini gerceklestirmek</li>
                <li>Kullanicinin yetkili oldugu sube ve kayitlara erisimini saglamak</li>
                <li>Denetim ve egitim kayitlarini olusturmak, saklamak ve goruntulemek</li>
                <li>Denetim raporu ve PDF ciktisi olusturmak</li>
                <li>Raporlari kullanicinin onayi ile e-posta uygulamasi uzerinden gondermek</li>
                <li>Subeye yakinlik kontrolu yaparak denetim surecini dogrulamak</li>
            </ul>

            <h2>4. Kamera, Fotograf ve Konum Izinleri</h2>
            <p>
                Uygulama, kullanicinin acik izniyle kamera ve fotograf kutuphanesi ozelliklerini
                kullanabilir. Eklenen fotograflar denetim kaydinin bir parcasi olarak Firebase
                Storage uzerinde saklanabilir ve raporlarda kullanilabilir.
            </p>
            <p>
                Konum izni, kullanicinin secilen subeye yakinligini kontrol etmek icin kullanilir.
                Konum bilgisi reklam, pazarlama veya ucuncu taraf takip amaciyla kullanilmaz.
            </p>

            <h2>5. Ucuncu Taraf Hizmetler</h2>
            <p>Uygulama asagidaki Firebase hizmetlerini kullanir:</p>
            <ul>
                <li><strong>Firebase Authentication:</strong> kullanici girisi ve hesap dogrulama</li>
                <li><strong>Firebase Firestore:</strong> sube, kullanici yetkileri, denetim ve egitim kayitlari</li>
                <li><strong>Firebase Storage:</strong> kullanici tarafindan eklenen denetim fotograflari</li>
            </ul>
            <p>
                Uygulamada reklam SDK'si, pazarlama takip sistemi veya reklam amacli analiz araci
                bulunmamaktadir. Veriler reklam veya ucuncu taraf takip amaciyla kullanilmaz.
            </p>

            <h2>6. Verilerin Paylasimi</h2>
            <p>
                Denetim ve egitim raporlari, kullanicinin manuel islemiyle cihazdaki e-posta
                uygulamasi uzerinden ilgili alicilara gonderilebilir. Bunun disinda veriler,
                uygulamanin calismasi icin kullanilan Firebase altyapisi haricinde reklam veya
                pazarlama amacli ucuncu taraflarla paylasilmaz.
            </p>

            <h2>7. Veri Saklama ve Guvenlik</h2>
            <p>
                Kayitlar kurum ici denetim ve egitim sureclerinin yurutulmesi icin gerekli oldugu
                surece Firebase altyapisinda saklanabilir. Firebase servisleri tarafindan saglanan
                kimlik dogrulama, yetkilendirme ve guvenlik mekanizmalari kullanilir.
            </p>

            <h2>8. Kullanici Haklari</h2>
            <p>
                Kullanici, hesabina veya uygulamada islenen verilerine iliskin talepler icin
                gelistirici ile iletisime gecebilir. Hesap silme veya veriyle ilgili talepler,
                uygulamanin kurum ici isleyisi ve yasal saklama yukumlulukleri dikkate alinarak
                degerlendirilir.
            </p>

            <h2>9. Cocuklarin Gizliligi</h2>
            <p>
                HammurBey Denetim, 13 yasin altindaki cocuklara yonelik degildir. Uygulama,
                bilerek 13 yasin altindaki cocuklardan veri toplamaz.
            </p>

            <h2>10. Iletisim</h2>
            <p>
                Gizlilik politikasi veya veri isleme surecleriyle ilgili sorulariniz icin
                asagidaki e-posta adresi uzerinden iletisime gecebilirsiniz:
            </p>
            <p><strong>muhyettinozer@gmail.com</strong></p>
        </div>
    );
}
