
    const khoSanPham = [
        { id: 'mu', ten: 'ÁO MANCHESTER UNITED', gia: '3,000,000₫', anhTruoc: '../img/ao1b.jpg', anhSau: '../img/ao1.jpg' },
        { id: 'brazil', ten: 'ÁO ĐẤU SÂN NHÀ BRAZIL 2026', gia: '2,399,000₫', anhTruoc: '../img/ao2b.jpg', anhSau: '../img/ao2.jpg' },
        { id: 'arsenal', ten: 'ÁO ĐẤU SÂN NHÀ ARSENAL 25/26', gia: '3,000,000₫', anhTruoc: '../img/ao3.jpg', anhSau: '../img/ao3b.jpg' },
        { id: 'duc', ten: 'ÁO ĐẤU SÂN NHÀ ĐỨC NĂM 2026', gia: '3,779,000₫', anhTruoc: '../img/ao_20.jpg', anhSau: '../img/ao_21.jpg' },
        { id: 'england', ten: 'ÁO ĐẤU SÂN NHÀ ENGLAND 2026', gia: '2,399,000₫', anhTruoc: '../img/ao_18.jpg', anhSau: '../img/ao_19.jpg' },
        { id: 'liverpool', ten: 'ÁO ĐẤU SÂN NHÀ LIVERPOOL FC 26/27', gia: '120,000đ', anhTruoc: '../img/ao_9.jpg', anhSau: '../img/ao_10.jpg' },
        { id: 'halan', ten: 'ÁO ĐẤU SÂN NHÀ HÀ LAN NĂM 2026', gia: '2,399,000₫', anhTruoc: '../img/ao_11.jpg', anhSau: '../img/ao_12.jpg' },
        { id: 'uruguay', ten: 'ÁO ĐẤU SÂN NHÀ URUGUAY 2026', gia: '3,779,000₫', anhTruoc: '../img/ao_1.jpg', anhSau: '../img/ao_2.jpg' },
        { id: 'nauy', ten: 'ÁO ĐẤU SÂN NHÀ NA UY 2026', gia: '120,000đ', anhTruoc: '../img/ao_3.jpg', anhSau: '../img/ao_4.jpg' },
        { id: 'australia', ten: 'ÁO ĐẤU SÂN NHÀ AUSTRALIA', gia: '120,000đ', anhTruoc: '../img/ao_5.jpg', anhSau: '../img/ao_6.jpg' },
        { id: 'juventus', ten: 'ÁO ĐẤU SÂN NHÀ JUVENTUS', gia: '120,000đ', anhTruoc: '../img/ao_15.jpg', anhSau: '../img/ao_14.jpg' },
        { id: 'jordan', ten: 'ÁO KHOÁC JORDAN PRE', gia: '2,959,000₫', anhTruoc: '../img/ao_16.jpg', anhSau: '../img/ao_17.jpg' }
    ];
    const urlParams = new URLSearchParams(window.location.search);
    const idSanPham = urlParams.get('id');
    if (idSanPham) {
        const spTimThay = khoSanPham.find(function(sp) {
            return sp.id === idSanPham;
        });

        if (spTimThay) {
            document.getElementById('sp-ten').innerText = spTimThay.ten;
            document.getElementById('sp-gia').innerText = spTimThay.gia;
            document.getElementById('sp-anh-truoc').src = spTimThay.anhTruoc;
            document.getElementById('sp-anh-sau').src = spTimThay.anhSau;
            document.title = spTimThay.ten + " - Wolfclub";
        } else {
            document.getElementById('sp-ten').innerText = "SẢN PHẨM KHÔNG TỒN TẠI";
            document.getElementById('sp-gia').innerText = "";
            document.getElementById('sp-anh-truoc').style.display = "none";
            document.getElementById('sp-anh-sau').style.display = "none";
        }
    } else {
        document.getElementById('sp-ten').innerText = "VUI LÒNG CHỌN SẢN PHẨM TỪ TRANG CHỦ";
        document.getElementById('sp-gia').innerText = "";
        document.getElementById('sp-anh-truoc').style.display = "none";
        document.getElementById('sp-anh-sau').style.display = "none";
    }