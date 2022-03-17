// bài 1

document.getElementById("btnTinhDiem").onclick = function () {
  // đầu vào:
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diemMon1 = document.getElementById("diemMon1").value * 1;
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  var diemMon3 = document.getElementById("diemMon3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var uuTienKhuVuc;
  var diemUuTienDoiTuong;
  //   xử lý
  // tạo hàm xét điểm khu vực để biết điểm đc + là bn,
  //   tạo hàm xét điểm đối tượng ưu tiên để biết điểm đc + là bn,
  // dùng kq trả về của 2 hàm để tính tổng điểm ưu tiên
  //   tạo hàm tính đk tốt nghiệp,trả về 2 kq là true or false
  //   gán giá trị cho hàm trên rồi xét dk true và fail để xuất đầu ra
  //   cụ thể:
  //   xét khu vực, nếu khu vực đc + điểm thì trả về giá trị là điểm khu vực đc ưu tiên
  function xetUuTienKhuVuc(khuVuc) {
    if (khuVuc == "A") {
      uuTienKhuVuc = 2;
    } else if (khuVuc == "B") {
      uuTienKhuVuc = 1;
    } else if (khuVuc == "C") {
      uuTienKhuVuc = 0.5;
    } else if (khuVuc == "X") {
      uuTienKhuVuc = 0;
    } else {
      ("hông có địa chỉ này nha");
    }
    return uuTienKhuVuc;
  }
  //   xét đối tượng ưu tiên, nếu là đối tượng 1 2 3 thì đc + điểm
  function xetDoiTuongUuTien(doiTuong) {
    if (doiTuong == 1) {
      diemUuTienDoiTuong = 2.5;
    } else if (doiTuong == 2) {
      diemUuTienDoiTuong = 1.5;
    } else if (doiTuong == 3) {
      diemUuTienDoiTuong = 1;
    } else if (doiTuong == 0) {
      diemUuTienDoiTuong = 0;
    } else {
      ("Nhập đối tượng đàng hoàng zô");
    }
    return diemUuTienDoiTuong;
  }
  // khai báo biến điểm khu vực
  var diemKhuVuc = xetUuTienKhuVuc(khuVuc);
  //   khai báo biến điểm đối tượng ưu tiên
  var diemDoiTuong = xetDoiTuongUuTien(doiTuong);
  //   tổng điểm 3 môn
  var tongDiem3Mon = diemMon1 + diemMon2 + diemMon3;
  //   tổng điểm ưu tiên = điểm ưu tiên khu vực + điểm ưu tiên đối tượng
  var tongDiemUuTien = diemKhuVuc + diemDoiTuong;
  //   hàm xét điểm, nếu tổng điểm 3 môn + tổng điểm ưu tiên >= điểm chuẩn và điểm các môn khác 0 thì trả về giá trị là true
  function xetDiem(tongDiem3Mon, tongDiemUuTien) {
    if (
      tongDiem3Mon + tongDiemUuTien >= diemChuan &&
      diemMon1 != 0 &&
      diemMon2 != 0 &&
      diemMon3 != 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  //   gán giá trị cho function xetDiem
  var status = xetDiem(tongDiem3Mon, tongDiemUuTien);
  //   xét giá trị nếu true tức là đạt đủ dk tốt nghiệp, false nếu k đủ điểm
  if (status) {
    //   đầu ra nếu pass
    document.getElementById("phanLoai").innerHTML =
      "ĐẬU rồi vác xác đi quẫy đi còn gì nữa";
  } else {
    //   đầu ra nếu false
    document.getElementById("phanLoai").innerHTML =
      "TRƯỢT rồi trầm cảm lên đi bạn ơi";
  }
};
// bài 2:
document.getElementById("btnTinhTienDien").onclick = function () {
  // đầu vào
  var ten = document.getElementById("ten").value;
  var soKw = document.getElementById("soDien").value * 1;
  var soTienDienPhaiTra;
  function tinhMocTienDien(soKw) {
    var moc1 = 500 * soKw;
    var moc2 = 650 * soKw;
    var moc3 = 850 * soKw;
    var moc4 = 1100 * soKw;
    var conLai = 1300 * soKw;
    // mốc 1 nhân số kw với đơn giá
    if (soKw <= 50) {
      moc1;
      return moc1;
    //   mốc 2 khi quá 50 kw sẽ nhân số kw sau 50 với đơn giá 650 và + 50 kw đầu với đơn giá mốc 1
    } else if (soKw > 50 && soKw <= 101) {
      (soKw - 50) * 650 + (50 * 500) == moc2;
      return moc2;
      //   mốc 3 khi quá 101 kw sẽ nhân số kw sau 101 với đơn giá mốc  3 và + 50 kw đầu với đơn giá mốc 1 + 51 kw giá mốc 2
    } else if (soKw > 101 && soKw <= 202) {
      (soKw - 101) * 850 + (50 * 500) + (51 * 650) == moc3;
      return moc3;
    //   mốc 4 khi quá 202 kw thì sẽ nhân số kw sau 202 với đơn giá mốc 4 và + 3 mốc trước đó với đơn giá tương ứng
    } else if (soKw > 202 && soKw <= 352) {
       (soKw-202)*1100 +(50 * 500) +(51 * 650) +(101*850) == moc4;
      return moc4;
        //   mốc còn lại khi quá 352kw thì sẽ nhân số kw sau 352 với đơn giá mốc conlai và + 4 mốc trước đó với đơn giá tương ứng
    } else {
        (soKw-352)*1300+(50 * 500) +(51 * 650) +(101*850)+(150*1100)==conLai;
      return conLai;
    }
  }

  currentFormat = new Intl.NumberFormat("vn-VN");
  var tienDien = tinhMocTienDien(soKw);
  var xuatBill = (document.getElementById("tinhTien").innerHTML = "<div>");
  xuatBill += "<p>Đề nghị đồng chí:</p>" ;
  xuatBill += ten;
  xuatBill +=
    "phải nộp số tiền điện là: " +
    currentFormat.format(tienDien) +
    "VND" +
    "<p>xài bớt bớt đi nha má</p>";
  xuatBill += "</div>";
  document.getElementById("tinhTien").innerHTML = xuatBill;
};

// đầu vào:
// d
