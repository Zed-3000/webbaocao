// js/giohang.js

// 1. Kho dữ liệu sản phẩm (Dùng chung cho toàn web)
const khoSanPham = [
    { id: 'mu', ten: 'ÁO MANCHESTER UNITED', gia: '3,000,000₫', anh: 'img/ao1.jpg' },
    { id: 'brazil', ten: 'ÁO ĐẤU SÂN NHÀ BRAZIL 2026', gia: '2,399,000₫', anh: 'img/ao2.jpg' },
    { id: 'arsenal', ten: 'ÁO ĐẤU SÂN NHÀ ARSENAL 25/26', gia: '3,000,000₫', anh: 'img/ao3.jpg' },
    { id: 'duc', ten: 'ÁO ĐẤU SÂN NHÀ ĐỨC NĂM 2026', gia: '3,779,000₫', anh: 'img/ao_20.jpg' },
    { id: 'england', ten: 'ÁO ĐẤU SÂN NHÀ ENGLAND 2026', gia: '2,399,000₫', anh: 'img/ao_18.jpg' },
    { id: 'liverpool', ten: 'ÁO ĐẤU SÂN NHÀ LIVERPOOL FC 26/27', gia: '120,000₫', anh: 'img/ao_9.jpg' },
    { id: 'halan', ten: 'ÁO ĐẤU SÂN NHÀ HÀ LAN NĂM 2026', gia: '2,399,000₫', anh: 'img/ao_11.jpg' },
    { id: 'uruguay', ten: 'ÁO ĐẤU SÂN NHÀ URUGUAY 2026', gia: '3,779,000₫', anh: 'img/ao_1.jpg' },
    { id: 'nauy', ten: 'ÁO ĐẤU SÂN NHÀ NA UY 2026', gia: '120,000₫', anh: 'img/ao_3.jpg' },
    { id: 'australia', ten: 'ÁO ĐẤU SÂN NHÀ AUSTRALIA', gia: '120,000₫', anh: 'img/ao_5.jpg' },
    { id: 'juventus', ten: 'ÁO ĐẤU SÂN NHÀ JUVENTUS', gia: '120,000₫', anh: 'img/ao_15.jpg' },
    { id: 'jordan', ten: 'ÁO KHOÁC JORDAN PRE', gia: '2,959,000₫', anh: 'img/ao_16.jpg' }
];

// Hàm chuyển đổi tiền "3,000,000₫" thành số 3000000 để tính toán
function parseTien(tienString) {
    return parseInt(tienString.replace(/[^0-9]/g, ''));
}

// Hàm format số 3000000 thành "3,000,000₫" để hiển thị
function formatTien(soTien) {
    return soTien.toLocaleString('vi-VN') + '₫';
}

// 2. Hàm Thêm vào giỏ hàng
function themVaoGio(idSanPham, size = 'M') {
    // Tìm sản phẩm trong kho
    let sp = khoSanPham.find(item => item.id === idSanPham);
    if (!sp) return;

    // Lấy giỏ hàng từ bộ nhớ (nếu chưa có thì tạo mảng rỗng)
    let gioHang = JSON.parse(localStorage.getItem('wolfclub_cart')) || [];

    // Kiểm tra xem áo này (cùng id và cùng size) đã có trong giỏ chưa
    let spDaCo = gioHang.find(item => item.id === idSanPham && item.size === size);

    if (spDaCo) {
        spDaCo.soluong += 1; // Có rồi thì tăng số lượng
    } else {
        // Chưa có thì thêm mới
        gioHang.push({
            id: sp.id,
            ten: sp.ten,
            gia: parseTien(sp.gia),
            anh: sp.anh,
            size: size,
            soluong: 1
        });
    }

    // Lưu lại vào bộ nhớ và cập nhật chấm đỏ
    localStorage.setItem('wolfclub_cart', JSON.stringify(gioHang));
    capNhatSoLuongGioHang();
    alert("Đã thêm " + sp.ten + " (Size: " + size + ") vào giỏ hàng!");
}

// 3. Hàm cập nhật chấm đỏ trên Header
function capNhatSoLuongGioHang() {
    let gioHang = JSON.parse(localStorage.getItem('wolfclub_cart')) || [];
    let tongSoLuong = gioHang.reduce((sum, item) => sum + item.soluong, 0);
    
    let cartDots = document.querySelectorAll('.cart-dot');
    cartDots.forEach(dot => {
        dot.innerText = tongSoLuong;
    });
}

// Chạy cập nhật chấm đỏ ngay khi tải trang
document.addEventListener('DOMContentLoaded', capNhatSoLuongGioHang);