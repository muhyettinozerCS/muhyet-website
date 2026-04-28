import React from "react";

export default function PrivacyPolicy() {
    return (
        <div style={{ padding: "2rem", lineHeight: 1.6, maxWidth: 920, margin: "0 auto" }}>
            <h1>HammurBey Denetim Gizlilik Politikası</h1>
            <p><strong>Son güncelleme tarihi:</strong> 28 Nisan 2026</p>

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

            <p><strong>İletişim e-posta adresi:</strong> muhyettinozer@gmail.com</p>
            <p><strong>Geliştirici:</strong> Muhyettin Özer</p>

            <h2>1. Uygulama Hakkında</h2>
            <p>
                HammurBey Denetim, kurum içi denetim ve eğitim süreçlerini yürütmek amacıyla
                geliştirilmiş bir mobil uygulamadır.
            </p>

            <h2>2. İşlenen Veriler</h2>
            <ul>
                <li>Kullanıcı e-posta adresi ve hesap bilgileri</li>
                <li>Denetim yanıtları, notlar ve rapor verileri</li>
                <li>Kullanıcı tarafından eklenen fotoğraflar</li>
                <li>Şube doğrulama için konum bilgisi</li>
            </ul>

            <h2>3. Verilerin Kullanım Amacı</h2>
            <ul>
                <li>Kullanıcı girişi ve yetkilendirme</li>
                <li>Denetim süreçlerini yürütme</li>
                <li>PDF rapor oluşturma ve paylaşma</li>
            </ul>

            <h2>4. Kamera ve Konum Kullanımı</h2>
            <p>
                Kamera, denetim kayıtlarına fotoğraf eklemek için kullanılır. Konum verisi,
                şube doğrulaması amacıyla kullanılır ve başka amaçla paylaşılmaz.
            </p>

            <h2>5. Üçüncü Taraf Hizmetler</h2>
            <ul>
                <li>Firebase Authentication</li>
                <li>Firebase Firestore</li>
                <li>Firebase Storage</li>
            </ul>

            <h2>6. Veri Paylaşımı</h2>
            <p>
                Veriler yalnızca uygulama işlevleri için kullanılır ve reklam veya pazarlama
                amacıyla üçüncü taraflarla paylaşılmaz.
            </p>

            <h2>7. Veri Güvenliği</h2>
            <p>
                Veriler Firebase altyapısında güvenli şekilde saklanır.
            </p>

            {/* 🔥 EKLENEN KRİTİK BÖLÜM */}
            <h2>8. Hesap Silme</h2>
            <p>
                Kullanıcılar, uygulama içindeki “Hesabı Sil” özelliğini kullanarak hesaplarını
                kalıcı olarak silebilirler.
            </p>
            <p>
                Alternatif olarak, aşağıdaki e-posta adresi üzerinden hesap silme talebinde
                bulunabilirler:
            </p>
            <p><strong>muhyettinozer@gmail.com</strong></p>
            <p>
                Hesap silme talebi doğrulandıktan sonra kullanıcıya ait tüm veriler makul süre
                içerisinde silinir.
            </p>

            <h2>9. Kullanıcı Hakları</h2>
            <p>
                Kullanıcılar verileri ile ilgili talepler için bizimle iletişime geçebilir.
            </p>

            <h2>10. Çocukların Gizliliği</h2>
            <p>
                Uygulama 13 yaş altı kullanıcılar için tasarlanmamıştır.
            </p>

            <h2>11. İletişim</h2>
            <p><strong>muhyettinozer@gmail.com</strong></p>
        </div>
    );
}
